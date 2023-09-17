import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { ITask } from '../../types/schemas/task/task';
import { getTasks } from './apiTasks';

export function useTasks() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // PAGINATION
  const options = Object.fromEntries([...searchParams]);
  const page = options?.page ? Number(options.page) : 1;

  // QUERY
  const { isLoading, data, error } = useQuery({
    queryKey: ['bookings', options],
    queryFn: () => getTasks<ITask[]>(options),
    retry: false,
  });

  if (!data) {
    // Verificar se data é undefined
    return { isLoading, error, data: undefined }; // Trate data como possivelmente undefined
  }

  // PRE-FETCHING
  const pageCount = Math.ceil(data.count / 10);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', page + 1],
      queryFn: () => getTasks({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', page - 1],
      queryFn: () => getTasks({ page: page - 1 }),
    });

  return { isLoading, error, data };
}
