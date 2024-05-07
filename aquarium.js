// Function to add items to the cart
function addToCart(itemName, price, quantityInputId) {
    const quantityInput = document.getElementById(quantityInputId);
    const quantity = parseInt(quantityInput.value);
  
    if (quantity <= 0 || isNaN(quantity)) {
      alert('Please enter a valid quantity.');
      return;
    }
  
    const cart = document.getElementById('cart');
    const cartItems = cart.getElementsByClassName('cart-item');
  
    // Check if the cart already has the item
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].innerText.includes(itemName)) {
        alert('Item already in cart!');
        return;
      }
    }
  
    // If item is not in the cart, add it
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const totalPrice = price * quantity;
    cartItem.innerText = `${itemName} x ${quantity} - $${totalPrice}`;
  
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function() {
      cart.removeChild(cartItem);
    });
  
    cartItem.appendChild(removeButton);
    cart.appendChild(cartItem);
  }
  