import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EngagementToolInterface {
  id?: string;
  user_id?: string;
  details?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EngagementToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  details?: string;
}
