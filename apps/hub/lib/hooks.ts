import { useStoreContext } from 'hacksaw-react';

export function useCurrentUser() {
  const contextMap = useStoreContext('global');
  return contextMap.users.first;
}
