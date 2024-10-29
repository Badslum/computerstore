document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Simulate login logic (this is just an example, not secure)
      if (username === 'admin' && password === 'password') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        // Redirect to home page or other actions on successful login
        window.location.href = '../index.html';
      } else {
        loginMessage.textContent = 'Invalid username or password.';
        loginMessage.style.color = 'red';
      }
    });
  });
  