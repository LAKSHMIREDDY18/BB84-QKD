// This file manages the user interface interactions for the BB84 Quantum Key Distribution simulation.

document.addEventListener('DOMContentLoaded', () => {
    const numQubitsInput = document.getElementById('num-qubits');
    const startBtn = document.getElementById('btn-start');
    const eveBtn = document.getElementById('btn-eve');
    const compareBtn = document.getElementById('btn-compare');
    const aliceBitsSpan = document.getElementById('alice-bits');
    const aliceBasesSpan = document.getElementById('alice-bases');
    const bobBasesSpan = document.getElementById('bob-bases');
    const bobResultsSpan = document.getElementById('bob-results');
    const evePanel = document.getElementById('eve-panel');
    const eveBasesSpan = document.getElementById('eve-bases');
    const eveMeasuredSpan = document.getElementById('eve-measured');
    const aliceKeySpan = document.getElementById('alice-key');
    const bobKeySpan = document.getElementById('bob-key');
    const qberSpan = document.getElementById('qber');
    const qberMessage = document.getElementById('qber-message');
    const keyTableContainer = document.getElementById('key-table-container');
    const keyTableBody = document.getElementById('key-table-body');
    const showTableBtn = document.getElementById('show-table-btn');
    const keyChartCtx = document.getElementById('key-chart').getContext('2d');
    let keyChart = null;

    startBtn.addEventListener('click', () => {
        resetUI();
        const numQubits = parseInt(numQubitsInput.value);
        const aliceData = alicePreparation(numQubits);
        updatePanels();
        startBtn.disabled = true;
        eveBtn.disabled = false;
        compareBtn.disabled = false;
    });

    eveBtn.addEventListener('click', () => {
        const eveData = simulateEveMeasurement(n, { bits: aliceBits, bases: aliceBases });
        bobBases = bobMeasurement(n, eveData.qubitsForBob);
        eveActive = true;
        updatePanels();
    });

    compareBtn.addEventListener('click', () => {
        aliceKey = extractSiftedKey(aliceBits, aliceBases, bobBases);
        bobKey = extractSiftedKey(bobResults, bobBases, bobBases);
        qber = calculateQBER(aliceKey, bobKey);
        basesCompared = true;
        updatePanels();
        updateQBERDisplay();
        generateDetailedTable();
        updateChart();
    });

    showTableBtn.addEventListener('click', () => {
        if (keyTableContainer.style.display === 'none') {
            keyTableContainer.style.display = 'block';
            showTableBtn.textContent = 'Hide Detailed Steps';
        } else {
            keyTableContainer.style.display = 'none';
            showTableBtn.textContent = 'Show Detailed Steps';
        }
    });

    function resetUI() {
        aliceBitsSpan.textContent = '-';
        aliceBasesSpan.innerHTML = '-';
        bobBasesSpan.innerHTML = '-';
        bobResultsSpan.textContent = '-';
        evePanel.style.display = 'none';
        eveBasesSpan.innerHTML = '-';
        eveMeasuredSpan.textContent = '-';
        aliceKeySpan.textContent = '-';
        bobKeySpan.textContent = '-';
        qberSpan.textContent = 'N/A';
        qberMessage.textContent = '';
        keyTableBody.innerHTML = '';
        keyTableContainer.style.display = 'none';
        showTableBtn.style.display = 'none';

        if (keyChart) {
            keyChart.destroy();
            keyChart = null;
        }
    }
});