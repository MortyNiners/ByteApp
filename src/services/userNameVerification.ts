import { apiGet } from './apiClient.ts';
import { UsernamePromiseInterface, UsernameVerificationInterface } from '../interface/userRelatedInterfaces.ts';
import { AxiosResponse } from 'axios';

export const userNameVerification = async ({
  username,
}: UsernameVerificationInterface): Promise<UsernamePromiseInterface> => {
  const controller = new AbortController();
  const response: AxiosResponse<UsernamePromiseInterface> = await apiGet<UsernamePromiseInterface>(
    `/auth/username/${username}`,
    { signal: controller.signal },
  );
  return response.data;
};
