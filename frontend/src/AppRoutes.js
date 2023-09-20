import React from "react";
import { Route, Routes } from 'react-router-dom';
import ShopPage from "./pages/Shop/ShopPage";
import HomePage from "./pages/Home/HomePage";
import SeedPage from "./pages/Seed/SeedPage";
import CartPage from "./pages/Cart/CartPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<ShopPage />} />
            <Route path="/tag/:tag" element={<ShopPage />} />
            <Route path="/seed/:id" element={<SeedPage />} />
            <Route path="/shop" element={<ShopPage />} /> 
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />    
            <Route path="/register" element={<RegisterPage />} />  
        </Routes>      
    );
}