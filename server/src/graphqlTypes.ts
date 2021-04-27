import { registerEnumType } from "type-graphql";

export enum GQLCookingTime {
  FAST = "Fast",
  MEDIUM = "Medium",
  SLOW = "Slow",
}

export enum GQLPrice {
  LOW = "£",
  MEDIUM = "££",
  HIGH = "£££",
}

registerEnumType(GQLCookingTime, {
  name: "GQLCookingTime",
  description: "Cooking times",
});

registerEnumType(GQLPrice, {
  name: "GQLPrice",
  description: "Prices",
});
