import { apiPost } from './apiClient.ts';
import { UserCredentialsClientInterface } from '../interface/userRelatedInterfaces.ts';

export const logInUser = async (userCredentialsClientInterface: UserCredentialsClientInterface): Promise<void> => {
  const controller = new AbortController();
  return apiPost<UserCredentialsClientInterface>('/auth/login', userCredentialsClientInterface, {
    signal: controller.signal,
  })
    .then((res) => {
      res.data;
      controller.abort();
    })
    .catch((err) => {
      throw err;
    });
};
