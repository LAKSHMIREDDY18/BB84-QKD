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

