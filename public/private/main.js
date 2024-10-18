
//Change Language
async function fetchTranslations(language) {
  const response = await fetch(`../data/${language}.json`);
  return await response.json();
}

async function changeLanguage(language) {
  const translations = await fetchTranslations(language);
  document.getElementById('h1Greeting').textContent = translations.h1Greeting;
  document.getElementById('pWelcome').textContent = translations.pWelcome;
}

// Loaded site in index
document.addEventListener('DOMContentLoaded', function() {
  // Extract query parameter
  const params = new URLSearchParams(window.location.search);
  const page = params.get('site');

  if (page) {
    fetch(`../${page}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('page').innerHTML = data;
      })
      .catch(error => console.error('Error loading the HTML file:', error));
  }
});