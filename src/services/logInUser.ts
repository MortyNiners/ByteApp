import { apiPost } from './apiClient.ts';
import { UserCredentialsClientInterface, UserLogInInterface } from '../interface/userRelatedInterfaces.ts';
import { AxiosResponse } from 'axios';

export const logInUser = async (
  userCredentialsClientInterface: UserCredentialsClientInterface,
): Promise<UserLogInInterface> => {
  const controller = new AbortController();
  const response: AxiosResponse<UserLogInInterface> = await apiPost<UserLogInInterface>(
    '/auth/login',
    userCredentialsClientInterface,
    { signal: controller.signal },
  );
  return response.data;
};
