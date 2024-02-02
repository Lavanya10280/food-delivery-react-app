// ShoppingCart.js

import React, { useState } from 'react';
import './styles.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product A', price: 10.00, imageUrl: './images.img1.jpg' },
    { id: 2, name: 'Product B', price: 15.00, imageUrl: './images.img2.jpg' },
    { id: 3, name: 'Product C', price: 20.00, imageUrl: './images.img3.jpg' },
    { id: 4, name: 'Product D', price: 25.00, imageUrl: './images.img4.jpg' },
  ];

  const addItemToCart = (product) => {
    const newItem = { ...product, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="product-info">
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="product-buttons">
              <button
                className="add-remove-button"
                onClick={() => updateQuantity(index, item.quantity - 1)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                className="add-remove-button"
                onClick={() => updateQuantity(index, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="add-remove-button"
                onClick={() => removeItemFromCart(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div id="subtotal">Subtotal: $<span id="subtotal-amount">{calculateSubtotal()}</span></div>

      <button className="payment-button">Proceed to Payment</button>
    </div>
  );
};

export default ShoppingCart;
