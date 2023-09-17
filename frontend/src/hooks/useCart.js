import React, { createContext, useContext, useState } from "react";
import { sample_seeds } from "../data";

const CartContext = createContext(null)

export default function CartProvider({children}) {
    
    const [cartItems, setCartItems ] = useState(
        sample_seeds
        .slice(1, 4)
        .map(seed => ({ seed, quantity: 1, price: seed.price }))
        );
    const [totalPrice, setTotalPrice] = useState(40);
    const [totalCount, setTotalCount] = useState(3);
    
    const removeFromCart = seedId => {
        const filteredCartItems = cartItems.filter(item => item.seed.id !== seedId);
        setCartItems(filteredCartItems);
    };

    const editCart = (cartItem, selectedPack, newQuantity) => {
        const { seed } = cartItem;

        const choosePackSize = {
            ...cartItem,
            packsize: selectedPack,
            quantity: newQuantity,
            price: seed.price * selectedPack,
        };

        setCartItems(
            cartItems.map(item => (item.seed.id === seed.id ? choosePackSize : item))
        );
    };

    const editCart2 = (cartItem, newQuantity, selectedPack) => {
        const { seed } = cartItem;

        const changeQuantity = {
            ...cartItem,
            packsize: selectedPack,
            quantity: newQuantity,
            price: seed.price * newQuantity,
        };

        setCartItems(
            cartItems.map(item => (item.seed.id === seed.id ? changeQuantity : item))
        );
    };

    






    return (
        <CartContext.Provider 
            value={{cart:{ items: cartItems, totalPrice, totalCount }, 
            removeFromCart,
            editCart,
            editCart2,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);