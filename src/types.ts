export type AegisState =
  | "Monitoring"
  | "Threat_Detected"
  | "Threat_Analyzed"
  | "Rescue_Order_Built"
  | "Response_Executed"
  | "Response_Failed"
  | "Safe_State"
  | "Human_Escalation_Required";

export interface ThreatSummary {
  threat_type: string;
  threat_level: string;
  wallet_address: string;
  asset_symbol: string;
  estimated_exposure: string;
  suspicious_contract: string;
  trigger_event: string;
  reasoning: string[];
  recommended_action: string;
  execution_priority: string;
  requires_human_confirmation: boolean;
  safe_target_address: string;
  audit_tags: string[];
}

export interface RescueOrder {
  order_id: string;
  response_action: string;
  wallet_address: string;
  target_contract: string;
  asset_symbol: string;
  priority: string;
  execution_layer: string;
  intent_compiler: string;
  reason: string;
  safe_target_address: string;
  status: string;
}
