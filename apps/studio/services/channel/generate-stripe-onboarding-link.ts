import { InputError } from '../errors';
import { createService } from '../service';
import { channel } from '@floyd/schema/inputs';

export default createService({
  inputSchema: channel.generateStripeOnboardingLinkSchema,

  async perform({ input, axios }) {
    try {
      const { data }: { data: string } = await axios.post(`/channels/${input.channelId}/stripe_onboarding_link`);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
