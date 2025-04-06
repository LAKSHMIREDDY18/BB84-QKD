# BB84 Quantum Key Distribution (QKD) Simulator

## Project Description

This project provides an interactive web-based simulation of the BB84 Quantum Key Distribution protocol. It allows users to visualize the process of establishing a shared secret key between two parties (Alice and Bob) using quantum principles, and demonstrates how an eavesdropper (Eve) attempting an intercept-resend attack introduces detectable errors.

The simulation models the core concepts of BB84, including random basis selection, quantum measurement outcomes, basis reconciliation, key sifting, and Quantum Bit Error Rate (QBER) calculation. It serves as an educational tool to understand the fundamentals of QKD security.

## Features

* **BB84 Protocol Simulation:** Simulates the key steps:
    * Alice generates random bits and encodes them using random bases (Rectilinear 'Z' or Diagonal 'X').
    * Bob measures the received qubits using his own randomly chosen bases.
* **Interactive Controls:**
    * Set the number of qubits for the simulation (4-100).
    * Step-by-step execution: Start simulation, optionally introduce Eve, compare bases.
* **Eavesdropping Simulation:**
    * Simulate an "Intercept-Resend" attack by Eve.
    * Eve measures Alice's qubits using random bases and resends new qubits to Bob based on her results.
* **Key Generation & Analysis:**
    * Performs basis reconciliation between Alice and Bob.
    * Extracts the final sifted keys for both Alice and Bob.
    * Calculates the Quantum Bit Error Rate (QBER) by comparing the sifted keys.
    * Provides contextual messages based on the QBER and Eve's presence.
* **Visualization:**
    * Dedicated panels displaying Alice's, Bob's, and (if active) Eve's bits and bases.
    * Displays the final sifted keys for Alice and Bob.
    * A detailed, toggleable table showing the step-by-step process for each qubit (bases, measurements, matching status, sifted bits).
    * A line chart comparing Alice's and Bob's sifted key bits visually.
* **Integrated Documentation:** Includes a "Project Overview" section explaining QKD, BB84, the simulation logic, and how the code works.

## How It Works

The simulation follows these steps, mirroring the BB84 protocol:

1.  **Initialization:** The user sets the desired number of qubits.
2.  **Alice's Preparation:** Alice generates `n` random bits and `n` random bases ('Z' or 'X'). The simulation stores these.
3.  **Transmission (Simulated):** The qubits (represented by bit value and basis) are conceptually sent to Bob.
4.  **Eve's Interception (Optional):** If the "Simulate Eve Interception" button is clicked:
    * Eve generates `n` random bases.
    * She "measures" each of Alice's qubits using her basis. The outcome is deterministic if her basis matches Alice's, and random (0 or 1 with 50% probability) otherwise.
    * Eve "resends" new qubits to Bob, encoding *her measured bit* using *her measurement basis*.
    * The state Bob receives is now the one prepared by Eve.
5.  **Bob's Measurement:** Bob generates `n` random bases. He measures each received qubit (either from Alice directly or from Eve) using his chosen basis. The outcome follows the quantum measurement rule: deterministic if Bob's basis matches the basis of the qubit *he received*, random otherwise.
6.  **Basis Comparison & Key Sifting:** When "Compare Bases & Get Key" is clicked:
    * The simulation compares Alice's *original* bases with Bob's *measurement* bases.
    * Where the bases match, Alice keeps her original bit, and Bob keeps his measured bit. These form the sifted keys.
7.  **QBER Calculation:** The sifted keys of Alice and Bob are compared. The QBER is the fraction of bits that do not match.
8.  **Display:** All relevant data (bits, bases, keys, QBER, table, chart) is updated on the webpage.

## How to Use

1.  **Open the HTML file** (`index.html` or the provided file) in a web browser.
2.  **Set Qubit Count:** Enter the desired number of qubits (e.g., 20) in the input field.
3.  **Start Simulation:** Click the "Start Simulation" button.
    * Alice's bits/bases and Bob's chosen bases/results will be displayed.
    * The "Simulate Eve Interception" and "Compare Bases & Get Key" buttons become active.
4.  **(Optional) Simulate Eve:** Click the "Simulate Eve Interception" button.
    * Eve's panel will appear showing her actions.
    * Bob's bases and results will update based on the qubits received from Eve.
    * This button can only be clicked once per simulation run before comparing bases.
5.  **Compare Bases:** Click the "Compare Bases & Get Key" button.
    * The sifted keys for Alice and Bob will be displayed in their respective panels.
    * The QBER will be calculated and displayed, along with an interpretive message.
    * The key comparison chart will be generated.
    * The "Show Detailed Steps" button will appear.
6.  **View Details:** Click the "Show Detailed Steps" button to toggle the visibility of the table showing the full comparison for each qubit.
7.  **New Simulation:** Click the "Start New Simulation" button to reset everything and begin again.
