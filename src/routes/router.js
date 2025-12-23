import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.js";
import ProductsPage from '../pages/products/ProductsPage.jsx';
import LayoutMain from "../layouts/LayoutMain.jsx";
import ProductsCartPage from "../pages/cart/ProductsCartPage.jsx";

import ProductInfo from "../components/ProductInfo/ProductInfo.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" index={true} element={<LayoutMain />} />
            <Route path="about" element={1} />
            <Route path="products/" element={<ProductsPage />} >
                <Route path=":productId" element={<ProductInfo/>} />
            </Route>
            <Route path="cart" element={<ProductsCartPage />} />
        </Route>
    )
);

export default router;