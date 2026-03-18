# Lobster Aegis 2.0

**Intent-Driven Wallet Threat Response Agent on OKX Onchain OS**

Lobster Aegis 2.0 is a reusable **threat response primitive** for agent-native wallet protection. It detects suspicious authorization or wallet exposure events, compiles structured threat summaries through **Claw**, generates executable rescue orders, and triggers constrained defensive response through **OKX Onchain OS**.

---

## Why this project exists

Most AI agents today optimize for efficiency, execution, and yield generation.  
But in Web3, the critical boundary is not whether an agent can work.

It is whether the system can enter a defensive response path **faster than a human can react** when high-risk authorization or wallet threat exposure has already occurred.

Lobster Aegis 2.0 addresses that execution gap.

It does not merely alert users.  
It turns **threat intent into machine-executable defensive response**.

---

## Core positioning

Lobster Aegis 2.0 is not a generic wallet alert bot.

It is a reusable:

- threat detection workflow
- threat analysis workflow
- rescue order generation workflow
- constrained defensive execution workflow
- audit-ready defense logging workflow

This makes it a **threat response primitive**, not just a standalone tool.

---

## Demo scenario

This repository focuses on one minimal and realistic Web3 security scenario:

**A suspicious high-value approve event is detected for a stablecoin wallet, and Aegis automatically builds and executes a `REVOKE_APPROVAL` response.**

The scenario is intentionally narrow so that the workflow remains:

- clear
- evaluable
- reproducible
- judge-friendly

---

## Workflow

1. Monitoring wallet authorization and exposure state  
2. Detecting a suspicious approve event  
3. Claw compiling the event into a structured `Threat Summary`  
4. Building a `Rescue Order`  
5. Executing response through OKX Onchain OS  
6. Returning wallet status toward `Safe_State`  
7. Generating an `Audit Log` as **Proof of Defense**

---

## State machine

### Main path
`Monitoring → Threat_Detected → Threat_Analyzed → Rescue_Order_Built → Response_Executed → Safe_State`

### Fallback path
`Monitoring → Threat_Detected → Threat_Analyzed → Rescue_Order_Built → Response_Failed → Human_Escalation_Required`

---

## Constrained use of Claw

Claw does not hold unrestricted execution authority.

Its role is constrained to:

- threat classification
- parameter extraction
- structured threat summary output

Execution remains constrained by:

- schema validation
- state-machine-controlled response logic
- response execution constraints on OKX Onchain OS

**Claw only classifies threat intent and extracts parameters; execution remains constrained by schema validation and state-machine-controlled response logic.**

---

## Why OKX Onchain OS

Lobster Aegis 2.0 uses **OKX Onchain OS** as the execution operating layer for wallet threat response.

It is not treated as a wrapper.  
It is used as the actual response execution layer once a valid rescue order is built.

This is where detection turns into execution.

---

## Repository contents

- `docs/` — architecture, scoring alignment, reproducibility, demo script
- `prompts/` — system prompt and role prompts
- `schemas/` — threat summary, rescue order, and audit log schemas
- `mock-data/` — suspicious event, threat summary, rescue order, audit log
- `src/` — minimal TypeScript workflow implementation

---

## Quick Start

```bash
npm install
npm run dev
# Lobster Aegis 2.0

**Intent-Driven Wallet Threat Response Agent on OKX Onchain OS**

Lobster Aegis 2.0 is a reusable **threat response primitive** for agent-native wallet protection. It detects suspicious authorization or wallet exposure events, compiles structured threat summaries through **Claw**, generates executable rescue orders, and triggers constrained defensive response through **OKX Onchain OS**.

---

## Why this project exists

Most AI agents today optimize for efficiency, execution, and yield generation.  
But in Web3, the critical boundary is not whether an agent can work.

It is whether the system can enter a defensive response path **faster than a human can react** when high-risk authorization or wallet threat exposure has already occurred.

Lobster Aegis 2.0 addresses that execution gap.

It does not merely alert users.  
It turns **threat intent into machine-executable defensive response**.

---

## Core positioning

Lobster Aegis 2.0 is not a generic wallet alert bot.

It is a reusable:

- threat detection workflow
- threat analysis workflow
- rescue order generation workflow
- constrained defensive execution workflow
- audit-ready defense logging workflow

This makes it a **threat response primitive**, not just a standalone tool.

---

## Demo scenario

This repository focuses on one minimal and realistic Web3 security scenario:

**A suspicious high-value approve event is detected for a stablecoin wallet, and Aegis automatically builds and executes a `REVOKE_APPROVAL` response.**

The scenario is intentionally narrow so that the workflow remains:

- clear
- evaluable
- reproducible
- judge-friendly

---

## Workflow

1. Monitoring wallet authorization and exposure state  
2. Detecting a suspicious approve event  
3. Claw compiling the event into a structured `Threat Summary`  
4. Building a `Rescue Order`  
5. Executing response through OKX Onchain OS  
6. Returning wallet status toward `Safe_State`  
7. Generating an `Audit Log` as **Proof of Defense**

---

## State machine

### Main path
`Monitoring → Threat_Detected → Threat_Analyzed → Rescue_Order_Built → Response_Executed → Safe_State`

### Fallback path
`Monitoring → Threat_Detected → Threat_Analyzed → Rescue_Order_Built → Response_Failed → Human_Escalation_Required`

---

## Constrained use of Claw

Claw does not hold unrestricted execution authority.

Its role is constrained to:

- threat classification
- parameter extraction
- structured threat summary output

Execution remains constrained by:

- schema validation
- state-machine-controlled response logic
- response execution constraints on OKX Onchain OS

**Claw only classifies threat intent and extracts parameters; execution remains constrained by schema validation and state-machine-controlled response logic.**

---

## Why OKX Onchain OS

Lobster Aegis 2.0 uses **OKX Onchain OS** as the execution operating layer for wallet threat response.

It is not treated as a wrapper.  
It is used as the actual response execution layer once a valid rescue order is built.

This is where detection turns into execution.

---

## Repository contents

- `docs/` — architecture, scoring alignment, reproducibility, demo script
- `prompts/` — system prompt and role prompts
- `schemas/` — threat summary, rescue order, and audit log schemas
- `mock-data/` — suspicious event, threat summary, rescue order, audit log
- `src/` — minimal TypeScript workflow implementation

---

## Quick Start

```bash
npm install
npm run dev
