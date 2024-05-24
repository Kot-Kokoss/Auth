import { jwtDecode } from 'jwt-decode';
import { $host } from './index';

export const registration = async (login, email, password) => {
  const role = login === 'admin' ? 'admin' : 'user';
  const { data } = await $host.post('api/user/registration', { login, email, password, role });
  return jwtDecode(data.token);
};

export const loginFunc = async (login, password) => {
  const { data } = await $host.post('api/user/login', { login, password });
  return jwtDecode(data.token);
};
export const change = async (login, email, password) => {
  const { data } = await $host.post('api/user/change', { login, email, password });
  return jwtDecode(data.token);
};
