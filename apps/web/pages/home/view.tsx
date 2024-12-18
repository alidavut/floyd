import { Head } from 'components';
import { Cover, Features, GetStarted, UseCases } from './partials';

export function HomeView() {
  return (
    <div>
      <Head
        title="Floyd - Booking infrastructure made for developers"
        description="Floyd provides your application with a robust suite of APIs designed to manage complicated
          scheduling and pricing effortlessly."
        titlePure
      />
      <Cover />
      <Features />
      <UseCases />
      <GetStarted />
    </div>
  )
}
