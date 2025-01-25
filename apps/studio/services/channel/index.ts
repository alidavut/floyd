import create from './create';
import get from './get';
import list from './list';
import setupStripe from './setup-stripe';
import update from './update';
import verifyStripe from './verify-stripe';

export const channel = { create, get, list, setupStripe, update, verifyStripe };
