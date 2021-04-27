export const addToBasket = (ingredients: string[]) => {
  let currentBasket = JSON.parse(localStorage.getItem("basket")) || [];
  currentBasket = currentBasket.concat(ingredients);
  localStorage.setItem("basket", JSON.stringify(currentBasket));
};
