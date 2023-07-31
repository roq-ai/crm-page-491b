import axios from 'axios';
import queryString from 'query-string';
import { EngagementToolInterface, EngagementToolGetQueryInterface } from 'interfaces/engagement-tool';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEngagementTools = async (
  query?: EngagementToolGetQueryInterface,
): Promise<PaginatedInterface<EngagementToolInterface>> => {
  const response = await axios.get('/api/engagement-tools', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEngagementTool = async (engagementTool: EngagementToolInterface) => {
  const response = await axios.post('/api/engagement-tools', engagementTool);
  return response.data;
};

export const updateEngagementToolById = async (id: string, engagementTool: EngagementToolInterface) => {
  const response = await axios.put(`/api/engagement-tools/${id}`, engagementTool);
  return response.data;
};

export const getEngagementToolById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/engagement-tools/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEngagementToolById = async (id: string) => {
  const response = await axios.delete(`/api/engagement-tools/${id}`);
  return response.data;
};
