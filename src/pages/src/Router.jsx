import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Store from "./pages/Store";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Success from "./pages/Success";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children : [
                {
                    path: "/",
                    element: <Store />,
                    index: true
                },
                {
                    path: "/product/:slug",
                    element: <ProductDetailPage />
                },
                {
                    path: "/cart",
                    element: <CartPage />
                },
                {
                    path: "checkout",
                    element: <CheckoutPage />
                },
                {
                    path: "/success",
                    element: <Success />
                },
            ],
        },
    ]
);

export default router;