import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
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
          <Route path=":category" element={<ProductCategoryPage />} />
          <Route path=":category/:product_id" element={<ProductPage />} />
          <Route
            path=":category/:product_id/similar"
            element={<SimilarProductPage />}
          />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
