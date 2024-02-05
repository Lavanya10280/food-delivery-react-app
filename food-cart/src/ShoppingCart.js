import React, { useState } from 'react';
import './ShoppingCart.css'; 

const ShoppingCart = () => {

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    // Add more items as needed
  ]);

  const handleDelete = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

 /*

  const handleIncreaseQuantity = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const handleDecreaseQuantity = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  */

  const handleIncreaseQuantity = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const handleDecreaseQuantity = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = () => {
    // Add payment logic here (currently does nothing)
    console.log('Payment button clicked!');
  };

  return (
    <div  className="container">
      <h1>Your Cart</h1>
      
      {/* Add new item section */}
      {/* (You can add your own form inputs to capture new item details) */}
      <div>
        {/* Empty space for adding new items */}
        {/* ... */}
      </div>

      {/* List of items */}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <t /> ${item.price}
            
            <button onClick={() => handleIncreaseQuantity(item.id)} >+</button>
            <div className="text-end">{item.quantity}</div>
            <button onClick={() => handleDecreaseQuantity(item.id)} >-</button><br />
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          
          </li>
        ))}
      </ul>

      {/* Subtotal */}
      <p>Subtotal: ${calculateSubtotal()}</p>

      {/* Payment button */}
      <button onClick={handlePayment} className="button payment">Proceed to Payment</button>
    </div>
  );
};

export default ShoppingCart;

