"use strict";
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
exports.NewRecipes1693170517482793 = void 0;
class NewRecipes1693170517482793 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
        insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Chilli con carne', '{"Olive oil","Chicken thighs","Sugar","Carrot"}', 'Poland', 'Slow', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Tomato","Cheese","Garlic","Pepper"}', 'China', 'Fast', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Carrot","Penne","Olive oil","Garlic","Pineapple","Onion","Cheese","Salt","Coconut milk","Milk"}', 'Japan', 'Medium', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Green curry', '{"Tuna","Pepper","Dark Chocolate","Chicken thighs","Milk","Salt","Lime","Sugar","Tomato puree","Penne"}', 'Indonesia', 'Slow', '£', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Yellow curry paste","Lime","Chopped tomatoes","Pepper","Salt","Tuna","Onion","Cheese"}', 'Brazil', 'Slow', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Steak', '{"Pepper","Olive oil","Yellow curry paste","Milk","Penne","Sugar","Coconut milk","Cheese"}', 'Tunisia', 'Medium', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Yellow curry paste","Pepper","Lime","Penne","Beef mince","Milk"}', 'Russia', 'Fast', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Chilli con carne', '{"Penne","Salt","Pepper","Coconut milk","Olive oil","Dark Chocolate","Sugar"}', 'Honduras', 'Fast', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Pineapple","Olive oil","Onion","Garlic"}', 'China', 'Fast', '£', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Beef mince","Lime","Dark Chocolate","Tuna","Carrot"}', 'Vietnam', 'Fast', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Cheese","Salt","Onion","Tomato","Coconut milk","Tomato puree","Beef mince","Penne"}', 'China', 'Fast', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Chicken thighs","Onion","Pineapple","Chopped tomatoes"}', 'Bangladesh', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Milk","Dark Chocolate","Garlic","Chicken thighs","Yellow curry paste","Chopped tomatoes"}', 'Philippines', 'Fast', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Vindaloo', '{"Yellow curry paste","Salt","Sugar","Pineapple","Lime","Beef mince"}', 'China', 'Medium', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Green curry', '{"Milk","Penne","Pineapple","Lime","Yellow curry paste","Onion","Carrot"}', 'Mexico', 'Medium', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Chicken thighs","Sugar","Pepper","Yellow curry paste","Olive oil","Tuna","Tomato puree","Carrot","Milk","Beef mince"}', 'Indonesia', 'Slow', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Sugar","Chopped tomatoes","Onion","Chicken thighs","Beef mince"}', 'Chile', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mushroom risotto', '{"Olive oil","Beef mince","Yellow curry paste","Onion","Penne","Pineapple","Tuna","Coconut milk","Cheese","Sugar"}', 'Mongolia', 'Slow', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Yellow curry', '{"Chicken thighs","Dark Chocolate","Garlic","Pineapple","Lime","Salt","Chopped tomatoes","Tuna","Coconut milk","Sugar"}', 'Indonesia', 'Fast', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Tomato puree","Dark Chocolate","Onion","Pepper","Yellow curry paste","Carrot","Milk"}', 'Vietnam', 'Slow', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Pad Thai', '{"Yellow curry paste","Chopped tomatoes","Tomato puree","Tomato"}', 'Tunisia', 'Medium', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Chilli con carne', '{"Tomato puree","Tomato","Tuna","Coconut milk","Pepper","Garlic"}', 'Poland', 'Medium', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Tuna","Yellow curry paste","Milk","Olive oil","Pineapple","Beef mince","Coconut milk","Chicken thighs","Dark Chocolate","Tomato"}', 'China', 'Slow', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Yellow curry', '{"Tomato puree","Yellow curry paste","Chicken thighs","Coconut milk","Olive oil","Penne","Garlic","Milk"}', 'China', 'Slow', '£', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Steak', '{"Beef mince","Cheese","Coconut milk","Lime","Tomato puree"}', 'Russia', 'Slow', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Butter chicken', '{"Pineapple","Cheese","Dark Chocolate","Yellow curry paste","Coconut milk"}', 'Greece', 'Slow', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Milk","Chicken thighs","Penne","Carrot","Tuna"}', 'France', 'Medium', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Yellow curry', '{"Tomato puree","Chicken thighs","Coconut milk","Milk","Salt","Beef mince","Penne","Lime","Olive oil","Tuna"}', 'Russia', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tuna pasta', '{"Salt","Garlic","Tuna","Carrot","Chopped tomatoes","Sugar","Beef mince"}', 'Indonesia', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Pineapple","Chopped tomatoes","Tomato puree","Tomato","Salt","Tuna","Beef mince"}', 'Kazakhstan', 'Medium', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Tomato","Sugar","Penne","Tuna","Olive oil","Beef mince","Salt"}', 'Brazil', 'Fast', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Steak', '{"Dark Chocolate","Sugar","Chopped tomatoes","Beef mince","Penne","Lime","Tomato puree"}', 'China', 'Fast', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Vindaloo', '{"Lime","Tuna","Tomato puree","Olive oil","Sugar","Milk"}', 'Ireland', 'Slow', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Tuna","Olive oil","Coconut milk","Onion","Garlic","Lime","Tomato"}', 'France', 'Medium', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Steak', '{"Chopped tomatoes","Lime","Onion","Tomato puree","Salt","Carrot","Garlic","Tomato","Pineapple"}', 'Russia', 'Slow', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Sugar","Coconut milk","Tomato puree","Chopped tomatoes","Pepper","Olive oil","Garlic","Carrot","Lime"}', 'China', 'Slow', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Chilli con carne', '{"Coconut milk","Garlic","Pineapple","Milk","Pepper","Yellow curry paste","Cheese","Tomato","Chopped tomatoes","Tomato puree"}', 'Philippines', 'Medium', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Vindaloo', '{"Carrot","Garlic","Pepper","Coconut milk","Chicken thighs","Salt"}', 'China', 'Slow', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Vindaloo', '{"Olive oil","Garlic","Chopped tomatoes","Dark Chocolate","Tomato","Penne","Chicken thighs","Onion","Cheese","Pineapple"}', 'Brazil', 'Slow', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Beef mince","Milk","Dark Chocolate","Tuna"}', 'China', 'Fast', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Tuna","Sugar","Lime","Penne","Dark Chocolate","Onion"}', 'China', 'Slow', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Chicken thighs","Sugar","Pineapple","Onion","Salt","Chopped tomatoes","Milk","Dark Chocolate"}', 'Brazil', 'Medium', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Onion","Pineapple","Sugar","Milk","Beef mince","Tuna","Penne","Tomato puree"}', 'Poland', 'Slow', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mushroom risotto', '{"Dark Chocolate","Olive oil","Coconut milk","Tomato puree","Milk","Penne"}', 'Peru', 'Fast', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Coconut milk","Tomato","Salt","Dark Chocolate","Yellow curry paste","Lime","Pepper","Beef mince"}', 'Philippines', 'Fast', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Pad Thai', '{"Chopped tomatoes","Cheese","Pineapple","Chicken thighs","Beef mince","Tomato puree","Lime","Coconut milk","Penne"}', 'Indonesia', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Lime","Carrot","Pepper","Garlic","Olive oil","Chicken thighs","Penne"}', 'Indonesia', 'Medium', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Salt","Tuna","Onion","Chicken thighs","Pepper","Tomato","Pineapple","Milk"}', 'Philippines', 'Medium', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Tomato","Pepper","Dark Chocolate","Coconut milk","Garlic"}', 'Canada', 'Slow', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Tuna","Onion","Garlic","Tomato puree"}', 'Paraguay', 'Slow', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Green curry', '{"Pepper","Milk","Pineapple","Carrot","Tuna","Coconut milk","Beef mince","Garlic"}', 'China', 'Medium', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mushroom risotto', '{"Milk","Penne","Dark Chocolate","Garlic","Olive oil","Tomato puree","Pepper"}', 'China', 'Fast', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Penne","Pepper","Tomato puree","Chicken thighs","Chopped tomatoes","Tuna","Carrot","Yellow curry paste"}', 'China', 'Medium', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Butter chicken', '{"Penne","Salt","Tuna","Tomato","Carrot","Pineapple","Coconut milk","Cheese","Lime"}', 'Russia', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Cheese","Tomato puree","Coconut milk","Onion","Milk"}', 'Peru', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Butter chicken', '{"Coconut milk","Olive oil","Pineapple","Garlic"}', 'Anguilla', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Lime","Yellow curry paste","Pineapple","Milk","Dark Chocolate","Tomato puree","Cheese","Chicken thighs"}', 'China', 'Fast', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Yellow curry', '{"Tomato puree","Chopped tomatoes","Chicken thighs","Pineapple"}', 'Philippines', 'Fast', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Penne","Tuna","Yellow curry paste","Carrot","Cheese","Dark Chocolate","Salt","Garlic"}', 'Russia', 'Fast', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Chopped tomatoes","Lime","Coconut milk","Cheese","Milk","Dark Chocolate"}', 'China', 'Medium', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Dark Chocolate","Sugar","Olive oil","Coconut milk","Carrot","Yellow curry paste","Pepper","Lime","Onion","Tomato puree"}', 'Philippines', 'Medium', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Chilli con carne', '{"Chopped tomatoes","Olive oil","Dark Chocolate","Salt","Milk","Coconut milk","Tomato puree","Carrot","Pepper","Penne"}', 'Gambia', 'Medium', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Carrot","Coconut milk","Pineapple","Dark Chocolate","Lime","Beef mince","Tomato puree","Pepper","Salt","Penne"}', 'Zimbabwe', 'Slow', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Pad Thai', '{"Coconut milk","Olive oil","Beef mince","Chicken thighs"}', 'Russia', 'Fast', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mushroom risotto', '{"Olive oil","Onion","Salt","Tuna","Beef mince","Sugar","Yellow curry paste"}', 'Indonesia', 'Medium', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Pineapple","Olive oil","Cheese","Milk","Chicken thighs"}', 'Vietnam', 'Fast', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Penne","Cheese","Chicken thighs","Dark Chocolate","Coconut milk","Sugar","Tuna","Lime","Beef mince","Carrot"}', 'Mexico', 'Fast', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Vindaloo', '{"Penne","Salt","Coconut milk","Lime","Pepper","Dark Chocolate","Cheese","Carrot"}', 'Bangladesh', 'Medium', '£', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Steak', '{"Beef mince","Lime","Tomato puree","Milk","Penne","Coconut milk","Chopped tomatoes","Salt","Sugar","Tuna"}', 'France', 'Slow', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tuna pasta', '{"Penne","Cheese","Lime","Onion","Milk","Dark Chocolate","Tomato puree"}', 'Colombia', 'Slow', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Chicken thighs","Coconut milk","Garlic","Sugar","Onion"}', 'United States', 'Fast', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Sugar","Beef mince","Coconut milk","Chicken thighs"}', 'Indonesia', 'Slow', '£££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Chicken thighs","Olive oil","Carrot","Lime"}', 'Indonesia', 'Medium', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Lime","Penne","Tomato","Milk","Carrot","Tomato puree","Garlic","Dark Chocolate","Olive oil","Chopped tomatoes"}', 'Indonesia', 'Fast', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tuna pasta', '{"Tomato","Garlic","Pineapple","Penne","Pepper","Milk","Dark Chocolate","Carrot","Sugar","Salt"}', 'Chile', 'Fast', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Sweet and sour', '{"Tomato","Garlic","Olive oil","Dark Chocolate","Milk","Onion","Beef mince","Tuna","Cheese"}', 'Ukraine', 'Slow', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Sugar","Dark Chocolate","Pepper","Carrot","Tomato puree"}', 'Russia', 'Fast', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mushroom risotto', '{"Tuna","Salt","Olive oil","Pineapple","Milk"}', 'China', 'Fast', '£', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Butter chicken', '{"Onion","Carrot","Salt","Tomato puree","Yellow curry paste"}', 'Indonesia', 'Fast', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Dark Chocolate","Sugar","Onion","Chopped tomatoes","Carrot","Milk","Beef mince","Tomato","Penne"}', 'Philippines', 'Medium', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Butter chicken', '{"Onion","Coconut milk","Salt","Chopped tomatoes","Tuna"}', 'Philippines', 'Slow', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Garlic","Carrot","Sugar","Penne"}', 'Croatia', 'Medium', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Yellow curry', '{"Dark Chocolate","Pepper","Chicken thighs","Sugar","Milk"}', 'Indonesia', 'Slow', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Dark Chocolate","Coconut milk","Sugar","Yellow curry paste","Tomato puree","Chopped tomatoes","Tuna","Olive oil","Beef mince"}', 'Brazil', 'Slow', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Coconut milk","Salt","Chopped tomatoes","Garlic"}', 'Canada', 'Medium', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Penne","Chicken thighs","Tomato puree","Olive oil","Onion"}', 'Cuba', 'Slow', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Pad Thai', '{"Olive oil","Carrot","Pepper","Chicken thighs","Penne","Tomato puree","Dark Chocolate","Garlic"}', 'China', 'Medium', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Chopped tomatoes","Lime","Milk","Yellow curry paste","Tuna","Coconut milk","Penne"}', 'Russia', 'Fast', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Salt","Lime","Sugar","Milk","Beef mince","Chopped tomatoes","Olive oil","Tuna","Chicken thighs","Onion"}', 'Philippines', 'Medium', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Sugar","Garlic","Tomato puree","Chicken thighs","Tomato","Lime","Olive oil"}', 'Indonesia', 'Medium', '££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Chilli con carne', '{"Coconut milk","Onion","Milk","Salt","Beef mince","Chopped tomatoes","Garlic","Tuna"}', 'Belgium', 'Slow', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Butter chicken', '{"Penne","Tomato","Garlic","Salt","Beef mince","Cheese","Pepper","Pineapple","Milk","Yellow curry paste"}', 'Czech Republic', 'Slow', '£', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Mac and cheese', '{"Chicken thighs","Olive oil","Tuna","Garlic","Beef mince"}', 'China', 'Medium', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Steak', '{"Coconut milk","Carrot","Cheese","Sugar","Pineapple","Garlic","Penne"}', 'Bulgaria', 'Slow', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Toasted cheese', '{"Pepper","Chicken thighs","Dark Chocolate","Olive oil","Chopped tomatoes"}', 'Russia', 'Fast', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato pasta', '{"Tomato","Salt","Cheese","Penne","Pineapple","Yellow curry paste","Olive oil","Tuna","Onion","Coconut milk"}', 'Czech Republic', 'Fast', '£££', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Butter chicken', '{"Tuna","Pineapple","Onion","Tomato","Dark Chocolate","Sugar","Milk","Garlic","Coconut milk"}', 'Liechtenstein', 'Slow', '£', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Chilli con carne', '{"Pineapple","Chicken thighs","Dark Chocolate","Carrot","Pepper","Lime","Milk"}', 'Sweden', 'Slow', '£', 3);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Bolognese', '{"Onion","Coconut milk","Pineapple","Carrot","Milk","Olive oil","Yellow curry paste","Tomato puree"}', 'Luxembourg', 'Fast', '££', 1);
insert into recipe (name, ingredients, cuisine, "cookingTime", price, "creatorId") values ('Tomato soup', '{"Pineapple","Onion","Yellow curry paste","Tuna"}', 'Morocco', 'Fast', '££', 1);
        `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.NewRecipes1693170517482793 = NewRecipes1693170517482793;
//# sourceMappingURL=1617051748273-NewRecipes.js.map