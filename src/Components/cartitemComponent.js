import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const { REACT_APP_API_ENDPOINT, REACT_APP_API_IMG } = process.env;

function CartItemComponent({ closePopup }) {
    const { cartItems, cartCount, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

    const calculateTotalAmount = () => {
        return cartItems.reduce((acc, item) => acc + item.CoursePrice * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <div className="cart-bar show">
                <div className="cart-header">
                    <h3 className="cart-heading animated fadeIn">MY CART ({cartCount} ITEMS)</h3>
                    <div className="close-cart">
                        <i className="fal fa-times" onClick={closePopup}></i>
                    </div>
                </div>
                {cartItems.length === 0 ? (
                        <div className='text-center'>
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                <div className="product-area">
                    {cartItems.map((item) => (
                        <div key={item.id} className="product-item row">
                           
                                <div  className="product-detail">
                                <div className="item-wrapper d-flex mr--5 align-items-center">
                                     <a href="#" className="delete-cart" onClick={() => removeFromCart(item.id)}>
                                         <i className="fal fa-times"></i>
                                     </a>
                                 </div>
                                    <div className="product-thumb">
                                        <img src={`${REACT_APP_API_IMG}/${item.CourseUplod}`} alt={item.name} />
                                    </div>
                                    <div className="item-wrapper">
                                        <span className="product-name">{item.name}</span>
                                        <div className="item-wrapper">
                                            <span className="product-variation">
                                            <span>{item.Category && item.Category.name}</span>
                                            </span>
                                        </div>
                                        <div className="item-wrapper">
                                            <span className="product-qnty">{item.quantity} ×</span>
                                            <span className="product-price">{item.CoursePrice.toFixed(2)}</span>
                                        </div>
                                    </div>

                                   
                                </div>
                                 <div className="cart-edit">
                                 <div className="quantity-edit">
                                     <button className="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                         <i className="fal fa-minus minus"></i>
                                     </button>
                                     <input type="text" value={item.quantity} readOnly className='form-control mx-2' style={{ width: '60px' }} />
                                     <button className="button plus" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                         <i className="fal fa-plus plus"></i>
                                     </button>

                                 </div>
                                
                             </div>
                             <div className="cart-bottom-area">
                               
                                 <span className="spend-shipping">
                                     <i className="fal fa-truck"></i> SPENT <span className="amount">{(item.CoursePrice * item.quantity).toFixed(2)}</span> MORE FOR FREE SHIPPING
                                 </span>
                                
                              
                                 <span className="total-price">TOTAL: <span className="price">{calculateTotalAmount()}</span></span>
                                 
                                
                                 <a href="checkout" className="checkout-btn cart-btn">PROCEED TO CHECKOUT</a>
                            
                               
                                 <Link to="/cart" className="view-btn cart-btn">View Cart</Link>
                                 

                             </div>
                          
                        </div>
                    ))}
                </div>
                  )}
            </div>
        </div>
    );
}

export default CartItemComponent;
