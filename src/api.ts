import axios from 'axios';
import { json } from 'react-router-dom';

const axiosInstance = axios.create({baseURL: 'http://localhost'});

export const api = {
  addNewProduct: async (name: string, price: string, inventory: string, description: string) => {
    try {
      let response = await axiosInstance.post('/register', new URLSearchParams({ name, price, inventory, description }));
      return response.data
    } catch (error) {
      console.error
    }
  },
  getAllProducts: async () => {
    try {
      let response = await axiosInstance.get('/list');
      return response.data
    } catch (error) {
      console.error
    }
  },
  getProductsById: async (id: string | undefined) => {
    try {
      let response = await axiosInstance.get(`/list/${id}`)
      return response.data
    } catch (error) {
      console.error
    }
  },
  updateProductData: async (id: string, name: string, price: string, inventory: string, description: string) => {
    try {
      let response = await axiosInstance.put(`/uptade/${id}`, new URLSearchParams( { name, price, inventory, description } ));
      return response.data
    } catch (error) {
      console.error
    }
  },
  deleteTheProduct: async (id: number) => {
    try {
      let response = await axiosInstance.delete(`/delete/${id}`, {data: { id }})
      return response.data
    } catch (error) {
      console.error
    }
    
  }
};
  