const units = {
    length: {
        meter: { name: 'Meter (m)', factor: 1 },
        kilometer: { name: 'Kilometer (km)', factor: 0.001 },
        centimeter: { name: 'Centimeter (cm)', factor: 100 },
        millimeter: { name: 'Millimeter (mm)', factor: 1000 },
        mile: { name: 'Mile (mi)', factor: 0.000621371 },
        yard: { name: 'Yard (yd)', factor: 1.09361 },
        foot: { name: 'Foot (ft)', factor: 3.28084 },
        inch: { name: 'Inch (in)', factor: 39.3701 }
    },
    mass: {
        kilogram: { name: 'Kilogram (kg)', factor: 1 },
        gram: { name: 'Gram (g)', factor: 1000 },
        milligram: { name: 'Milligram (mg)', factor: 1000000 },
        ton: { name: 'Metric Ton (t)', factor: 0.001 },
        pound: { name: 'Pound (lb)', factor: 2.20462 },
        ounce: { name: 'Ounce (oz)', factor: 35.274 }
    },
    time: {
        second: { name: 'Second (s)', factor: 1 },
        millisecond: { name: 'Millisecond (ms)', factor: 1000 },
        minute: { name: 'Minute (min)', factor: 1/60 },
        hour: { name: 'Hour (h)', factor: 1/3600 },
        day: { name: 'Day (d)', factor: 1/86400 },
        week: { name: 'Week (wk)', factor: 1/604800 },
        year: { name: 'Year (yr)', factor: 1/31536000 }
    },
    current: {
        ampere: { name: 'Ampere (A)', factor: 1 },
        milliampere: { name: 'Milliampere (mA)', factor: 1000 },
        microampere: { name: 'Microampere (μA)', factor: 1000000 },
        kiloampere: { name: 'Kiloampere (kA)', factor: 0.001 }
    },
    temperature: {
        kelvin: { name: 'Kelvin (K)', type: 'kelvin' },
        celsius: { name: 'Celsius (°C)', type: 'celsius' },
        fahrenheit: { name: 'Fahrenheit (°F)', type: 'fahrenheit' }
    },
    amount: {
        mole: { name: 'Mole (mol)', factor: 1 },
        millimole: { name: 'Millimole (mmol)', factor: 1000 },
        kilomole: { name: 'Kilomole (kmol)', factor: 0.001 }
    },
    luminosity: {
        candela: { name: 'Candela (cd)', factor: 1 },
        millicandela: { name: 'Millicandela (mcd)', factor: 1000 },
        kilocandela: { name: 'Kilocandela (kcd)', factor: 0.001 }
    }
};

let currentUnit = 'length';
const fromSelect = document.getElementById('fromUnit');
const toSelect = document.getElementById('toUnit');
const inputValue = document.getElementById('inputValue');
const result = document.getElementById('result');
const formula = document.getElementById('formula');

function populateUnits(unitType) {
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    
    const unitList = units[unitType];
    Object.keys(unitList).forEach((key, index) => {
        const option1 = document.createElement('option');
        option1.value = key;
        option1.textContent = unitList[key].name;
        fromSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = key;
        option2.textContent = unitList[key].name;
        toSelect.appendChild(option2);

        if (index === 1) toSelect.value = key;
    });
}

function convertTemperature(value, from, to) {
    let kelvin;
    
    if (from === 'kelvin') kelvin = value;
    else if (from === 'celsius') kelvin = value + 273.15;
    else if (from === 'fahrenheit') kelvin = (value - 32) * 5/9 + 273.15;
    
    if (to === 'kelvin') return kelvin;
    else if (to === 'celsius') return kelvin - 273.15;
    else if (to === 'fahrenheit') return (kelvin - 273.15) * 9/5 + 32;
}

function convert() {
    const value = parseFloat(inputValue.value);
    if (isNaN(value)) {
        result.textContent = '0';
        formula.textContent = '';
        return;
    }

    const from = fromSelect.value;
    const to = toSelect.value;
    let convertedValue;
    let formulaText = '';

    if (currentUnit === 'temperature') {
        convertedValue = convertTemperature(value, from, to);
        if (from === 'celsius' && to === 'fahrenheit') {
            formulaText = `Formula: °F = (°C × 9/5) + 32`;
        } else if (from === 'fahrenheit' && to === 'celsius') {
            formulaText = `Formula: °C = (°F - 32) × 5/9`;
        } else if (from === 'kelvin' && to === 'celsius') {
            formulaText = `Formula: °C = K - 273.15`;
        } else if (from === 'celsius' && to === 'kelvin') {
            formulaText = `Formula: K = °C + 273.15`;
        }
    } else {
        const fromFactor = units[currentUnit][from].factor;
        const toFactor = units[currentUnit][to].factor;
        convertedValue = value * (toFactor / fromFactor);
        
        const ratio = (toFactor / fromFactor).toFixed(6);
        formulaText = `Conversion: 1 ${from} = ${ratio} ${to}`;
    }

    result.textContent = convertedValue.toFixed(6).replace(/\.?0+$/, '');
    formula.textContent = formulaText;
}

document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentUnit = this.dataset.unit;
        populateUnits(currentUnit);
        convert();
    });
});

document.getElementById('swapBtn').addEventListener('click', function() {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convert();
});

inputValue.addEventListener('input', convert);
fromSelect.addEventListener('change', convert);
toSelect.addEventListener('change', convert);

populateUnits('length');