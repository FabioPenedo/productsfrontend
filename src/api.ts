import axios from 'axios';

//const baseURL = 'http://localhost'

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
  updateProductData: async (id: number, name: string, price: number, inventory: number, description: string) => {
    try {
      let response = await axiosInstance.put(`/update/${id}`,  { id, name, price, inventory, description } );
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
  