import axios from 'axios';
import queryString from 'query-string';
import { CrmProcessInterface, CrmProcessGetQueryInterface } from 'interfaces/crm-process';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCrmProcesses = async (
  query?: CrmProcessGetQueryInterface,
): Promise<PaginatedInterface<CrmProcessInterface>> => {
  const response = await axios.get('/api/crm-processes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCrmProcess = async (crmProcess: CrmProcessInterface) => {
  const response = await axios.post('/api/crm-processes', crmProcess);
  return response.data;
};

export const updateCrmProcessById = async (id: string, crmProcess: CrmProcessInterface) => {
  const response = await axios.put(`/api/crm-processes/${id}`, crmProcess);
  return response.data;
};

export const getCrmProcessById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/crm-processes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCrmProcessById = async (id: string) => {
  const response = await axios.delete(`/api/crm-processes/${id}`);
  return response.data;
};
