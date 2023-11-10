import { apiPost } from './apiClient.ts';

export const addImage = async (data: { userId: string }, imageData: File[]) => {
  const formData = new FormData();
  imageData.forEach((file) => {
    formData.append('image', file);
  });
  const response = await apiPost(`/image/${data.userId}`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
  return response.data;
};
