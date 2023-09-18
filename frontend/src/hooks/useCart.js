import React, { createContext, useContext, useEffect, useState } from "react";
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
    
    useEffect(() => {
        const totalPrice = sum(cartItems.map(item => item.price));
        const totalCount = sum(cartItems.map(item => item.quantity));
        setTotalPrice(totalPrice);
        setTotalCount(totalCount);
    }, [cartItems]);

    const sum = items => {
        return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
    };

    const removeFromCart = seedId => {
        const filteredCartItems = cartItems.filter(item => item.seed.id !== seedId);
        setCartItems(filteredCartItems);
    };

    const changeQuantity = (cartItem, newQuantity) => {
        const { seed } = cartItem;
                
        const changedCartItem = {
            ...cartItem,
            quantity: newQuantity,
            price: seed.price * newQuantity,
        };

        setCartItems(
            cartItems.map(item => (item.seed.id === seed.id ? changedCartItem : item))
        );
    };

    return (
        <CartContext.Provider 
            value={{
            cart:{ items: cartItems, totalPrice, totalCount }, 
            removeFromCart,
            changeQuantity,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);