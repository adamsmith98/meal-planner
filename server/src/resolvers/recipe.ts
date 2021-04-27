import { ContextType } from "../ContextType";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Recipe } from "../entities/Recipe";
import { User } from "../entities/User";
import { CookingTime, Price } from "../types";
import { GQLCookingTime, GQLPrice } from "../graphqlTypes";
import { getConnection } from "typeorm";

@InputType()
class RecipeInput {
  @Field()
  name!: string;
  @Field(() => [String])
  ingredients!: string[];
  @Field()
  cuisine!: string;
  @Field(() => GQLCookingTime)
  cookingTime!: CookingTime;
  @Field(() => GQLPrice)
  price!: Price;
}

@InputType()
class UpdateRecipeInput {
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => [String], { nullable: true })
  ingredients?: string[];
  @Field(() => String, { nullable: true })
  cuisine?: string;
  @Field(() => GQLCookingTime, { nullable: true })
  cookingTime?: CookingTime;
  @Field(() => GQLPrice, { nullable: true })
  price?: Price;
}

@Resolver(() => Recipe)
export class RecipeResolver {
  @FieldResolver()
  creator(@Root() recipe: Recipe) {
    return User.findOne(recipe.creatorId);
  }

  @Query(() => Recipe, { nullable: true })
  recipe(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: ContextType
  ): Promise<Recipe | undefined> {
    if (!req.session.userId) {
      throw new Error("not authorized");
    }

    return Recipe.findOne({ id, creatorId: req.session.userId });
  }

  @Query(() => [Recipe])
  recipes(@Ctx() { req }: ContextType): Promise<Recipe[] | undefined> {
    if (!req.session.userId) {
      throw new Error("not authorized");
    }

    return Recipe.find({ where: { creatorId: req.session.userId } });
  }

  @Mutation(() => Recipe, { nullable: true })
  createRecipe(
    @Arg("recipeInput") recipeInput: RecipeInput,
    @Ctx() { req }: ContextType
  ): Promise<Recipe> | null {
    if (!req.session.userId) {
      throw new Error("not authorized");
    }
    return Recipe.create({
      ...recipeInput,
      creatorId: req.session.userId,
    }).save();
  }

  @Mutation(() => Recipe, { nullable: true })
  async updateRecipe(
    @Arg("id", () => Int) id: number,
    @Arg("updateRecipeInput") updateRecipeInput: UpdateRecipeInput,
    @Ctx() { req }: ContextType
  ): Promise<Recipe | null> {
    if (!req.session.userId) {
      throw new Error("not authorized");
    }

    const result = await getConnection()
      .createQueryBuilder()
      .update(Recipe)
      .set({ ...updateRecipeInput })
      .where('id = :id and "creatorId" = :creatorId', {
        id,
        creatorId: req.session.userId,
      })
      .returning("*")
      .execute();

    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteRecipe(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: ContextType
  ) {
    if (!req.session.userId) {
      throw new Error("not authorized");
    }

    await Recipe.delete({ id, creatorId: req.session.userId });
    return true;
  }
}
