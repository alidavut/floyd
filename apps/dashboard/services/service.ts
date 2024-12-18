import { ZodType, infer as ZodInfer, ZodNull, ZodVoid } from 'zod';
import { InputError, ServiceError } from './errors';
import { StoreMap, getStore } from 'store';
import { StoreContextMap, createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { NextPageContext } from 'next';
import axios, { Axios } from 'axios';
import clientCookie from 'js-cookie';
import { useState } from 'react';
import isBrowser from '@floyd/ui/lib/is-browser';

export interface ServiceDefinition<Input extends ZodType, Output> {
  inputSchema?: Input;
  perform: (args: ServiceArgs<Input>) => Promise<Output>;
}

export interface ServiceArgs<Input extends ZodType> {
  input: ZodInfer<Input>;
  storeMap?: StoreMap;
  contextMap?: StoreContextMap<StoreMap>;
  pageContext?: NextPageContext;
  axios: Axios;
}

export interface ServiceOptions {
  pageContext?: NextPageContext;
  storeMap?: StoreMap;
  contextMap?: StoreContextMap<StoreMap>;
}

export function createService<Output, Input extends ZodType = ZodNull | ZodVoid>
  (serviceDefinition: ServiceDefinition<Input, Output>) {
  return async (inputArgs: ZodInfer<Input>, options?: ServiceOptions): Promise<Output> => {
    let input: ZodInfer<Input> = null;

    try {
      if (serviceDefinition.inputSchema) {
        input = await serviceDefinition.inputSchema.parseAsync(inputArgs);
      }
    } catch (error) {
      throw new InputError(error.issues);
    }

    const storeMap = options?.storeMap || options?.contextMap?.storeMap || getStore();

    const args = {
      input: input,
      storeMap,
      contextMap: options?.contextMap || createStoreContextMap(storeMap, 'undefined'),
      pageContext: options?.pageContext,
      axios: createAxios(storeMap)
    };

    try {
      return serviceDefinition.perform(args);
    } catch (error) {
      throw error;
    }
  }
}

export function useService<S extends ReturnType<typeof createService>>(service: S) {
  const [error, setError] = useState<ServiceError>();
  const [loading, setLoading] = useState<boolean>(false);
  const contextMap = useStoreContext('global');

  async function perform<P extends Parameters<S>>(input?: P[0], options?: P[1]): Promise<ReturnType<S>> {
    try {
      options = options || {};
      options.contextMap = options.contextMap || contextMap;
      setError(undefined);
      setLoading(true);
      return await service(input, options) as ReturnType<S>;
    } catch(error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { perform, error, loading };
}

function createAxios(storeMap?: StoreMap) {
  const accessToken = isBrowser ? clientCookie.get('access_token') : storeMap?.state.get('accessToken');

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  });
}
