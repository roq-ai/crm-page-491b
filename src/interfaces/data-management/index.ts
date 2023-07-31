import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DataManagementInterface {
  id?: string;
  user_id?: string;
  details?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DataManagementGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  details?: string;
}
