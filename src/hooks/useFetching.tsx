import {useState} from 'react';

export const useFetching = (callback: () => void) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return [fetching, isLoading, error];
};