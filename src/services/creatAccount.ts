import { apiPost } from './apiClient.ts';

interface UserCredentialsClientInterface {
  email: string;
  username: string;
  password: string;
}

export const createAccount = (userCredentialsClientInterface: UserCredentialsClientInterface): Promise<void> => {
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
