# BB84 Quantum Key Distribution Simulation

## Overview
This project simulates the BB84 Quantum Key Distribution (QKD) protocol, which allows two parties, Alice and Bob, to securely share a secret key over an insecure channel. The simulation demonstrates the principles of quantum mechanics that underpin the security of the BB84 protocol, including the effects of eavesdropping.

## Project Structure
- **index.html**: The main HTML document containing the user interface for the simulation.
- **css/styles.css**: Contains styles for the project, defining layout, colors, and fonts.
- **js/app.js**: The entry point for the JavaScript functionality, managing the simulation's main logic.
- **js/bb84.js**: Contains the core logic for the BB84 protocol, including functions for generating bits and calculating the Quantum Bit Error Rate (QBER).
- **js/ui.js**: Manages user interface interactions, updating HTML elements based on the simulation state.
- **assets/favicon.ico**: The favicon for the project.

## Usage Instructions
1. Open `index.html` in a web browser to access the simulation interface.
2. Adjust the number of qubits using the input field.
3. Click the "Start Simulation" button to begin the process.
4. If desired, simulate eavesdropping by clicking the "Simulate Eve Interception" button.
5. Finally, compare the bases and retrieve the key by clicking the "Compare Bases & Get Key" button.
6. Review the results displayed on the interface, including the Quantum Bit Error Rate (QBER) and the detailed steps of the simulation.

## Requirements
- A modern web browser with JavaScript enabled.
- No additional software or libraries are required beyond those included in the project.

## License
This project is open-source and available for modification and distribution under the MIT License.