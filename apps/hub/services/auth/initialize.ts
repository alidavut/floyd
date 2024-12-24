import { createService } from '../service';
import clientCookie from 'js-cookie';
import { parse as parseCookie } from 'cookie';

export default createService({
  async perform({ storeMap, pageContext, axios }) {
    let accessToken: string | undefined;

    if (pageContext?.req) {
      accessToken = parseCookie(pageContext.req.headers.cookie || '').access_token;
    } else {
      accessToken = clientCookie.get('access_token');
    }

    if (accessToken) {
      storeMap?.state.set({ accessToken });

      try {
        const { data } = await axios.get('/users/me', { headers: { authorization: `Bearer ${accessToken}` } });
        storeMap?.users.context('global').put(data);
      } catch (error) {
        storeMap?.state.set({ accessToken: undefined });
      }
    }
  }
});
