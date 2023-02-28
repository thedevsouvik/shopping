import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import OrdersListPage from "./pages/OrdersListPage";
import OrderViewPage from "./pages/OrderViewPage";
import ProductPage from "./pages/ProductPage";
import ProductCategoryPage from "./pages/ProductsPage";
import SimilarProductPage from "./pages/SimilarProductPage";
import WishlistPage from "./pages/WishlistPage";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
