import { useState } from 'react';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export function useService<S extends (...args: any[]) => any>(service: S) {
  const [data, setData] = useState<UnwrapPromise<ReturnType<S>>>();
  const [error, setError] = useState<Error>();
  const [pending, setPending] = useState<boolean>(false);

  async function perform(
    input?: Parameters<S>[0],
    options?: Parameters<S>[1]
  ): Promise<UnwrapPromise<ReturnType<S>>> {
    try {
      setError(undefined);
      setPending(true);
      const result = await service(input, options);
      setData(result);
      return result;
    } catch (err) {
      setError(err as Error);
    } finally {
      setPending(false);
    }
  }

  return {
    data,
    error,
    pending,
    perform,
  };
}

