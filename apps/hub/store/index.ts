import { ListStore, ObjectStore, StoreMap as StoreMapType, createListStore, createObjectStore, createStoreMap } from 'hacksaw';
import { UserObject } from '@floyd/schema/types';

export type StoreMap = StoreMapType<{
  users: ListStore<UserObject>;
  state: ObjectStore<Record<string, any>>;
}>;

let store: StoreMap;

export function getStore(initialData?: string): StoreMap {
  if (!store) createStore(initialData);
  return store;
}

export function createStore(initialData?: string): StoreMap {
  store = createStoreMap({
    users: createListStore<UserObject>(),
    state: createObjectStore()
  });

  initialData && store?.import?.(initialData);

  if (typeof window !== 'undefined') {
    window['store'] = store;
  }

  return store;
};
