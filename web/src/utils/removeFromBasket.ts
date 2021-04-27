export const removeFromBasket = (ingredient: string) => {
  let currentBasket = JSON.parse(localStorage.getItem("basket")) || [];
  currentBasket = currentBasket.filter((ing: string) => ing !== ingredient);
  localStorage.setItem("basket", JSON.stringify(currentBasket));
};
