const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Example route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function fetchTranslations(language) {
    const response = await fetch(`../data/${language}.json`);
    return await response.json();
}

async function changeLanguage(language) {
    const translations = await fetchTranslations(language);
    document.getElementById('h1Greeting').textContent = translations.h1Greeting;
    document.getElementById('pWelcome').textContent = translations.pWelcome;
}

// Optionally, load default language
changeLanguage('en');