import { GqlPrice } from "../generated/graphql";

export const convertPrice = (price: string): GqlPrice => {
  if (price === "£") {
    return GqlPrice.Low;
  }
  if (price === "££") {
    return GqlPrice.Medium;
  }
  if (price === "£££") {
    return GqlPrice.High;
  }
  throw new Error("invalid price");
};
