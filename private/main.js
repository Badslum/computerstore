async function fetchTranslations(language) {
    const response = await fetch(`../data/${language}.json`);
    return await response.json();
}

async function changeLanguage(language) {
    const translations = await fetchTranslations(language);
    document.getElementById('h1Greeting').textContent = translations.h1Greeting;
    document.getElementById('pWelcome').textContent = translations.pWelcome;    
    document.getElementById('h1case').textContent = translations.h1case;
    document.getElementById('h1maincomponents').textContent = translations.h1maincomponents;
    document.getElementById('lcpu').textContent = translations.lcpu;
    document.getElementById('lamd_ryzen3').textContent = translations.lamd_ryzen3;
    document.getElementById('oprocessor1').textContent = translations.oprocessor1;
    document.getElementById('oprocessor2').textContent = translations.oprocessor2;
    document.getElementById('lamd_ryzen5').textContent = translations.lamd_ryzen5;
    document.getElementById('oprocessor3').textContent = translations.oprocessor3;
    document.getElementById('oprocessor4').textContent = translations.oprocessor4;
    document.getElementById('oprocessor5').textContent = translations.oprocessor5;
    document.getElementById('oprocessor6').textContent = translations.oprocessor6;
    document.getElementById('oprocessor7').textContent = translations.oprocessor7;
    document.getElementById('lamd_ryzen7').textContent = translations.lamd_ryzen7;
    document.getElementById('oprocessor8').textContent = translations.oprocessor8;
    document.getElementById('oprocessor9').textContent = translations.oprocessor9;
    document.getElementById('oprocessor10').textContent = translations.oprocessor10;
    document.getElementById('oprocessor11').textContent = translations.oprocessor11;
    document.getElementById('lintelcore_i5').textContent = translations.lintelcore_i5;
    document.getElementById('oprocessor12').textContent = translations.oprocessor12;
    document.getElementById('oprocessor13').textContent = translations.oprocessor13;
    document.getElementById('oprocessor14').textContent = translations.oprocessor14;
    document.getElementById('oprocessor15').textContent = translations.oprocessor15;
    document.getElementById('oprocessor16').textContent = translations.oprocessor16;
    document.getElementById('oprocessor17').textContent = translations.oprocessor17;
    document.getElementById('oprocessor18').textContent = translations.oprocessor18;
    document.getElementById('oprocessor19').textContent = translations.oprocessor19;
    document.getElementById('oprocessor20').textContent = translations.oprocessor20;
    document.getElementById('oprocessor21').textContent = translations.oprocessor21;
    document.getElementById('oprocessor22').textContent = translations.oprocessor22;
    document.getElementById('oprocessor23').textContent = translations.oprocessor23;
    document.getElementById('lintelcore_i7').textContent = translations.lintelcore_i7;
    document.getElementById('oprocessor24').textContent = translations.oprocessor24;
    document.getElementById('oprocessor25').textContent = translations.oprocessor25;
    document.getElementById('oprocessor26').textContent = translations.oprocessor26;
    document.getElementById('oprocessor27').textContent = translations.oprocessor27;
}

// Optionally, load default language
changeLanguage('en');



