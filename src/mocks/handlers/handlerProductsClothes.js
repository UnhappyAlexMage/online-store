import { HttpResponse, http } from 'msw';
import { mockProductsClothes } from '../data/mockProductsClothes.js';

const responseResolvedClothes = () => {
    return HttpResponse.json(mockProductsClothes);
}

export const handlerProductsClothes = http.get("https://api.escuelajs.co/api/v1/products/clothes", responseResolvedClothes);

// import { HttpResponse, http } from 'msw';
// import { mockProductsClothes } from '../../data/mockProductsClothes.js';
// import { mockProductsMiscellaneous } from '../../data/mockProductsMiscellaneous.js';

// const productsHandler = http.get(
//   'api.escuelajs.co',
//   ({ request }) => {
//     const url = new URL(request.url);
//     const categorySlug = url.searchParams.get('categorySlug');

//     if (categorySlug === 'clothes') {
//       return HttpResponse.json(mockProductsClothes);
//     }

//     if (categorySlug === 'miscellaneous') {
//       return HttpResponse.json(mockProductsMiscellaneous);
//     }
    
//     // Если ни один из параметров не подошел, вернем пустой массив или 404
//     return HttpResponse.json([]), { status: 404 }; 
//   }
// );

// export const handlers = [productsHandler];