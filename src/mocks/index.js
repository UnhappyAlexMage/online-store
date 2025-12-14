import { handlerProducts } from "./handlers/handlerProducts.js";
import { handlerProductsClothes } from "./handlers/handlerProductsClothes.js";
import { handlerProductsMiscellaneous } from "./handlers/handlerProductsMiscellaneous.js";

export const handlers = [
    handlerProducts,
    handlerProductsClothes,
    handlerProductsMiscellaneous,
];