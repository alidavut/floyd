import { ticket } from '@floyd/schema/inputs';
import { TicketInitiationObject } from '@floyd/schema/types';
import { Axios } from 'axios';


export function createTicketService(axios: Axios) {
  return {
    async initiate(input: ticket.initiateParams): Promise<TicketInitiationObject> {
      const { data } = await axios.post('/tickets/initiate', input);
      return data;
    }
  }
}
