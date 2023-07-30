import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { RestrictedRoute } from "./components/restrictedRoute";
import { CartPage } from "./pages/Cart";
import { LoginPage } from "./pages/LoginPage";
import { ProductsPage } from "./pages/Products";
import { RegisterPage } from "./pages/Register";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/products" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/products" />
          }
        />
      </Routes>
    </>
  );
};

export default App;
