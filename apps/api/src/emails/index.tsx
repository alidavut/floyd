import { OTPEmail } from './templates/otp-email';
import { WelcomeEmail } from './templates/welcome-email';
import { createRenderer } from './renderer';

export const renderOTPEmail = createRenderer(OTPEmail);
export const renderWelcomeEmail = createRenderer(WelcomeEmail);
