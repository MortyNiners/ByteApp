import { apiPost } from './apiClient.ts';

export const addImage = async (id: string, imageData: File[]) => {
  const formData = new FormData();
  imageData.forEach((file) => {
    formData.append('image', file);
  });
  const response = await apiPost(`/image/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
