import axios, { AxiosResponse } from 'axios';
import { Node, Edge } from './model'

const apiService = {
  getNodes: async (): Promise<Node[]> => {
    try {
      const response: AxiosResponse<Node[]> = await axios.get(`${process.env.DASHBOARD_BACKEND_URL}/nodes`);
      return response.data || [];
    } catch (error) {
      console.error('Error fetching nodes:', error);
      throw error;
    }
  },
  
  getEdges: async (): Promise<Edge[]> => {
    try {
      const response: AxiosResponse<Edge[]> = await axios.get(`${process.env.DASHBOARD_BACKEND_URL}/edges`);
      return response.data || [];
    } catch (error) {
      console.error('Error fetching edges:', error);
      throw error;
    }
  },
};

export default apiService;
