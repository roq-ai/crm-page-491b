import axios from 'axios';
import queryString from 'query-string';
import { LeadInterface, LeadGetQueryInterface } from 'interfaces/lead';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLeads = async (query?: LeadGetQueryInterface): Promise<PaginatedInterface<LeadInterface>> => {
  const response = await axios.get('/api/leads', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLead = async (lead: LeadInterface) => {
  const response = await axios.post('/api/leads', lead);
  return response.data;
};

export const updateLeadById = async (id: string, lead: LeadInterface) => {
  const response = await axios.put(`/api/leads/${id}`, lead);
  return response.data;
};

export const getLeadById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/leads/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLeadById = async (id: string) => {
  const response = await axios.delete(`/api/leads/${id}`);
  return response.data;
};
