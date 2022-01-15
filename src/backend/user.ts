import { axiosNoAuth } from './base';
import TokenStorage from './token';

export interface UserAuthResponse {
  token: string;
}

export default function authorizeUser(login: string, password: string): Promise<unknown> {
  return axiosNoAuth.post<UserAuthResponse>('/api/auth', { login, password })
    .then((response) => TokenStorage.setToken(response.data.token));
}
