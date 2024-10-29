document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));
  
        const existingProduct = cart.find(item => item.name === productName);
  
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
  
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productName} has been added to your cart.`);
      });
    });
  
    cartButton.addEventListener('click', function() {
      window.location.href = '/pages/cart.html';
    });
  });
  