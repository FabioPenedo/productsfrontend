import { Product } from '../types/product';
import { api } from '../api';
import { useState } from 'react';

export const filteredProduct = async (productSearch?: string) => {
  const [products, setProducts] = useState<Product[]>([])
  let data = await api.getAllProducts()
  setProducts(data.products)
  return products.filter(item => item.name === productSearch)
}