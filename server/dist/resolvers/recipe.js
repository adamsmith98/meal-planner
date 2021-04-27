"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../entities/Recipe");
const User_1 = require("../entities/User");
const graphqlTypes_1 = require("../graphqlTypes");
const typeorm_1 = require("typeorm");
let RecipeInput = class RecipeInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RecipeInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], RecipeInput.prototype, "ingredients", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RecipeInput.prototype, "cuisine", void 0);
__decorate([
    type_graphql_1.Field(() => graphqlTypes_1.GQLCookingTime),
    __metadata("design:type", String)
], RecipeInput.prototype, "cookingTime", void 0);
__decorate([
    type_graphql_1.Field(() => graphqlTypes_1.GQLPrice),
    __metadata("design:type", String)
], RecipeInput.prototype, "price", void 0);
RecipeInput = __decorate([
    type_graphql_1.InputType()
], RecipeInput);
let UpdateRecipeInput = class UpdateRecipeInput {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateRecipeInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], UpdateRecipeInput.prototype, "ingredients", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateRecipeInput.prototype, "cuisine", void 0);
__decorate([
    type_graphql_1.Field(() => graphqlTypes_1.GQLCookingTime, { nullable: true }),
    __metadata("design:type", String)
], UpdateRecipeInput.prototype, "cookingTime", void 0);
__decorate([
    type_graphql_1.Field(() => graphqlTypes_1.GQLPrice, { nullable: true }),
    __metadata("design:type", String)
], UpdateRecipeInput.prototype, "price", void 0);
UpdateRecipeInput = __decorate([
    type_graphql_1.InputType()
], UpdateRecipeInput);
let RecipeResolver = class RecipeResolver {
    creator(recipe) {
        return User_1.User.findOne(recipe.creatorId);
    }
    recipe(id, { req }) {
        if (!req.session.userId) {
            throw new Error("not authorized");
        }
        return Recipe_1.Recipe.findOne({ id, creatorId: req.session.userId });
    }
    recipes({ req }) {
        if (!req.session.userId) {
            throw new Error("not authorized");
        }
        return Recipe_1.Recipe.find({ where: { creatorId: req.session.userId } });
    }
    createRecipe(recipeInput, { req }) {
        if (!req.session.userId) {
            throw new Error("not authorized");
        }
        return Recipe_1.Recipe.create(Object.assign(Object.assign({}, recipeInput), { creatorId: req.session.userId })).save();
    }
    updateRecipe(id, updateRecipeInput, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                throw new Error("not authorized");
            }
            const result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(Recipe_1.Recipe)
                .set(Object.assign({}, updateRecipeInput))
                .where('id = :id and "creatorId" = :creatorId', {
                id,
                creatorId: req.session.userId,
            })
                .returning("*")
                .execute();
            return result.raw[0];
        });
    }
    deleteRecipe(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                throw new Error("not authorized");
            }
            yield Recipe_1.Recipe.delete({ id, creatorId: req.session.userId });
            return true;
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Recipe_1.Recipe]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "creator", null);
__decorate([
    type_graphql_1.Query(() => Recipe_1.Recipe, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipe", null);
__decorate([
    type_graphql_1.Query(() => [Recipe_1.Recipe]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipes", null);
__decorate([
    type_graphql_1.Mutation(() => Recipe_1.Recipe, { nullable: true }),
    __param(0, type_graphql_1.Arg("recipeInput")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RecipeInput, Object]),
    __metadata("design:returntype", Object)
], RecipeResolver.prototype, "createRecipe", null);
__decorate([
    type_graphql_1.Mutation(() => Recipe_1.Recipe, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("updateRecipeInput")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateRecipeInput, Object]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "updateRecipe", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "deleteRecipe", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver(() => Recipe_1.Recipe)
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
//# sourceMappingURL=recipe.js.map