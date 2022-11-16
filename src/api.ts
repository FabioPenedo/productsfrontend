import axios from 'axios';

const baseURL = 'http://localhost'

const axiosInstance = axios.create({
    baseURL: 'http://localhost'
});

export const api = {
  addNewProduct: async (name: string, price: string, inventory: string, description: string) => {
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      body: new URLSearchParams({
        name,
        price,
        inventory,
        description
    })
    }
    let response = await fetch(`${baseURL}/register`, data)
    return response.json()
    //axiosInstance.post('/register', { name, price, inventory, description });
    //return response.data
  },
  getAllProducts: async () => {
    let response = await axiosInstance.get('/list');
    return response.data
  },
  updateProductData: async (id: number, name: string, price: number, inventory: number, description: string) => {
    let response = await axiosInstance.put(`/update/${id}`, { name, price, inventory, description });
    return response.data
  },
  deleteTheProduct: async (id: number) => {
    let response = await axiosInstance.delete(`/delete/${id}`, {data: { id }})
    return response.data
  }
};
  