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

    const choosePackSize = (cartItem, selectedPack) => {
        const { seed } = cartItem;

        const packSizeSelected = {
            ...cartItem,
            packsize: selectedPack,
            price: seed.price * selectedPack,
        };

        setCartItems(
            cartItems.map(item => (item.seed.id === seed.id ? packSizeSelected : item))
        );
    };






    return (
        <CartContext.Provider 
            value={{cart:{ items: cartItems, totalPrice, totalCount }, 
            removeFromCart,
            choosePackSize,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);