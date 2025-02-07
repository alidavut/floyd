import { createHTTPService } from 'services/service';
import sendEmailVerification from './internal/send-email-verification';

export default createHTTPService({
  id: 'user.send_email_verification',

  async authorize({ auth }) {
    return auth.ok;
  },

  async perform({ auth }) {
    await sendEmailVerification({ userId: auth.user.id, email: auth.user.email, firstName: auth.user.firstName });
  }
});
