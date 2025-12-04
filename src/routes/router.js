import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="about" element={1} />
            <Route path="products" element={1} />
        </Route>
    )
);
export default router;