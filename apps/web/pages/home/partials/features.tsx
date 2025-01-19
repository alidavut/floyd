import cx from 'classnames';
import image1 from './feature-1.jpg';
import image2 from './feature-2.jpg';
import image3 from './feature-3.jpg';
import image4 from './feature-4.jpg';
import image5 from './feature-5.jpg';
import image6 from './feature-6.jpg';
import border from './border.svg';

const cards = [
  {
    title: 'Host live experiences effortlessly',
    description: 'Go live with ease. Whether it’s a workshop, concert, or Q&A, Floyd makes hosting smooth and simple.',
    image: image1
  },
  {
    title: 'Sell tickets and get paid fast',
    description: 'Set your ticket price, sell to your audience, and get payouts right after your event ends.',
    image: image2
  },
  {
    title: 'Keep your audience engaged',
    description: `Use live chat and reactions to connect with your audience in real time and make every moment interactive.`,
    image: image3
  },
  {
    title: 'Earn more with live tips',
    description: `Let your audience send tips during your event—perfect for creators and performers who thrive on live energy.`,
    image: image4
  },
  {
    title: 'Focus on your event, not the tech',
    description: `We handle streaming, ticketing, and payments, so you can focus on creating an unforgettable experience.`,
    image: image5
  },
  {
    title: 'Built for bold ideas',
    description: `From intimate workshops to global performances, Floyd gives you the tools to turn your vision into reality, no matter the size or scale.`,
    image: image6
  }
]

export function Features() {
  return (
    <div className="relative py-32 xl:py-48 mb-44 text-white">
      <div
        className="bg-bunker-950 -skew-y-6 absolute inset-0 bottom-1/3">
        <div style={{ backgroundImage: `url(${border.src})`}} className="w-full h-12 -mt-12 bg-[length:auto_3rem]" />
      </div>
      <div
        className="bg-bunker-950 absolute inset-0 top-1/3 bottom-1/3"
      />
      <div
        className="bg-bunker-950 skew-y-6 absolute inset-0 top-1/3 flex justify-center items-end">
        <div style={{ backgroundImage: `url(${border.src})`}} className="w-full h-12 -mb-12 bg-[length:auto_3rem]" />
      </div>
      <div className="container relative">
        <h3 className="mb-15 lg:mb-32 text-center">
          <span className="block font-semibold leading-none mb-3 lg:mb-6 space-x-1 lg:space-x-2">
            <span className="font-sans font-extrabold uppercase text-[2rem] lg:text-[4rem] tracking-tight">Everything</span>{' '}
            <span className="font-heading italic tracking-tight text-[1.5rem] lg:text-[4.25rem]">you need</span>
          </span>
          <span className="block font-medium text-[1.175rem] lg:text-[1.675rem] leading-[1.75rem] lg:leading-[2rem]">
            to <U n={1}>create</U>, <U n={2}>host</U>, and <U n={3}>monetize</U> live experiences
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-15 lg:gap-18">
          {cards.map((card, index) => (
            <div key={index} className="pt-24">
              <div className="relative rounded-xl">
                <div className="absolute inset-0 border-t border-dashed border-white/20 xl:ml-24" />
                <div className="absolute inset-0 border-l border-dashed border-white/20 ml-3 xl:ml-[12.5rem]" />
                <div className="relative flex flex-col xl:flex-row space-x-9 z-10">
                  <img src={card.image.src} className="rounded-xl w-32 h-48 xl:w-40 xl:h-60 object-cover object-center -mt-24 -rotate-[4.5deg] -skew-y-1" />
                  <div className="flex-1 pt-9 pb-6 pl-1.5 pr-6 lg:py-9 lg:pl-9">
                    <h4 className="text-[1.5rem] leading-[2rem] font-heading font-semibold mb-3">
                      {card.title}
                    </h4>
                    <p className="text-lg text-white/70">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function U({ n, children }) {
  const bg = [
    'bg-pink-300',
    'bg-yellow-300',
    'bg-green-300'
  ][n - 1];

  return (
    <span className="relative inline-block">
      <span
        className={cx('absolute block inset-0 top-0.5 bottom-0.5 -skew-y-2', bg)}
      />
      <span className="relative text-bunker-950 font-head font-semibold inline-block px-0.5">
        {children}
      </span>
    </span>
  )
}
