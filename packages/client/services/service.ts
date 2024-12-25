import { Axios } from 'axios';

export abstract class Service {
  axios: Axios;

  constructor(axios: Axios) {
    this.axios = axios;
  }
}
