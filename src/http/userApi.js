import { jwtDecode } from 'jwt-decode';
import { $host } from './index';

export const registration = async (email, login, password) => {
  const { data } = await $host.post('api/auth/registration', { email, login, password });
  return jwtDecode(data.token);
};

export const loginFunc = async (login, password) => {
  const { data } = await $host.post('api/auth/login', { login, password });
  return jwtDecode(data.token);
};
export const change = async (email, login, password) => {
  const { data } = await $host.post('api/auth/change', { email, login, password });
  return jwtDecode(data.token);
};
