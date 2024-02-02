import React, { useState } from 'react';

const FoodCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price) => {
    const newItem = { name, price };
    setCart([...cart, newItem]);
  };

  return (
    <div className="food-cart-container">
      <h2>Food Cart</h2>
      <div className="food-grid">
        {/* Food 1 */}
        <div className="food" onClick={() => addToCart('Margherita Pizza', 10.99)}>
          <img src="margherita_pizza.jpg" alt="Margherita Pizza" />
          <p>Margherita Pizza</p>
          <p>$10.99</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>

        {/* Food 2 */}
        <div className="food" onClick={() => addToCart('Grilled Salmon', 15.99)}>
          <img src="grilled_salmon.jpg" alt="Grilled Salmon" />
          <p>Grilled Salmon</p>
          <p>$15.99</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>

        {/* Food 3 */}
        <div className="food" onClick={() => addToCart('Chocolate Lava Cake', 7.99)}>
          <img src="chocolate_lava_cake.jpg" alt="Chocolate Lava Cake" />
          <p>Chocolate Lava Cake</p>
          <p>$7.99</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>

      <div className="cart-items">
        <h3>Cart Items</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodCart;
