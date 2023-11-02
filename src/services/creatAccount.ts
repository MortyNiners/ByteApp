import { apiPost } from './apiClient.ts';
import { UserCredentialsClientInterface } from '../interface/userRelatedInterfaces.ts';

export const createAccount = async (
  userCredentialsClientInterface: UserCredentialsClientInterface,
): Promise<UserCredentialsClientInterface> => {
  const controller = new AbortController();
  const response = await apiPost<UserCredentialsClientInterface>('/auth/register', userCredentialsClientInterface, {
    signal: controller.signal,
  });
  return response.data;
};
