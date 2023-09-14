import React from "react";
import { Route, Routes } from 'react-router-dom';
import ShopPage from "./pages/Shop/ShopPage";
import HomePage from "./pages/Home/HomePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/"  element={<HomePage />} />      
        </Routes>
            
    );
}