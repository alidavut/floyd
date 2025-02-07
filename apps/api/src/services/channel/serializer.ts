import { ChannelObject } from '@floyd/schema/types';
import { Serializer } from '../serializer';
import { Channel } from 'entities';

export class ChannelSerializer extends Serializer<Channel, ChannelObject> {
  async serialize() {
    return {
      id: this.object.id,
      handle: this.object.handle,
      name: this.object.name,
      countryCode: this.object.countryCode,
      stripeAccountId: this.object.stripeAccountId,
      chargesEnabled: this.object.chargesEnabled,
      payoutsEnabled: this.object.payoutsEnabled,
      createdAt: this.object.createdAt.toISOString(),
      updatedAt: this.object.updatedAt.toISOString()
    };
  }
}
