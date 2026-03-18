import { AegisStateMachine } from "./stateMachine";
import threatSummary from "../mock-data/threat_summary.json";
import rescueOrder from "../mock-data/rescue_order.json";
import auditLog from "../mock-data/audit_log.json";

const machine = new AegisStateMachine();

console.log("State:", machine.getState());
machine.transition("Threat_Detected");
machine.transition("Threat_Analyzed");
machine.transition("Rescue_Order_Built");
machine.transition("Response_Executed");
machine.transition("Safe_State");

console.log("Threat Summary:", threatSummary);
console.log("Rescue Order:", rescueOrder);
console.log("Audit Log:", auditLog);
console.log("Final State:", machine.getState());
