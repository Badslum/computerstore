
function calculateTotal() {
    const netzteilSelect = document.getElementById('netzteil');
    const selectedNetzteilPrice = parseFloat(netzteilSelect.options[netzteilSelect.selectedIndex].getAttribute('data-price')) || 0;
    
    // Hier können weitere Dropdowns hinzugefügt werden, z.B. 'cpu', 'ram', etc.
    const cpuSelect = document.getElementById('cpu');
    const selectedCpuPrice = parseFloat(cpuSelect.options[cpuSelect.selectedIndex].getAttribute('data-price')) || 0;
    
    // Gesamtpreis berechnen
    const total = selectedNetzteilPrice + selectedCpuPrice;

    // Gesamtbetrag anzeigen
    const gesamtbetragElement = document.getElementById('gesamtbetrag');
    gesamtbetragElement.textContent = `Gesamtbetrag: ${total.toFixed(2)} €`;
}
