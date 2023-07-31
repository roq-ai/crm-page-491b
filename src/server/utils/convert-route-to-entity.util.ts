const mapping: Record<string, string> = {
  'automation-features': 'automation_feature',
  'crm-processes': 'crm_process',
  'data-managements': 'data_management',
  deals: 'deal',
  'engagement-tools': 'engagement_tool',
  leads: 'lead',
  organizations: 'organization',
  'performance-evaluations': 'performance_evaluation',
  'sales-pipelines': 'sales_pipeline',
  'support-systems': 'support_system',
  tasks: 'task',
  'time-trackings': 'time_tracking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
