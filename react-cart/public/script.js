// script.js

const products = [
    { name: 'Product A', price: 10.00 },
    { name: 'Product B', price: 20.00 },
    { name: 'Product C', price: 15.00 },
    { name: 'Product D', price: 25.00 }
  ];
  
  let cartItems = [];
  
  function addItemToCart(name, price) {
    const newItem = { name, price, quantity: 1 };
    cartItems.push(newItem);
    updateCart();
  }
  
  function removeItemFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
  }
  
  function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
  
    cartItems.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
  
      const itemName = document.createElement('p');
      itemName.textContent = item.name;
  
      const itemPrice = document.createElement('p');
      itemPrice.textContent = `$${item.price.toFixed(2)}`;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => removeItemFromCart(index);
  
      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemPrice);
      itemDiv.appendChild(removeButton);
  
      cartItemsDiv.appendChild(itemDiv);
    });
  
    updateSubtotal();
  }
  
  function updateSubtotal() {
    const subtotalAmount = document.getElementById('subtotal-amount');
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    subtotalAmount.textContent = subtotal;
  }
  
  function proceedToPayment() {
    console.log('Proceeding to payment...');
    // Add your payment logic here
  }
  