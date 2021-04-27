import { GqlCookingTime } from "../generated/graphql";

export const calculateCookingTimeBadgeColor = (cookingTime: GqlCookingTime) => {
  switch (cookingTime) {
    case GqlCookingTime.Fast:
      return "green";
    case GqlCookingTime.Medium:
      return "orange";
    case GqlCookingTime.Slow:
      return "red";
  }
};
