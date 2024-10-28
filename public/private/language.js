document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    // Configuration object for element IDs based on page
    const pageElements = {
        main: {
            // elements for translations on mainpage:
            greeting: 'greeting',
            welcome:'welcome',
            
        },
        product: {
            // elements for translations on productspage:
            title: 'products',
            items: 'product-list'

        },
        config:{
            // elements for translations on configpage:
            case:'case',
            h1maincomponents:'h1maincomponents',
            lcpu:  'lcpu' ,
            lamd_ryzen3:'lamd_ryzen3',
            oprocessor1:'oprocessor1',
            oprocessor2:'oprocessor2',
            lamd_ryzen5:'lamd_ryzen5',
            oprocessor3:'oprocessor3',    
            oprocessor4:'oprocessor4',    
            oprocessor5:'oprocessor5',    
            oprocessor6:'oprocessor6',    
            oprocessor7:'oprocessor7' ,
            lamd_ryzen7:'lamd_ryzen7',
            oprocessor8:'oprocessor8',
            oprocessor9:'oprocessor9',    
            oprocessor10:'oprocessor10',    
            oprocessor11:'oprocessor11',    
            lintelcore_i5:'lintelcore_i5',
            oprocessor12:'oprocessor12',    
            oprocessor13:'oprocessor13',
            oprocessor14:'oprocessor14',
            oprocessor15:'oprocessor15',    
            oprocessor16:'oprocessor16',    
            oprocessor17:'oprocessor17',
            oprocessor18:'oprocessor18',
            oprocessor19:'oprocessor19',
            oprocessor20:'oprocessor20',    
            oprocessor21:'oprocessor21',    
            oprocessor22:'oprocessor22',    
            oprocessor23:'oprocessor23',
            lintelcore_i7:'lintelcore_i7',
            oprocessor24:'oprocessor24',
            oprocessor25:'oprocessor25',    
            oprocessor26:'oprocessor26',    
            oprocessor27:'oprocessor27',
            lmainboard:'lmainboard',
            
        }
    };
    // Function to load the language file and update the content
    function loadLanguage(language) {
        fetch(`/lang/${language}.json`)
        .then(response => response.json())
        .then(data => { updateContent(data);
        })
        .catch(error => console.error('Error loading language file:', error));
    }
    // Function to update the content on the page
    function updateContent(data) {
        // Update mainpage elements
        if (document.getElementById(pageElements.main.greeting)) {
            updateElements(data.main, pageElements.main);
        }
            // Update product page elements
        if (document.getElementById(pageElements.product.title)) {
            updateElements(data.product, pageElements.product);
        }
        if (document.getElementById(pageElements.config.case)) {
            updateElements(data.config, pageElements.config)
        }
    }
    // Function to update elements on a page
    function updateElements(data, elements) {
        for (const key in elements) {
            if (elements.hasOwnProperty(key)) {
                const elementId = elements[key];
                const element = document.getElementById(elementId);
                if (element) {
                    if (elementId === 'product-list') {
                        const products = document.querySelectorAll('.product-item');
                        products.forEach((product, main) => { product.textContent = data.items[main];
                        });
                    }
                    else {
                            element.textContent = data[key];
                    }
                }
            }
        }
    }
    // Load default language on first visit
    const defaultLanguage = languageSelector.value;
    loadLanguage(defaultLanguage);
    // Event listener for language selection
    languageSelector.addEventListener('change', function() {
        const selectedLanguage = languageSelector.value;
        loadLanguage(selectedLanguage);
    });
});