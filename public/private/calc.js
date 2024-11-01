
/*function calculateTotal() {
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
}*/

    // Preis der Gehäuse
const casePrices = {
    case1: 30,
    case2: 33,
    case3: 38,
    case4: 45,
    case5: 65
};

// Preis der Hauptkomponenten
const componentPrices = {
    cpu: {
        ryzen3_4100: 100,
        ryzen3_4300g: 120,
        ryzen7_5700: 250,
        ryzen7_5700x: 270,
        ryzen7_5700x3d: 300,
        ryzen7_5800x: 320,
        i7_12700f: 350,
        i7_12700: 360,
        i7_14700f: 400,
        i7_14700: 410
    },
    mainboard: {
        m1: 70,
        m2: 100,
        m3: 120,
        m4: 80,
        m5: 90,
        m6: 150
    },
    ram: {
        r11: 40,
        r12: 80,
        r13: 75,
        r14: 150,
        r15: 140,
        r16: 280,
        r17: 300,
        r18: 600
    },
    gpu_selection: {
        g25: 300,
        g26: 350,
        g27: 400,
        g30: 150,
        g31: 200,
        g20: 0
    },
    gpu_bracket:{
        g32: 0,
        g33: 9,
        g34: 14
    },
    ssd_drive1:{
        ssd40: 0, // NONE
        ssd41: 50, // 256 GB PCS PCIe SSD M.2
        ssd42: 80, // 512 GB PCS PCIe SSD M.2
        ssd43: 150, // 1 TB PCS PCIe SSD M.2
        ssd47: 120, // 512 GB SOLIDIGM P44 PRO GEN 4 M.2 NVMe PCIe SSD
        ssd48: 200, // 1 TB SOLIDIGM P44 PRO GEN 4 M.2 NVMe PCIe SSD
        ssd49: 400, // 2 TB SOLIDIGM P44 PRO GEN 4 M.2 NVMe PCIe SSD
        ssd55: 220, // 1 TB SAMSUNG 990 PRO M.2, PCIe 4.0 NVMe
        ssd56: 400, // 2 TB SAMSUNG 990 PRO M.2, PCIe 4.0 NVMe
        ssd57: 750  // 4 TB SAMSUNG 990 PRO M.2, PCIe 4.0 NVMe
    },
    ssd_drive2:{
        ssd60: 0, // NONE
        ssd61: 50, // 256 GB PCS PCIe SSD M.2
        ssd62: 80, // 512 GB PCS PCIe SSD M.2
        ssd63: 150, // 1 TB PCS PCIe SSD M.2
        ssd67: 120, // 512 GB SOLIDIGM P44 PRO GEN 4 M.2 NVMe PCIe SSD
        ssd68: 200, // 1 TB SOLIDIGM P44 PRO GEN 4 M.2 NVMe PCIe SSD
        ssd69: 400, // 2 TB SOLIDIGM P44 PRO GEN 4 M.2 NVMe PCIe SSD
        ssd75: 220, // 1 TB SAMSUNG 990 PRO M.2, PCIe 4.0 NVMe
        ssd76: 400, // 2 TB SAMSUNG 990 PRO M.2, PCIe 4.0 NVMe
        ssd77: 750  // 4 TB SAMSUNG 990 PRO M.2, PCIe 4.0 NVMe
    },
    storage_drive1:{
        sd80: 0, // NONE
        sd81: 40,  // 256 GB PCS 2.5 SSD, SATA 6 Gb
        sd82: 55,  // 480 GB-KINGSTON A400, 2.5 SSD, SATA 6 Gb
        sd83: 100, // 960 GB-KINGSTON A400, 2.5 SSD, SATA 6 Gb
        sd84: 50,  // 1 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd85: 70,  // 2 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd86: 90,  // 3 TB SATA-III 3.5 HDD
        sd87: 110, // 4 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd88: 160, // 6 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd89: 220  // 8 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
    },
    storage_drive2:{
        sd90: 0, // NONE
        sd91: 40,  // 256 GB PCS 2.5 SSD, SATA 6 Gb
        sd92: 55,  // 480 GB-KINGSTON A400, 2.5 SSD, SATA 6 Gb
        sd93: 100, // 960 GB-KINGSTON A400, 2.5 SSD, SATA 6 Gb
        sd94: 50,  // 1 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd95: 70,  // 2 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd96: 90,  // 3 TB SATA-III 3.5 HDD
        sd97: 110, // 4 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd98: 160, // 6 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
        sd99: 220  // 8 TB SEAGATE BARRACUDA 3.5 HDD, SATA-III
    },
    dvd:{
        dvd100: 0,
        dvd102: 20,
        dvd103: 80
    },
    externdvd:{
        edvd105: 0,
        edvd106: 26,
        edvd107: 118
    },
    externaldrive:{
        ed110: 0,
        ed111: 240,
        ed112: 118,
        ed113: 178
    },
    powercable:{
        pc115: 0,
        pc116: 0,
        pc117: 0,
        pc118: 0
    },
    cpucoolers:{
        cpuc120: 6,
        cpuc121: 23,
        cpuc122: 54
    },
    heatconductingpaste:{
        hcp125: 0,
        hcp126: 11
    },
    os:{
        os130: 100,
        os131: 150,
        os132: 0
    },
    language:{
    },
    officesoftware:{
        osw140: 0,
        osw141: 78,
        osw142: 111,
        osw143: 170,
        osw144: 265
    },
    monitor:{
        mon145: 0,
        mon146: 118,
        mon147: 119,
        mon148: 199
    },
    quantity_monitor:{
        qm01: 1,
        qm02: 2,
        qm03: 3,
        qm04: 4,
        qm05: 5,
        qm06: 6
    },
    monitorcabel:{
        mc150: 0,
        mc151: 9,
        mc152: 10,
        mc153: 9,
        mc154: 10,
        mc155: 10
    },
    monitorbracket:{
        mb160: 0,
        mb161: 124,
        mb162: 209
    },
    mouseandkeyboard:{
        mak165: 0,
        mak166: 73,
        mak167: 58
    },
    cablemangagement:{
        cablem170: 0,
        cablem171: 3,
        cablem172: 6
    },
    warranty:{
        w175: 0,
        w176: 162 
    },
    delivery:{
        d180: 10,
        d181: 20,
        d182: 5
    },
    configurationtime:{
        c185: 0,
        c186: 83,
        c187: 119
    }
};

function calculateTotal() {
    console.log('calculateTotal called');

    let total = 0;
    let selectedComponents = [];

    console.log(`total newly calculated: ${total}`);
    // Gehäuse Preis
    const selectedCase = document.querySelector('input[name="case"]:checked');
    if (selectedCase) {
        const casePrice = casePrices[selectedCase.value];
        total += casePrice;
        selectedComponents.push(`<strong>Computer case</strong>: ${selectedCase.parentElement.textContent.trim()} - ${casePrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // CPU Preis
    const selectedCPU = document.getElementById('cpu').value;
    if (selectedCPU) {
        const cpuPrice = componentPrices.cpu[selectedCPU];
        total += cpuPrice;
        selectedComponents.push(`<strong>Processor (CPU)</strong>: ${document.getElementById('cpu').options[document.getElementById('cpu').selectedIndex].text} - ${cpuPrice} €`);
    }

    console.log(`total newly calculated: ${total}`);
    // Mainboard Preis
    const selectedMainboard = document.getElementById('mainboard').value;
    if (selectedMainboard) {
        const mainboardPrice = componentPrices.mainboard[selectedMainboard];
        total += mainboardPrice;
        selectedComponents.push(`<strong>Mainboard</strong>: ${document.getElementById('mainboard').options[document.getElementById('mainboard').selectedIndex].text} - ${mainboardPrice} €`);
    }

    console.log(`total newly calculated: ${total}`);
    // RAM Preis
    const selectedRAM = document.getElementById('ram').value;
    if (selectedRAM) {
        const ramPrice = componentPrices.ram[selectedRAM];
        total += ramPrice;
        selectedComponents.push(`<strong>Random-access memory</strong>: ${document.getElementById('ram').options[document.getElementById('ram').selectedIndex].text} - ${ramPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // GPU Preis
    const selectedGPU = document.getElementById('gpu_selection').value;
    if (selectedGPU) {
        const gpuPrice = componentPrices.gpu_selection[selectedGPU];
        total += gpuPrice;
        selectedComponents.push(`<strong>Graficscard</strong>: ${document.getElementById('gpu_selection').options[document.getElementById('gpu_selection').selectedIndex].text} - ${gpuPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // GPU Bracket Preis
    const selectedGPUb = document.getElementById('gpu_bracket').value;
    if (selectedGPUb) {
        const gpubPrice = componentPrices.gpu_bracket[selectedGPUb];
        total += gpubPrice;
        selectedComponents.push(`<strong>Gpu-bracket</strong>: ${document.getElementById('gpu_bracket').options[document.getElementById('gpu_bracket').selectedIndex].text} - ${gpubPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // SSD Preise
    const selectedSSD1 = document.getElementById('ssd_drive1').value;
    if (selectedSSD1) {
        const ssd1Price = componentPrices.ssd_drive1[selectedSSD1];
        total += ssd1Price;
        selectedComponents.push(`<strong>1. M.2 SSD drive</strong>: ${document.getElementById('ssd_drive1').options[document.getElementById('ssd_drive1').selectedIndex].text} - ${ssd1Price} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    const selectedSSD2 = document.getElementById('ssd_drive2').value;
    if (selectedSSD2) {
        const ssd2Price = componentPrices.ssd_drive2[selectedSSD2];
        total += ssd2Price;
        selectedComponents.push(`<strong>2. M.2 SSD drive</strong>: ${document.getElementById('ssd_drive2').options[document.getElementById('ssd_drive2').selectedIndex].text} - ${ssd2Price} €`);
    }
    // SD Preise
    
    console.log(`total newly calculated: ${total}`);
    const selectedSD1 = document.getElementById('storage_drive1').value;
    if (selectedSD1) {
        const sd1Price = componentPrices.storage_drive1[selectedSD1];
        total += sd1Price;
        selectedComponents.push(`<strong>1. Storage drive</strong>: ${document.getElementById('storage_drive1').options[document.getElementById('storage_drive1').selectedIndex].text} - ${sd1Price} €`);
    }
    const selectedSD2 = document.getElementById('storage_drive2').value;
    if (selectedSD2) {
        const sd2Price = componentPrices.storage_drive2[selectedSD2];
        total += sd2Price;
        selectedComponents.push(`<strong>2. Storage drive</strong>: ${document.getElementById('storage_drive2').options[document.getElementById('storage_drive2').selectedIndex].text} - ${sd2Price} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // DVD Preise
    const selectedDVD = document.getElementById('dvd').value;
    if (selectedDVD) {
        const dvdPrice = componentPrices.dvd[selectedDVD];
        total += dvdPrice;
        selectedComponents.push(`<strong>DVD/BLU-RAY-Drive</strong>: ${document.getElementById('dvd').options[document.getElementById('dvd').selectedIndex].text} - ${dvdPrice} €`);
    }
    const selectedEDVD = document.getElementById('externdvd').value;
    if (selectedEDVD) {
        const edvdPrice = componentPrices.externdvd[selectedEDVD];
        total += edvdPrice;
        selectedComponents.push(`<strong>External DVD/BLU-RAY-Drive</strong>: ${document.getElementById('externdvd').options[document.getElementById('externdvd').selectedIndex].text} - ${edvdPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // External drive Preis
    const selectedExternaldrive = document.getElementById('externaldrive').value;
    if (selectedExternaldrive) {
        const externaldrivePrice = componentPrices.externaldrive[selectedExternaldrive];
        total += externaldrivePrice;
        selectedComponents.push(`<strong>External hard drive</strong>: ${document.getElementById('externaldrive').options[document.getElementById('externaldrive').selectedIndex].text} - ${externaldrivePrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Powercable Preis
    const selectedPowercable = document.getElementById('powercable').value;
    if (selectedEDVD) {
        const powercablePrice = componentPrices.powercable[selectedPowercable];
        total += powercablePrice;
        selectedComponents.push(`<strong>Power cable</strong>: ${document.getElementById('powercable').options[document.getElementById('powercable').selectedIndex].text} - ${powercablePrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // CPU coolers Preis
    const selectedCPUcoolers = document.getElementById('cpucoolers').value;
    if (selectedCPUcoolers) {
        const cpucoolersPrice = componentPrices.cpucoolers[selectedCPUcoolers];
        total += cpucoolersPrice;
        selectedComponents.push(`<strong>CPU coolers</strong>: ${document.getElementById('cpucoolers').options[document.getElementById('cpucoolers').selectedIndex].text} - ${cpucoolersPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Heatconductingpaste Preis
    const selectedHeatconductingpaste = document.getElementById('heatconductingpaste').value;
    if (selectedHeatconductingpaste) {
        const heatconductingpastePrice = componentPrices.heatconductingpaste[selectedHeatconductingpaste];
        total += heatconductingpastePrice;
        selectedComponents.push(`<strong>Heat conducting paste</strong>: ${document.getElementById('heatconductingpaste').options[document.getElementById('heatconductingpaste').selectedIndex].text} - ${heatconductingpastePrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Operatingsystem Preis
    const selectedOperatingsystem = document.getElementById('os').value;
    if (selectedOperatingsystem) {
        const operatingsystemPrice = componentPrices.os[selectedOperatingsystem];
        total += operatingsystemPrice;
        selectedComponents.push(`<strong>Operating system</strong>: ${document.getElementById('os').options[document.getElementById('os').selectedIndex].text} - ${operatingsystemPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Language Preis
    const selectedLanguage = document.getElementById('language').value;
    if (selectedLanguage) {
        selectedComponents.push(`<strong>Language</strong>: ${document.getElementById('language').options[document.getElementById('language').selectedIndex].text}`);
    }
    // Operatingsystem Preis
    const selectedOfficesoftware = document.getElementById('officesoftware').value;
    if (selectedOfficesoftware) {
        const officesoftwarePrice = componentPrices.officesoftware[selectedOfficesoftware];
        total += officesoftwarePrice;
        selectedComponents.push(`<strong>Office software</strong>: ${document.getElementById('officesoftware').options[document.getElementById('officesoftware').selectedIndex].text} - ${officesoftwarePrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Monitor Preis
    const selectedMonitorquantity = document.getElementById('quantity_monitor').value;
    if (selectedMonitorquantity) {
        const monitorquantityPrice = componentPrices.quantity_monitor[selectedMonitorquantity];
        selectedComponents.push(`<strong>Monitor quantity</strong>: ${document.getElementById('quantity_monitor').options[document.getElementById('quantity_monitor').selectedIndex].text} - ${monitorquantityPrice} `);
    }
    const selectedMonitor = document.getElementById('monitor').value;
    if (selectedMonitor && selectedMonitorquantity) {        
    //Anzahl einberechnen
        const monitorquantityPrice = componentPrices.quantity_monitor[selectedMonitorquantity];
        const monitorPrice = componentPrices.monitor[selectedMonitor] * monitorquantityPrice;
        total += monitorPrice;
        selectedComponents.push(`<strong>Monitor</strong>: ${document.getElementById('monitor').options[document.getElementById('monitor').selectedIndex].text} - ${monitorPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Monitorkabel Preis
    const selectedMonitorcabel = document.getElementById('monitorcabel').value;
    if (selectedMonitorcabel) {        
        const monitorcabelPrice = componentPrices.monitorcabel[selectedMonitorcabel];
        total += monitorcabelPrice;
        selectedComponents.push(`<strong>Monitor cable</strong>: ${document.getElementById('monitorcabel').options[document.getElementById('monitorcabel').selectedIndex].text} - ${monitorcabelPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Monitor bracket  Preis
    const selectedMonitorbracket  = document.getElementById('monitorbracket').value;
    if (selectedMonitorbracket ) {
        const monitorbracketPrice = componentPrices.monitorbracket[selectedMonitorbracket];
        total += monitorbracketPrice;
        selectedComponents.push(`<strong>Monitor bracket</strong>: ${document.getElementById('monitorbracket').options[document.getElementById('monitorbracket').selectedIndex].text} - ${monitorbracketPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Mouse & Keyboard Preis
    const selectedMouseandkeyboard  = document.getElementById('mouseandkeyboard').value;
    if (selectedMouseandkeyboard) {
        const mouseandkeyboardPrice = componentPrices.mouseandkeyboard[selectedMouseandkeyboard];
        total += mouseandkeyboardPrice;
        selectedComponents.push(`<strong>Mouse & keyboard</strong>: ${document.getElementById('mouseandkeyboard').options[document.getElementById('mouseandkeyboard').selectedIndex].text} - ${mouseandkeyboardPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Cable mangagement Preis
    const selectedCablemangagement  = document.getElementById('cablemangagement').value;
    if (selectedCablemangagement) {
        const cablemangagementPrice = componentPrices.cablemangagement[selectedCablemangagement];
        total += cablemangagementPrice;
        selectedComponents.push(`<strong>Cable mangagement</strong>: ${document.getElementById('cablemangagement').options[document.getElementById('cablemangagement').selectedIndex].text} - ${cablemangagementPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Warranty Preis
    const selectedWarranty  = document.getElementById('warranty').value;
    if (selectedWarranty) {
        const warrantyPrice = componentPrices.warranty[selectedWarranty];
        total += warrantyPrice;
        selectedComponents.push(`<strong>Warranty</strong>: ${document.getElementById('warranty').options[document.getElementById('warranty').selectedIndex].text} - ${warrantyPrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
    // Delivery Preis
    const selectedDelivery  = document.getElementById('delivery').value;
    if (selectedDelivery) {
        const deliveryPrice = componentPrices.delivery[selectedDelivery];
        total += deliveryPrice;
        selectedComponents.push(`<strong>Delivery</strong>: ${document.getElementById('delivery').options[document.getElementById('delivery').selectedIndex].text} - ${deliveryPrice} €`);
    }  
    
    console.log(`total newly calculated: ${total}`);
    // Assembly time Preis
    const selectedAssemblytime  = document.getElementById('configurationtime').value;
    if (selectedAssemblytime) {
        const configurationtimePrice = componentPrices.configurationtime[selectedAssemblytime];
        total += configurationtimePrice;
        selectedComponents.push(`<strong>Assembly time</strong>: ${document.getElementById('configurationtime').options[document.getElementById('configurationtime').selectedIndex].text} - ${configurationtimePrice} €`);
    }
    
    console.log(`total newly calculated: ${total}`);
   
    // Den Wert der Textbox auslesen und in eine Zahl umwandeln
    const quantityValue = parseInt(document.getElementById('quantity').value) || 0; 
    if (quantityValue > 0) { 
        console.log('quantity changed')
        // Multiplication 
        total *= quantityValue; }
     
    console.log(`total newly calculated: ${total}`); 
    // Gesamtpreis und Auswahl anzeigen
    document.getElementById('totalPrice').textContent = `Total price: ${total} €`;
    //document.getElementById('selectedComponents').textContent = selectedComponents.join(', ');
    document.getElementById('selectedComponents').innerHTML = selectedComponents.join('<br>');

}

    window.onload = function() { 
        console.log('window.onload funktioniert'); 
        document.querySelectorAll('input[name="case"], #cpu, #mainboard, #ram, #gpu_selection, #gpu_bracket, #ssd_drive1, #ssd_drive2, #storage_drive1, #storage_drive2, #dvd, #externdvd, #externaldrive, #powercable, #cpucoolers, #heatconductingpaste, #os, #language, #officesoftware, #monitor, #quantity_monitor, #monitorcabel, #quantity_kabel, #monitorbracket, #mouseandkeyboard, #cablemangagement, #warranty, #delivery, #configurationtime, input[name="quantity"]').forEach(element => { 
            element.addEventListener('change', function() { 
                console.log(`${element.id} wurde geändert`); 
                calculateTotal(); });
         }); 
    // Initial calculation 
    calculateTotal(); };


