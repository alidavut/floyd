import create from './create';
import generateStripeOnboardingLink from './generate-stripe-onboarding-link';
import get from './get';
import list from './list';
import update from './update';
import verifyStripe from './verify-stripe';

export const channel = {
  create,
  generateStripeOnboardingLink,
  get,
  list,
  update,
  verifyStripe
};
