import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound404Page = lazy(() => import("./pages/404Page"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const OrdersListPage = lazy(() => import("./pages/OrdersListPage"));
const OrderViewPage = lazy(() => import("./pages/OrderViewPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ProductCategoryPage = lazy(() => import("./pages/ProductsPage"));
const SimilarProductPage = lazy(() => import("./pages/SimilarProductPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <p className="flex h-screen w-full items-center justify-center bg-white text-center text-7xl">
            Loading...
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />

            <Route path=":category">
              <Route index element={<ProductCategoryPage />} />
              <Route path=":product_id">
                <Route index element={<ProductPage />} />
                <Route path="similar" element={<SimilarProductPage />} />
              </Route>
            </Route>

            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="cart" element={<CartPage />} />

            <Route path="orders">
              <Route index element={<OrdersListPage />} />
              <Route path=":order_id" element={<OrderViewPage />} />
            </Route>

            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<NotFound404Page />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
