import { ListStore, ObjectStore, StoreMap as StoreMapType, createListStore, createObjectStore, createStoreMap } from 'hacksaw';
import { EventObject, SpaceObject, UserObject } from '@floyd/schema/types';

export type StoreMap = StoreMapType<{
  events: ListStore<EventObject>;
  users: ListStore<UserObject>;
  spaces: ListStore<SpaceObject>;
  state: ObjectStore<Record<string, any>>;
}>;

let store: StoreMap;

export function getStore(initialData?: string): StoreMap {
  if (!store) createStore(initialData);
  return store;
}

export function createStore(initialData?: string): StoreMap {
  store = createStoreMap({
    events: createListStore<EventObject>(),
    users: createListStore<UserObject>(),
    spaces: createListStore<SpaceObject>(),
    state: createObjectStore()
  });

  initialData && store?.import?.(initialData);

  if (typeof window !== 'undefined') {
    window['store'] = store;
  }

  return store;
};
