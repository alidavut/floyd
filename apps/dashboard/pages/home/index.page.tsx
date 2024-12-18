import { ReactElement } from 'react';
import { withAuth } from 'lib/authentication';
import { withLayout } from '@floyd/ui/layout';
import { Layout } from 'components';
import { Button, Card } from '@floyd/ui/components';
import { services } from 'services';

function Home(): ReactElement {
  async function handleLogout() {
    await services.auth.logout();
    window.location.href = '/login';
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="container">
        <div className="max-w-md mx-auto">
          <Card>
            <Card.Body>
              <p className="font-bold text-lg mb-2">Welcome to Floyd!</p>
              <p className="mb-8">
                You don't have any account yet. Please contact us to create one.
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
