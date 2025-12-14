import { HttpResponse, http } from "msw";
import { mockProducts } from '../data/mockProducts.js';

const responseResolvedProducts = () => {
    return HttpResponse.json(mockProducts);
};

export const handlerProducts = http.get("https://api.escuelajs.co/api/v1/products", responseResolvedProducts);