import { useQuery } from '@tanstack/react-query';
import { meService } from '../services/meService.ts';
import { MeInterface } from '../interface/userRelatedInterfaces.ts';

export const useMe = () => {
  return useQuery<MeInterface>({
    queryKey: ['me'],
    queryFn: () => meService(),
    select: ({ id, username, email }) => ({ id, username, email }),
  });
};
