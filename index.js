document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
  
    // Initialize total price
    let totalPrice = 0;
  
    // Function to update total price
    function updateTotalPrice() {
      const totalPriceElement = document.querySelector('#total-price span');
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  
    // Function to handle quantity increment
    function handleQuantityIncrement(event) {
      const quantityElement = event.target.parentElement.querySelector('span');
      const quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      totalPrice += 10; // Assuming each product costs $10
      updateTotalPrice();
    }
  
    // Function to handle quantity decrement
    function handleQuantityDecrement(event) {
      const quantityElement = event.target.parentElement.querySelector('span');
      const quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        totalPrice -= 10; // Assuming each product costs $10
        updateTotalPrice();
      }
    }
  
    // Function to handle item deletion
    function handleDelete(event) {
      const item = event.target.closest('.cart-item');
      const quantity = parseInt(item.querySelector('.quantity span').textContent);
      totalPrice -= quantity * 10; // Assuming each product costs $10
      item.remove();
      updateTotalPrice();
    }
  
    // Function to handle liking an item
    function handleLike(event) {
      const likeButton = event.target;
      likeButton.classList.toggle('liked');
    }
  
    // Add event listeners for quantity buttons
    cartItems.forEach(item => {
      const incrementButton = item.querySelector('.increment');
      const decrementButton = item.querySelector('.decrement');
      const deleteButton = item.querySelector('.delete');
      const likeButton = item.querySelector('.like');
  
      incrementButton.addEventListener('click', handleQuantityIncrement);
      decrementButton.addEventListener('click', handleQuantityDecrement);
      deleteButton.addEventListener('click', handleDelete);
      likeButton.addEventListener('click', handleLike);
    });
  
    // Initial update of total price
    updateTotalPrice();
  });
  