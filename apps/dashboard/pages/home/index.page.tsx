import { ReactElement } from 'react';
import { withAuth } from 'lib/authentication';
import { withLayout } from '@floyd/ui/layout';
import { Head, Layout } from 'components';
import { Button, Card } from '@floyd/ui/components';
import { services } from 'services';

function Home(): ReactElement {
  async function handleLogout() {
    await services.auth.logout();
    window.location.href = '/login';
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <Head
        title="Dashboard"
      />
      <div className="container">
        <div className="max-w-md mx-auto">
          <Card>
            <Card.Body>
              <p className="font-bold text-lg mb-2">You're In! 🎉</p>
              <p className="mb-8">
                Thanks for signing up for early access! Your account is all set, and we’ll keep you in the loop on our
                latest features and updates. Stay tuned for more—exciting things are coming your way!
              </p>
              <Button onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default withLayout(Layout)(withAuth(Home));
