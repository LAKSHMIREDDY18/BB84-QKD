// This file serves as the entry point for the JavaScript functionality. 
// It initializes the simulation and handles the main logic for starting and managing the BB84 protocol.

document.addEventListener('DOMContentLoaded', () => {
    const numQubitsInput = document.getElementById('num-qubits');
    const startBtn = document.getElementById('btn-start');
    const eveBtn = document.getElementById('btn-eve');
    const compareBtn = document.getElementById('btn-compare');

    startBtn.addEventListener('click', () => {
        const numQubits = parseInt(numQubitsInput.value);
        resetUI();
        const aliceData = alicePreparation(numQubits);
        const bobData = bobMeasurement(numQubits, aliceData);
        updatePanels();
        compareBtn.disabled = false;
    });

    eveBtn.addEventListener('click', () => {
        const eveData = simulateEveMeasurement(numQubits, aliceData);
        updatePanels();
    });

    compareBtn.addEventListener('click', () => {
        aliceKey = extractSiftedKey(aliceBits, aliceBases, bobBases);
        bobKey = extractSiftedKey(bobResults, bobBases, bobBases);
        qber = calculateQBER(aliceKey, bobKey);
        updateQBERDisplay();
        generateDetailedTable();
        updateChart();
    });

    function resetUI() {
        // Reset UI elements and state variables
    }

    function updatePanels() {
        // Update the display panels with current simulation data
    }

    function updateQBERDisplay() {
        // Update the QBER display and provide contextual messages
    }

    function generateDetailedTable() {
        // Generate the rows for the detailed table comparing steps
    }

    function updateChart() {
        // Update or create the key comparison chart using Chart.js
    }
});