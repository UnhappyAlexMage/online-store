import { HttpResponse, http } from 'msw';
import { mockProductsMiscellaneous } from '../data/mockProductsMiscellaneous.js';

const responseResolvedMiscellaneous = () => {
    return HttpResponse.json(mockProductsMiscellaneous);
}

export const handlerProductsMiscellaneous = http.get("https://api.escuelajs.co/api/v1/products/miscellaneous", responseResolvedMiscellaneous);