import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (index === -1) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        } else {
            const updatedCart = [...cartItems];
            updatedCart[index].quantity += 1;
            setCartItems(updatedCart);
        }
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity < 1) return;
        const updatedCart = cartItems.map(item => 
            item.id === itemId ? { ...item, quantity } : item
        );
        setCartItems(updatedCart);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
