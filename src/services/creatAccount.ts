import { apiPost } from './apiClient.ts';
import { UserCredentialsClientInterface } from '../interface/userRelatedInterfaces.ts';
import { AxiosResponse } from 'axios';

export const createAccount = async (
  userCredentialsClientInterface: UserCredentialsClientInterface,
): Promise<AxiosResponse> => {
  const controller = new AbortController();
  return apiPost<UserCredentialsClientInterface>('/auth/register', userCredentialsClientInterface, {
    signal: controller.signal,
  })
    .then((response) => {
      response.data;
      controller.abort();
    })
    .catch((error) => {
      throw error;
    });
};
