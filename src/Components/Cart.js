import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Navbarmenu from './Navbarmenu';

const CartComponent = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div>
           <section className='sticy-header logo-size'>
            <Navbarmenu />
        </section>
            <h1>Cart Page</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default CartComponent;
