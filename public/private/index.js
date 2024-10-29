document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    const contentDiv = document.getElementById('content');
    const cartButton = document.getElementById('cart-button');
  
    // Event listener for cart button
    cartButton.addEventListener('click', function() {
      window.location.href = '/pages/cart.html';
    });
  
    // Function to load different pages into the main content div
    function loadPage(page) {
      fetch(`/pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
          contentDiv.innerHTML = html;
          // Re-apply language settings after loading new content
          loadLanguage(languageSelector.value);
        })
        .catch(error => console.error('Error loading page:', error));
    }
  
    // Event listeners for navigation
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        loadPage(page);
      });
    });
  
    // Load the default page (main) on page load
    loadPage('main');
  });
      
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
    
    themeToggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  });
  
  function goToMainPage() { window.location.href = '../index.html';
    }