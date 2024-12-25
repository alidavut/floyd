import { Head } from 'components';
import { UserObject } from '@floyd/schema/types';

interface Props {
  user: UserObject;
}

export function ProfileView({ user }: Props) {
  return (
    <div className="pt-24">
      <Head
        title={user.name}
        description={`Profile for ${user.name} on Floyd`}
      />
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold text-center mb-6 font-serif">
          {user.name}
        </h1>
        <div className="bg-white p-12 text-center rounded-sm text-bunker-950/50 mb-12">
          No events yet
        </div>
      </div>
    </div>
  )
}
