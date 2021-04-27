"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQLPrice = exports.GQLCookingTime = void 0;
const type_graphql_1 = require("type-graphql");
var GQLCookingTime;
(function (GQLCookingTime) {
    GQLCookingTime["FAST"] = "Fast";
    GQLCookingTime["MEDIUM"] = "Medium";
    GQLCookingTime["SLOW"] = "Slow";
})(GQLCookingTime = exports.GQLCookingTime || (exports.GQLCookingTime = {}));
var GQLPrice;
(function (GQLPrice) {
    GQLPrice["LOW"] = "\u00A3";
    GQLPrice["MEDIUM"] = "\u00A3\u00A3";
    GQLPrice["HIGH"] = "\u00A3\u00A3\u00A3";
})(GQLPrice = exports.GQLPrice || (exports.GQLPrice = {}));
type_graphql_1.registerEnumType(GQLCookingTime, {
    name: "GQLCookingTime",
    description: "Cooking times",
});
type_graphql_1.registerEnumType(GQLPrice, {
    name: "GQLPrice",
    description: "Prices",
});
//# sourceMappingURL=graphqlTypes.js.map