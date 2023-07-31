import axios from 'axios';
import queryString from 'query-string';
import { DealInterface, DealGetQueryInterface } from 'interfaces/deal';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDeals = async (query?: DealGetQueryInterface): Promise<PaginatedInterface<DealInterface>> => {
  const response = await axios.get('/api/deals', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDeal = async (deal: DealInterface) => {
  const response = await axios.post('/api/deals', deal);
  return response.data;
};

export const updateDealById = async (id: string, deal: DealInterface) => {
  const response = await axios.put(`/api/deals/${id}`, deal);
  return response.data;
};

export const getDealById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/deals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDealById = async (id: string) => {
  const response = await axios.delete(`/api/deals/${id}`);
  return response.data;
};
