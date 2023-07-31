import axios from 'axios';
import queryString from 'query-string';
import { SupportSystemInterface, SupportSystemGetQueryInterface } from 'interfaces/support-system';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSupportSystems = async (
  query?: SupportSystemGetQueryInterface,
): Promise<PaginatedInterface<SupportSystemInterface>> => {
  const response = await axios.get('/api/support-systems', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSupportSystem = async (supportSystem: SupportSystemInterface) => {
  const response = await axios.post('/api/support-systems', supportSystem);
  return response.data;
};

export const updateSupportSystemById = async (id: string, supportSystem: SupportSystemInterface) => {
  const response = await axios.put(`/api/support-systems/${id}`, supportSystem);
  return response.data;
};

export const getSupportSystemById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/support-systems/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSupportSystemById = async (id: string) => {
  const response = await axios.delete(`/api/support-systems/${id}`);
  return response.data;
};
