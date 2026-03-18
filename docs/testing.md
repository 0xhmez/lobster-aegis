# Testing

## Purpose

This document explains how Lobster Aegis 2.0 can be tested at the workflow level without requiring real asset movement.

## What can be tested locally

A local or mocked environment can replay the following steps:

1. suspicious approve event ingestion
2. threat summary generation
3. rescue order construction
4. state-machine-controlled transition flow
5. audit log generation

## Why local testing matters

In wallet security systems, the logic layer and the final onchain execution layer should be separated during early testing.

This allows developers to validate:

- threat classification
- parameter extraction
- response construction
- fallback transitions
- defense logging

without relying on real gas spending or production wallet risk.

## Suggested local test flow

- load `mock-data/suspicious_approve_event.json`
- generate `Threat Summary`
- build `Rescue Order`
- run the state machine:
  `Monitoring → Threat_Detected → Threat_Analyzed → Rescue_Order_Built → Response_Executed → Safe_State`
- output `audit_log.json`

## Adversarial execution note

In real onchain conditions, successful defensive response may depend on:

- network congestion
- priority fee strategy
- transaction delivery path
- response timing under attack conditions

For this reason, Lobster Aegis 2.0 can be extended with:

- adaptive priority fee control
- protected transaction routing
- escalation policies for congested or adversarial environments

## Scope

This repository demonstrates the protocol workflow clearly and reproducibly.

It does not claim perfect real-world execution under all network conditions.
Instead, it defines a constrained and testable threat-response architecture.
