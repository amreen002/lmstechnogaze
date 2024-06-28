import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Navbarmenu from './Navbarmenu';
const { REACT_APP_API_ENDPOINT, REACT_APP_API_IMG } = process.env;

const CartComponent = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

    const calculateTotalAmount = () => {
        return cartItems.reduce((acc, item) => acc + item.CoursePrice * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <section className='sticky-top'>
                <Navbarmenu />
            </section>

            <section className='pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center mb-4'>Your Cart</h1>
                            {cartItems.length === 0 ? (
                                <div className='text-center'>
                                    <p>Your cart is empty.</p>
                                </div>
                            ) : (
                                <div>
                                    <ul className='list-group'>
                                        {cartItems.map((item) => (
                                            <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
                                                <div className='d-flex align-items-center'>
                                                    <img src={`${REACT_APP_API_IMG}/${item.CourseUplod}`} alt={item.name} className='img-thumbnail' style={{ width: '100px', height: '100px', marginRight: '15px' }} />
                                                    <div>
                                                        <a href={`/coursedetails/${item.id}`}>
                                                            <h5 className="title">{item.name}</h5>
                                                        </a>
                                                        <p>Price: <i className="fa-indian-rupee fa-light"></i> {item.CoursePrice.toFixed(2)}</p>
                                                        <div className='d-flex align-items-center'>
                                                            <button className='btn btn-secondary' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                            <input type='number' value={item.quantity} readOnly className='form-control mx-2' style={{ width: '60px' }} />
                                                            <button className='btn btn-secondary' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>Total: <i className="fa-indian-rupee fa-light"></i>{(item.CoursePrice * item.quantity).toFixed(2)}</p>
                                                    <button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='text-center mt-4'>
                                        <h2>Total Amount: <i className="fa-indian-rupee fa-light"></i> {calculateTotalAmount()}</h2>
                                        <button className='btn btn-secondary' onClick={clearCart}>Clear Cart</button>
                                        <a href="/checkout" className='btn btn-primary ml-3' >Proceed to Checkout</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartComponent;
