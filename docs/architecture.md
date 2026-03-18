# Architecture

## Core modules

### 1. Monitoring Layer
Tracks wallet authorization events, suspicious contract interactions, and exposure changes.

### 2. Claw Threat Parser
Converts threat signals into structured `Threat Summary`.

### 3. Rescue Order Builder
Transforms a threat summary into an executable `Rescue Order`.

### 4. Response Engine
Executes defensive actions through OKX Onchain OS.

### 5. State Machine
Controls valid transitions and fallback logic.

### 6. Audit Logger
Produces structured defense records.

---

## Main path
Monitoring → Threat_Detected → Threat_Analyzed → Rescue_Order_Built → Response_Executed → Safe_State

## Fallback path
Monitoring → Threat_Detected → Threat_Analyzed → Rescue_Order_Built → Response_Failed → Human_Escalation_Required

---

## Execution principle
Detection is not execution.
Threat parsing is not discretionary authority.
Execution must remain bounded by schema validation and state-machine-controlled logic.
