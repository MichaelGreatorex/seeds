import React from "react";
import { Route, Routes } from 'react-router-dom';
import ShopPage from "./pages/Shop/ShopPage";
import HomePage from "./pages/Home/HomePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<ShopPage />} />
            <Route path="/shop" element={<ShopPage />} />      
        </Routes>
            
    );
}