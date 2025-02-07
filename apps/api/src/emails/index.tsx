import { OTPEmail } from './templates/otp-email';
import { VerificationEmail } from './templates/verification-email';
import { WelcomeEmail } from './templates/welcome-email';
import { createRenderer } from './renderer';

export const renderOTPEmail = createRenderer(OTPEmail);
export const renderVerificationEmail = createRenderer(VerificationEmail);
export const renderWelcomeEmail = createRenderer(WelcomeEmail);
