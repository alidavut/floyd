import { ReactElement } from 'react';
import { withAuth } from 'lib/authentication';
import { withLayout } from '@floyd/ui/layout';
import { Head, Layout } from 'components';
import { Button, Card } from '@floyd/ui/components';
import { services } from 'services';
import { PiInstagramLogo, PiXLogo } from 'react-icons/pi';

function Home(): ReactElement {
  async function handleLogout() {
    await services.auth.logout();
    window.location.href = '/login';
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <Head
        title="Hub"
      />
      <div className="container">
        <div className="max-w-md mx-auto">
          <Card>
            <Card.Body>
              <p className="font-bold text-xl mb-3">You're In, Frontier! 🎉</p>
              <p className="mb-6">
                Thanks for signing up for early access! Your account is all set, and we’ll keep you in the loop on our
                latest features and updates. Stay tuned for more—exciting things are coming your way!
              </p>
              <div className="space-y-3">
                <a href="https://x.com/heyfloydso" target="_blank" rel="noreferrer" className="block">
                  <Button fullWidth>
                    <span className="flex items-center justify-center space-x-2">
                      <PiXLogo className="w-5 h-5" />
                      <span>
                        Follow us on X
                      </span>
                    </span>
                  </Button>
                </a>
                <a href="https://instagram.com/heyfloydso" target="_blank" rel="noreferrer" className="block">
                  <Button fullWidth>
                    <span className="flex items-center justify-center space-x-2">
                      <PiInstagramLogo className="w-5 h-5" />
                      <span>
                        Follow us on Instagram
                      </span>
                    </span>
                  </Button>
                </a>
                <hr />
                <Button onClick={handleLogout} fullWidth>
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default withLayout(Layout)(withAuth(Home));
