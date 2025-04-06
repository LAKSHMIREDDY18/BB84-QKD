// This file contains the core logic for the BB84 Quantum Key Distribution protocol. 
// It includes functions for generating random bits, simulating Alice and Bob's actions, and calculating the Quantum Bit Error Rate (QBER).

let aliceBits = [];
let aliceBases = [];
let bobBases = [];
let bobResults = [];
let eveBases = [];
let eveMeasured = [];
let aliceKey = [];
let bobKey = [];
let qber = 0;

function generateRandomBit() {
    return Math.floor(Math.random() * 2);
}

function generateRandomBasis() {
    return Math.random() < 0.5 ? 'Z' : 'X';
}

function alicePreparation(num) {
    aliceBits = Array.from({ length: num }, generateRandomBit);
    aliceBases = Array.from({ length: num }, generateRandomBasis);
    return {
        bits: [...aliceBits],
        bases: [...aliceBases]
    };
}

function simulateEveMeasurement(num, aliceData) {
    eveBases = Array.from({ length: num }, generateRandomBasis);
    eveMeasured = [];
    let qubitsToSendToBob = { bits: [], bases: [] };

    for (let i = 0; i < num; i++) {
        const measurementBasis = eveBases[i];
        const preparedBasis = aliceData.bases[i];
        const preparedBit = aliceData.bits[i];
        let measuredBit;

        if (preparedBasis === measurementBasis) {
            measuredBit = preparedBit;
        } else {
            measuredBit = generateRandomBit();
        }
        eveMeasured.push(measuredBit);
        qubitsToSendToBob.bits.push(measuredBit);
        qubitsToSendToBob.bases.push(measurementBasis);
    }
    return {
        qubitsForBob: qubitsToSendToBob,
        eveBases: [...eveBases],
        eveMeasured: [...eveMeasured]
    };
}

function bobMeasurement(num, receivedQubits) {
    const currentBobBases = Array.from({ length: num }, generateRandomBasis);
    const currentBobResults = [];

    for (let i = 0; i < num; i++) {
        const measurementBasis = currentBobBases[i];
        const incomingBasis = receivedQubits.bases[i];
        const incomingBit = receivedQubits.bits[i];
        let measuredBit;

        if (incomingBasis === measurementBasis) {
            measuredBit = incomingBit;
        } else {
            measuredBit = generateRandomBit();
        }
        currentBobResults.push(measuredBit);
    }
    return {
        bases: currentBobBases,
        results: currentBobResults
    };
}

function extractSiftedKey(sourceBits, referenceBases, measurementBases) {
    let key = [];
    for (let i = 0; i < referenceBases.length; i++) {
        if (referenceBases[i] === measurementBases[i]) {
            key.push(sourceBits[i]);
        }
    }
    return key;
}

function calculateQBER(keyA, keyB) {
    let errors = 0;
    for (let i = 0; i < keyA.length; i++) {
        if (keyA[i] !== keyB[i]) {
            errors++;
        }
    }
    return errors / keyA.length;
}