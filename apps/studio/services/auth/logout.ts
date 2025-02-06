import { createService } from 'services/service';
import clientCookie from 'js-cookie';

export default createService({
  async perform() {
    clientCookie.remove('access_token');
  }
});
