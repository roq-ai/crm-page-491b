import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DealInterface {
  id?: string;
  user_id?: string;
  details?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DealGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  details?: string;
}
