import { apiGet } from './apiClient.ts';
import { MeInterface } from '../interface/userRelatedInterfaces.ts';

export const meService = async (): Promise<MeInterface> => {
  const res = await apiGet<MeInterface>('/auth/me');
  return res.data;
};
