# 🔐 BB84 Quantum Key Distribution (QKD) Simulator

## 📘 Overview

This project simulates the **BB84 Quantum Key Distribution (QKD)** protocol, allowing two parties—**Alice** and **Bob**—to securely share a secret key over an insecure channel using quantum mechanics. It demonstrates how an eavesdropper (**Eve**) attempting an intercept-resend attack introduces detectable errors.

The simulator provides step-by-step interaction and visualization to help users learn how QKD works and why it's secure against eavesdropping.

---

## 🎯 Features

- **BB84 Protocol Simulation:**
  - Alice generates random bits and encodes them using random bases (Z or X).
  - Bob measures the received qubits using his own random bases.
  
- **Interactive Controls:**
  - Set qubit count (4–100).
  - Start simulation step-by-step.
  - Optional Eve simulation.
  - Key reconciliation and QBER calculation.

- **Eavesdropping Simulation:**
  - Eve intercepts and measures qubits with random bases.
  - Resends based on her measurement.
  - Introduces errors detectable by Alice and Bob.

- **Key Generation & Analysis:**
  - Basis comparison and key sifting.
  - Quantum Bit Error Rate (QBER) calculation.
  - Interpretive feedback based on QBER.

- **Visual Representation:**
  - Panels for Alice, Bob, and (optionally) Eve’s bits and bases.
  - Sifted keys display.
  - Detailed toggleable table of all steps.
  - Line chart comparing Alice and Bob’s sifted keys.

- **Integrated Documentation:**
  - Explanation of QKD concepts and BB84 protocol.
  - Describes simulation logic and internal workings.

---

## 🧠 How It Works

1. **Initialization:** Set number of qubits.
2. **Alice's Preparation:** Random bit and basis generation.
3. **Transmission:** Qubits conceptually sent to Bob.
4. **Eve's Interception (Optional):**
   - Eve measures and resends altered qubits.
5. **Bob's Measurement:** Random bases, quantum measurement applied.
6. **Basis Comparison & Key Sifting:**
   - Compare Alice and Bob's bases.
   - Keep bits where bases match.
7. **QBER Calculation:** Determine error rate between sifted keys.
8. **Display:** Show keys, QBER, and optional detailed steps.

---

## 💻 Project Structure

