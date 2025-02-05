import Router from 'next/router';
import { isBrowser } from '@floyd/ui/lib/is-browser';
import { NextPageContext } from 'next/types';

export function redirect(path: string, res: NextPageContext['res']) {
  if (isBrowser) {
    Router.push(path);
  } else {
    res.writeHead(301, {
      Location: path,
      'Cache-Control': 'private, no-cache, no-store, must-revalidate',
      Expires: '-1',
      Pragma: 'no-cache',
    });

    res.end();
  }
}
