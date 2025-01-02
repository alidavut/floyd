import { Head } from 'components';
import { SpaceObject } from '@floyd/schema/types';

interface Props {
  space: SpaceObject;
}

export function SpaceHomeView({ space }: Props) {
  return (
    <div className="pt-24">
      <Head
        title={space.name}
        description={`Space for ${space.name} on Floyd`}
      />
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold text-center mb-6 font-serif">
          {space.name}
        </h1>
        <div className="bg-white p-12 text-center rounded-sm text-bunker-950/50 mb-12">
          No events yet
        </div>
      </div>
    </div>
  )
}
