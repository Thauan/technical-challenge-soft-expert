import axios from '../config/axios';

const signIn = async (user: any) => {
  const response = await axios.post<any>('/login', user);
  return response;
};

const signUp = async (user: any) => {
  const response = await axios.post<any>('/register', user);
  return response;
};

export { signIn, signUp };