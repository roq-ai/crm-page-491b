interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Sales Representative', 'Support Staff', 'Manager'],
  tenantName: 'Organization',
  applicationName: 'CRM Page',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
