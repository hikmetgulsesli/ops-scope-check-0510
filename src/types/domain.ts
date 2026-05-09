export interface InspectionRecord {
  id: string;
  resourceName: string;
  environment: 'production' | 'staging' | 'development' | 'dr';
  status: 'pending' | 'running' | 'completed' | 'failed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface SystemMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  threshold: number;
  status: 'healthy' | 'warning' | 'critical';
}

export interface UserPreferences {
  criticalAlerts: boolean;
  darkMode: boolean;
  compactView: boolean;
}

export type AppRoute =
  | 'dashboard'
  | 'insights'
  | 'settings'
  | 'profile'
  | 'create'
  | 'record'
  | 'error'
  | 'getting-started';
