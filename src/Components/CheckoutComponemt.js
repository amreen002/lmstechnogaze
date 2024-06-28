import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CheckoutPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Implement your checkout logic here
        // Example: Submit order, clear cart, etc.
        console.log('Checkout logic goes here');
        clearCart(); // For example, clearing cart after checkout
    };

    return (
        <div>
            <h1>Checkout Page</h1>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    {/* Display other checkout details */}
                </div>
            ))}
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
};

export default CheckoutPage;
