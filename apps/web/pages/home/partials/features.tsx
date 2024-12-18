import cx from 'classnames';
import { PiBezierCurve, PiCashRegister, PiFiles, PiHeadset, PiReceipt, PiStackPlus } from 'react-icons/pi';

export function Features() {
  return (
    <div className="bg-gray-950 relative">
      <div className="circles-bg absolute inset-0" />
      <div className="text-white relative">
        <div className="lg:px-32 rounded-xl relative">
          <div className="container">
            <div className="lg:border-l border-dashed border-gray-700 py-20 lg:py-32">
              <h3 className="text-3xl lg:text-[2.625rem] font-bold text-center mb-3 mx-auto leading-tight">
                Craft a Superior Booking Experience
              </h3>
              <p className="lg:text-[1.15rem] font-medium text-gray-300 max-w-2xl mb-12 mx-auto text-center lg:mb-24">
                <span className="block mb-3">
                  Floyd provides your application with a robust suite of APIs designed to manage complicated
                  scheduling and pricing effortlessly.
                </span>
                <span className="border-b border-teal-500 text-teal-500">
                  Built by developers, for developers.
                </span>
              </p>
              <div className="grid md:grid-cols-3 gap-9 lg:gap-12">
                <Card
                  title="Dynamic Inventory Management"
                  description="Gain fine-tuned control over your inventory and resource availability, all through a
                    single API call."
                  icon={PiCashRegister}
                />
                <Card
                  title="Intelligent Pricing Engine"
                  description="Implement dynamic pricing strategies and complex calculations to maximize revenue and
                    flexibility."
                  icon={PiReceipt}
                />
                <Card
                  title="Advanced Rule Management"
                  description="Configure intricate rules for availability, discounts, and other booking conditions, ensuring
                    precise control over your offerings."
                  icon={PiBezierCurve}
                />
                <Card
                  title="Effortless Scalability"
                  description="Built to grow with you, Floyd's infrastructure effortlessly handles increased demand,
                    ensuring consistent performance."
                  icon={PiStackPlus}
                />
                <Card
                  title="Comprehensive API Documentation"
                  description="Access extensive, developer-focused documentation and code samples to integrate seamlessly
                    and quickly."
                  icon={PiFiles}
                />
                <Card
                  title="Expert Developer Support"
                  description="Get expert assistance when you need it from our team who understand the nuances of building
                    and scaling booking systems."
                  icon={PiHeadset}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({ title, description, icon }) {
  const Icon = icon;

  return (
    <div className="border-ls border-dashed border-white/20 lg:pl-9 py-6">
      <div className="relative inline-block mb-6">
        <div
          className="border border-dashed border-gray-700 absolute w-12 h-12 -bottom-1.5 -right-1.5 rounded-md rotate-6"
        />
        <div className={cx(
            'w-12 h-12 text-violet-400 flex items-center justify-center rounded-md bg-gray-800 relative'
          )}>
          <Icon className={cx('w-[1.625rem] h-[1.625rem]')} />
        </div>
      </div>
      <h4 className="font-bold text-[1.2rem] mb-3 leading-none">
        {title}
      </h4>
      <p className="text-gray-300 text-[1rem] leading-normal">
        {description}
      </p>
    </div>
  )
}
