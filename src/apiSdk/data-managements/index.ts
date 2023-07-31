import axios from 'axios';
import queryString from 'query-string';
import { DataManagementInterface, DataManagementGetQueryInterface } from 'interfaces/data-management';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDataManagements = async (
  query?: DataManagementGetQueryInterface,
): Promise<PaginatedInterface<DataManagementInterface>> => {
  const response = await axios.get('/api/data-managements', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDataManagement = async (dataManagement: DataManagementInterface) => {
  const response = await axios.post('/api/data-managements', dataManagement);
  return response.data;
};

export const updateDataManagementById = async (id: string, dataManagement: DataManagementInterface) => {
  const response = await axios.put(`/api/data-managements/${id}`, dataManagement);
  return response.data;
};

export const getDataManagementById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/data-managements/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDataManagementById = async (id: string) => {
  const response = await axios.delete(`/api/data-managements/${id}`);
  return response.data;
};
