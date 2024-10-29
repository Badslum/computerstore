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
            lamd_ryzen7:'lamd_ryzen7',
            oprocessor8:'oprocessor8',
            oprocessor9:'oprocessor9',    
            oprocessor10:'oprocessor10',    
            oprocessor11:'oprocessor11',    
            lintelcore_i7:'lintelcore_i7',
            oprocessor24:'oprocessor24',
            oprocessor25:'oprocessor25',    
            oprocessor26:'oprocessor26',    
            oprocessor27:'oprocessor27',
            lmainboard:'lmainboard',
            om1: 'om1',
            om2: 'om2',
            om3: 'om3',
            om4: 'om4',
            om5: 'om5',
            om6: 'om6',
            lram: 'lram',
            or11: 'or11',
            or12: 'or12',
            or13: 'or13',
            or14: 'or14',
            or15: 'or15',
            or16: 'or16',
            or17: 'or17',
            or18: 'or18',
            lgpu: 'lgpu',
            og25: 'og25',
            og26: 'og26',
            og27: 'og27',
            lAMD: 'lAMD',
            og30: 'og30',
            og31: 'og31',
            og20: 'og20',
            gpu_bracket: 'gpu_bracket',
            ogp32: 'ogp32',
            ogp33: 'ogp33',
            ogp34: 'ogp34',
            h1drives: 'h1drives',
            lssd_drive1: 'lssd_drive1',
            ossd40: 'ossd40',
            ossd41: 'ossd41',
            ossd42: 'ossd42',
            ossd43: 'ossd43',
            ossd47: 'ossd47',
            ossd48: 'ossd48',
            ossd49: 'ossd49',
            ossd55: 'ossd55',
            ossd56: 'ossd56',
            ossd57: 'ossd57',
            lssd_drive2: 'lssd_drive2',
            ossd60: 'ossd60',
            ossd61: 'ossd61',
            ossd62: 'ossd62',
            ossd63: 'ossd63',
            ossd67: 'ossd67',
            ossd68: 'ossd68',
            ossd69: 'ossd69',
            ossd75: 'ossd75',
            ossd76: 'ossd76',
            ossd77: 'ossd77',
            lsd1: 'lsd1',
            osd80: 'osd80',
            osd81: 'osd81',
            osd82: 'osd82',
            osd83: 'osd83',
            osd84: 'osd84',
            osd85: 'osd85',
            osd86: 'osd86',
            osd87: 'osd87',
            osd88: 'osd88',
            osd89: 'osd89',
            lsd2: 'lsd2',
            osd90: 'osd90',
            osd91: 'osd91',
            osd92: 'osd92',
            osd93: 'osd93',
            osd94: 'osd94',
            osd95: 'osd95',
            osd96: 'osd96',
            osd97: 'osd97',
            osd98: 'osd98',
            osd99: 'osd99',
            ldvd: 'ldvd',
            odvd100: 'odvd100',
            odvd101: 'odvd101',
            odvd102: 'odvd102',
        }
    };

    // Function to load the language file and update the content
    function loadLanguage(language) {
        fetch(`/lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            updateContent(data);
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
    // Load default or stored language on page load
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelector.value = selectedLanguage;
    loadLanguage(selectedLanguage);
    // Event listener for language selection
    languageSelector.addEventListener('change', function() {
        const selectedLanguage = languageSelector.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        loadLanguage(selectedLanguage);
    });
});