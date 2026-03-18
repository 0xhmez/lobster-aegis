import { AegisState } from "./types";

const transitions: Record<AegisState, AegisState[]> = {
  Monitoring: ["Threat_Detected"],
  Threat_Detected: ["Threat_Analyzed"],
  Threat_Analyzed: ["Rescue_Order_Built"],
  Rescue_Order_Built: ["Response_Executed", "Response_Failed"],
  Response_Executed: ["Safe_State"],
  Response_Failed: ["Human_Escalation_Required"],
  Safe_State: [],
  Human_Escalation_Required: []
};

export class AegisStateMachine {
  private state: AegisState = "Monitoring";

  getState(): AegisState {
    return this.state;
  }

  transition(next: AegisState): AegisState {
    if (!transitions[this.state].includes(next)) {
      throw new Error(`Invalid transition: ${this.state} -> ${next}`);
    }
    this.state = next;
    return this.state;
  }
}
