import { ticket } from '@floyd/schema/inputs';
import { Service } from './service';
import { TicketSetupObject } from '@floyd/schema/types';

export class TicketService extends Service {
  async setup(input: ticket.setupParams): Promise<TicketSetupObject> {
    const { data } = await this.axios.post('/tickets/setup', input);
    return data;
  }
}
