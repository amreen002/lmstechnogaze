import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";

function ViewCartComponent() {
   
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
        if (count > 0) {
      setCount(count - 1);
        }
    };

    return (
        <div>
            <section>
                <Navbarmenu />
            </section>

       
            <div class="dashboard--area-main pt--80 pt_sm--50">

                <main class="ms-main">
                    <div class="ms-page-content container">
                        <article id="post-283" class="post-283 page type-page status-publish hentry" style={{ background: '#fff', padding: "20px" }}>
                            <div class="ms-default-page container">
                                <div class="woocommerce">
                                    <header class="ms-sp--header container">
                                        <h1 class="ms-sp--title">View Cart</h1>
                                    </header>
                                    <div class="card" style={{borderBottom:'4px solid'}}></div>
                                    <div class="woocommerce-notices-wrapper"></div>
                                    <div class="ms-woocommerce-cart-form-wrapper">
                                        <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                                            <thead>
                                                <tr>
                                                    <th class="product-remove">&nbsp;</th>
                                                    <th class="product-thumbnail">&nbsp;</th>
                                                    <th class="product-name">Product</th>
                                                    <th class="product-price">Price</th>
                                                    <th class="product-quantity">Quantity</th>
                                                    <th class="product-subtotal">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="woocommerce-cart-form__cart-item cart_item">
                                                    <td class="product-remove">
                                                        <a href="javascript:void(0);" class="remove" aria-label="Remove this item" data-product_id="470" data-product_sku="161056">
                                                            <svg viewBox="0 0 200 200" width="18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td class="product-thumbnail">
                                                        <a href="product-details.html">
                                                            <img src="assets/fontend/images/shop/01.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                        </a>
                                                    </td>
                                                    <td class="product-name" data-title="Product">
                                                        <a href="product-details.html">How to change your mind</a>
                                                    </td>

                                                    <td class="product-price" data-title="Price">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>120.00</bdi>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div class="cart-edit">
                                                            <div class="quantity-edit">
                                                                <button class="button" onClick={decrement}><i class="fal fa-minus minus"></i></button>
                                                               <span style={{color:'#000',fontWeight:'bold'}}>{count}</span>
                                                                <button class="button plus"  onClick={increment}>+<i class="fal fa-plus plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="product-subtotal" data-title="Subtotal">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>120.00</bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr class="woocommerce-cart-form__cart-item cart_item">
                                                    <td class="product-remove">
                                                        <a href="javascript:void(0);" class="remove" aria-label="Remove this item" data-product_id="476" data-product_sku="321736">
                                                            <svg viewBox="0 0 200 200" width="18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td class="product-thumbnail">
                                                        <a href="product-details.html">
                                                            <img src="assets/fontend/images/shop/02.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Shop Image" />
                                                        </a>
                                                    </td>
                                                    <td class="product-name" data-title="Product">
                                                        <a href="product-details.html">The Alchemist</a>
                                                    </td>
                                                    <td class="product-price" data-title="Price">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>180.00</bdi>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div class="cart-edit">
                                                        <div class="quantity-edit">
                                                                <button class="button" onClick={decrement}><i class="fal fa-minus minus"></i></button>
                                                               <span style={{color:'#000',fontWeight:'bold'}}>{count}</span>
                                                                <button class="button plus"  onClick={increment}>+<i class="fal fa-plus plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="product-subtotal" data-title="Subtotal">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>180.00</bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr class="woocommerce-cart-form__cart-item cart_item">
                                                    <td class="product-remove">
                                                        <a href="javascript:void(0);" class="remove" aria-label="Remove this item" data-product_id="478" data-product_sku="117652">
                                                            <svg viewBox="0 0 200 200" width="18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td class="product-thumbnail">
                                                        <a href="product-details.html">
                                                            <img src="assets/fontend/images/shop/03.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Shop Image" />
                                                        </a>
                                                    </td>
                                                    <td class="product-name" data-title="Product">
                                                        <a href="product-details.html">Spies Sadiest & Sorcerers</a>
                                                    </td>

                                                    <td class="product-price" data-title="Price">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>80.00</bdi>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div class="cart-edit">
                                                        <div class="quantity-edit">
                                                                <button class="button" onClick={decrement}><i class="fal fa-minus minus"></i></button>
                                                               <span style={{color:'#000',fontWeight:'bold'}}>{count}</span>
                                                                <button class="button plus"  onClick={increment}>+<i class="fal fa-plus plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="product-subtotal" data-title="Subtotal">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>80.00</bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr class="woocommerce-cart-form__cart-item cart_item">
                                                    <td class="product-remove">
                                                        <a href="javascript:void(0);" class="remove" aria-label="Remove this item" data-product_id="483" data-product_sku="">
                                                            <svg viewBox="0 0 200 200" width="18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td class="product-thumbnail">
                                                        <a href="product-details.html">
                                                            <img src="assets/fontend/images/shop/04.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                        </a>
                                                    </td>
                                                    <td class="product-name" data-title="Product">
                                                        <a href="product-details.html">Cannivalism</a>
                                                    </td>
                                                    <td class="product-price" data-title="Price">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>139.00</bdi>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div class="cart-edit">
                                                        <div class="quantity-edit">
                                                                <button class="button" onClick={decrement}><i class="fal fa-minus minus"></i></button>
                                                               <span style={{color:'#000',fontWeight:'bold'}}>{count}</span>
                                                                <button class="button plus"  onClick={increment}>+<i class="fal fa-plus plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="product-subtotal" data-title="Subtotal">
                                                        <span class="woocommerce-Price-amount amount">
                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>139.00</bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="6" class="actions">
                                                        <form class="woocommerce-cart-form" action="#" method="post">

                                                            <div class="ms-actions-inner">
                                                                <div class="coupon">
                                                                    <input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="Coupon code" required="" />
                                                                    <button type="submit" class="button rts-btn btn-primary" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="row">
                                            <div class="col-md-5 offset-md-7">
                                                <div class="ms-cart-collaterals cart-collaterals">
                                                    <div class="ms-cart-totals cart_totals ">
                                                        <h3 class="animated fadeIn">Cart totals</h3>
                                                        <table class="shop_table shop_table_responsive">
                                                            <tbody>
                                                                <tr class="cart-subtotal">
                                                                    <th>Subtotal</th>
                                                                    <td data-title="Subtotal">
                                                                        <span class="woocommerce-Price-amount amount">
                                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>519.00</bdi>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="order-total">
                                                                    <th>Total</th>
                                                                    <td data-title="Total">
                                                                        <strong><span class="woocommerce-Price-amount amount">
                                                                            <bdi><span class="woocommerce-Price-currencySymbol">$</span>519.00</bdi></span>
                                                                        </strong>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div class="ms-proceed-to-checkout wc-proceed-to-checkout">
                                                            <a href="javascript:void(0);" class="rts-btn btn-primary"> Proceed to checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </article>

                    </div>
                </main>
            </div>


        </div>
    );
}

export default ViewCartComponent;