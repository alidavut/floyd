import { withLayout } from '@floyd/ui/layout';
import { ProfileView } from './view';
import { apiClient } from 'lib/client';
import { UserObject } from '@floyd/schema/types';
import { ProfileLayout } from 'components/profile-layout/profile-layout';

function ProfileHome({ user }: { user: UserObject }) {
  return (
    <ProfileView
      user={user}
    />
  )
}

ProfileHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const user = await apiClient.user.get({ id: handle });

  return { user };
};

export default withLayout(ProfileLayout)(ProfileHome);
