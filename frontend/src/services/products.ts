import axios from '../config/axios';

const getProducts = async () => {
  const response = await axios.get<any>('/products_list');
  return response.data;
};

const createProduct = async (product: any) => {
  const response = await axios.post<any>('/products_create', product);
  return response.data;
};

export { getProducts, createProduct };