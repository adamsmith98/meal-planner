import { GqlPrice } from "../generated/graphql";

export const calculatePriceBadgeColor = (price: GqlPrice) => {
  switch (price) {
    case GqlPrice.Low:
      return "green";
    case GqlPrice.Medium:
      return "orange";
    case GqlPrice.High:
      return "red";
  }
};
