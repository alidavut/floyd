import cx from 'classnames';
import { Head } from 'components';
import { GetStarted } from 'pages/home/partials';
import { PiCaretDownBold, PiConfettiBold, PiMoneyBold, PiMoneyWavy, PiPiggyBank, PiPiggyBankBold, PiTicketBold } from 'react-icons/pi';

export function PricingView() {
  return (
    <div>
      <Head
        title="Pricing"
      />
      <div className="relative pt-24 pb-18 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bottom-1/4 bg-bunker-950" />
        <div className="relative container">
          <div className="max-w-3xl mx-auto">
            <div className="md:text-center">
              <h1 className="text-[1.75rem] md:text-[3.375rem] md:leading-[4rem] font-medium font-serif mb-6 text-white">
                Your Event, Your Way.<br />Our Pricing, Nice & Easy.
              </h1>
              <p className="md:text-[1.25rem] leading-[2rem] mb-12 md:mb-18 text-white/70 max-w-xl mx-auto">
                Because fueling your passions shouldn’t feel like a math equation. At Floyd, we keep our pricing
                straightforward—no hidden fees, no guesswork.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <PricingCard
                title="For free tickets"
                fee="Free"
                description="Host free events without spending a cent. Whether it’s a community meetup, a charity drive,
                  or just a hangout with friends—Floyd never charges you a fee."
                className="bg-pink-200"
                icon={PiConfettiBold}
              />
              <PricingCard
                title="For paid tickets"
                fee="10% + $0.50"
                description="For paid events, it’s simply 10% plus 50¢ per ticket sold. No surprise extras. You earn
                  revenue; we earn a small slice. It’s that transparent."
                className="bg-green-200"
                icon={PiPiggyBankBold}
              />
            </div>
          </div>
        </div>
      </div>
      <GetStarted />
    </div>
  );
}

function PricingCard({ title, fee, description, className, icon }) {
  const Icon = icon;

  return (
    <div>
      <div className="relative pr-1.5 pb-1.5">
        <div className="bg-bunker-950/20 absolute bottom-0 right-1.5 left-0 top-5 rounded-sm -rotate-[1.5deg]" />
        <div className="bg-bunker-950 absolute top-1.5 left-1.5 right-0 bottom-0 rounded-sm rotate-[1.5deg]" />
        <div className={cx('relative p-6 rounded-sm border-2 border-bunker-950', className)}>
          <p className="text-[1.175rem] leading-none font-semibold flex items-center space-x-1.5 mb-3">
            <span>{title}</span>
            <Icon className="inline-block w-[1.325rem] h-[1.325rem]" />
          </p>
          <h4 className="text-[2.5rem] leading-none font-bold mb-[1.125rem] font-serif">
            {fee}
          </h4>
          <p className="text-[0.975rem] leading-[1.5rem] text-bunker-950/85 italic">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
