import axios from '../config/axios';

const signIn = async (user: any) => {
  const response = await axios.post<any>('/login', user);
  return response.data;
};

const signUp = async (user: any) => {
  const response = await axios.post<any>('/register', user);
  return response.data;
};

export { signIn, signUp };