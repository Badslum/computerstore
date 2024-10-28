document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    const contentDiv = document.getElementById('content');
    // Load the selected language from localStorage
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelector.value = selectedLanguage;
    // Function to load the language file and update the content
    function loadLanguage(language) {
        fetch(`/lang/${language}.json`)
        .then(response => response.json())
        .then(data => { updateContent(data);
        })
        .catch(error => console.error('Error loading language file:', error));
    }

    // Event listeners for navigation
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });
    // Event listener for language selection
    languageSelector.addEventListener('change', function() {
        const selectedLanguage = languageSelector.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        loadLanguage(selectedLanguage);
    });
    // Function to load different pages into the main content div
    function loadPage(page) {
        fetch(`/pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
    }
    // Load the default page (main) on first visit:
    loadPage('main');
});