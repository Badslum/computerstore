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
            ledvd: 'ledvd',
            odvd105: 'odvd105',
            odvd106: 'odvd106',
            odvd107: 'odvd107',
            lexdrive: 'lexdrive',
            oed110: 'oed110',
            oed111: 'oed111',
            oed112: 'oed112',
            oed113: 'oed113',
            h1pandc: 'h1pandc',
            lpc: 'lpc',
            opc115: 'opc115',
            opc116: 'opc116',
            opc117: 'opc117',
            opc118: 'opc118',
            cpuc: 'cpuc',
            ocpuc120: 'ocpuc120',
            ocpuc121: 'ocpuc121',
            ocpuc122: 'ocpuc122',
            lhcp: 'lhcp',
            ohcp125: 'ohcp125',
            ohcp126: 'ohcp126',
            h1os: 'h1os',
            los: 'los',
            oos130: 'oos130',
            oos131: 'oos131',
            oos132: 'oos132',
            llanguage: 'llanguage',
            ol135: 'ol135',
            ol136: 'ol136',
            ol137: 'ol137',
            ol138: 'ol138',
            ol139: 'ol139',
            losw: 'losw',
            oosw140: 'oosw140',
            oosw141: 'oosw141',
            oosw142: 'oosw142',
            oosw143: 'oosw143',
            oosw144: 'oosw144',
            h1peripherals: 'h1peripherals',
            lmonitor: 'lmonitor',
            omon145: 'omon145',
            omon146: 'omon146',
            omon147: 'omon147',
            omon148: 'omon146',
            lmc: 'lmc',
            omc150: 'omc150',
            omc151: 'omc151',
            omc152: 'omc152',
            omc153: 'omc153',
            omc154: 'omc154',
            omc155: 'omc155',
            lmb: 'lmb',
            omb160: 'omb160',
            omb161: 'omb161',
            omb162: 'omb162',
            lmak: 'lmak',
            omak165: 'omak165',
            omak166: 'omak166',
            omak167: 'omak167',
            lcablem: 'lcablem',
            ocablem170: 'ocablem170',
            ocablem171: 'ocablem171',
            ocablem172: 'ocablem172',
            h1dands: 'h1dands',
            lw: 'lw',
            ow175: 'ow175',
            ow176: 'ow176',
            ld: 'ld',
            od180: 'od180',
            od181: 'od181',
            od182: 'od182',
            lc: 'lc',
            oc185: 'oc185',
            oc186: 'oc186',
            oc187: 'oc187',
            la: 'la',
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