# BB84-QKD

## Overview
This project simulates the BB84 Quantum Key Distribution (QKD) protocol, which allows two parties (Alice and Bob) to establish a secure shared secret key over an insecure channel. The simulation demonstrates quantum mechanics principles that make QKD secure, including the detection of eavesdropping attempts through Quantum Bit Error Rate (QBER) measurement.

## Features
- Interactive web-based simulation of the complete BB84 protocol
- Visualization of the key exchange process between Alice and Bob
- Optional simulation of an eavesdropper (Eve) using the intercept-resend attack
- Real-time calculation and display of Quantum Bit Error Rate (QBER)
- Detailed step-by-step visualization of the protocol execution
- Interactive chart comparing Alice's and Bob's final sifted keys

## BB84 Protocol Steps
1. **Qubit Preparation**: Alice generates random bits and encodes them in random bases (Z/rectilinear or X/diagonal)
2. **Qubit Transmission**: Alice sends these qubits to Bob over a quantum channel
3. **Measurement**: Bob measures each qubit using randomly selected bases
4. **Basis Reconciliation**: Alice and Bob publicly compare their basis choices
5. **Key Sifting**: They keep only the bits where their basis choices matched
6. **Error Detection**: They calculate the QBER to detect potential eavesdropping

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/BB84-QKD.git
   cd BB84-QKD
   ```

2. No additional installation is needed as this is a client-side web application.

## Usage Instructions
1. Open `index.html` in any modern web browser
2. Set the desired number of qubits (default: 20)
3. Click "Start Simulation" to begin
4. Observe Alice's random bits and basis choices, and Bob's measurement results
5. (Optional) Click "Simulate Eve Interception" to add an eavesdropper
6. Click "Compare Bases & Get Key" to complete the protocol
7. Analyze the results:
   - View the sifted keys for Alice and Bob
   - Check the QBER percentage
   - Toggle "Show Detailed Steps" to see bit-by-bit information
   - Examine the chart showing key comparison

## Project Structure
```
BB84-QKD/
├── css/
│   └── styles.css        # Styling for the application
├── js/
│   ├── app.js            # Main application entry point
│   ├── bb84.js           # Core BB84 protocol implementation
│   └── ui.js             # UI interaction handlers
├── index.html            # Main HTML file
└── README.md             # Project documentation
```

## Technical Details
- The simulation uses classical computation to model quantum behavior
- Qubits are represented abstractly by their encoded bit value and basis
- Measurement follows BB84 quantum mechanics principles:
  - Measuring in the same basis gives deterministic results
  - Measuring in a different basis gives random results (50/50)
- Eve's intercept-resend attack introduces detectable errors

## Browser Compatibility
The application works best in modern browsers that support ES6+ JavaScript and modern CSS:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Educational Value
This simulation serves as an educational tool for:
- Understanding the principles of quantum key distribution
- Learning about quantum measurement and superposition concepts
- Exploring quantum cryptography fundamentals
- Demonstrating the no-cloning theorem implications
- Visualizing how quantum properties enhance security

## Credits
- Developed based on the BB84 protocol by Charles Bennett and Gilles Brassard (1984)
- Uses [Chart.js](https://www.chartjs.org/) for data visualization
- Uses [Tailwind CSS](https://tailwindcss.com/) for styling

## License
[MIT License](https://opensource.org/licenses/MIT)
