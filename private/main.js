

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