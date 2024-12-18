import { Button } from '@floyd/ui/components';
import { PiArrowRight } from 'react-icons/pi';
import hljs from 'highlight.js';
import { useEffect } from 'react';
import bg from './cover-bg.svg';

const today = new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

export function Cover() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className="relative z-10 py-20 lg:py-36 pt-28 lg:pt-40 lg:pb-0 bg-cover bg-center bg-repeat" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="relative container">
        <div className="grid lg:grid-cols-11 gap-12">
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <h1 className="text-[2rem] lg:text-[3.325rem] font-extrabold tracking-tight leading-[2.25rem] lg:leading-[3.75rem] mb-6">
                Booking infrastructure made
                {' '}
                <span className="inline-block relative">
                  <span className="h-[1.25rem] bg-teal-500/40 block absolute inset-0 top-auto -rotate-1 rounded" />
                  <span className="relative">for developers</span>
                </span>
              </h1>
              <p className="text-[1rem] lg:text-[1.3rem] text-gray-600 mb-12 font-mono leading-[1.75] max-w-xl">
                Easily integrate advanced <U>scheduling</U>, dynamic <U>pricing</U>, and real-time <U>availability</U>
                {' '}into your platform with Floyd robust APIs.
              </p>
              <div className="space-x-4">
                <a href="https://tally.so/r/mRBgXP" target="_blank" rel="noreferrer">
                  <Button size="large">
                    <span className="flex items-center space-x-2">
                      <span>
                        Request Demo
                      </span>
                      <PiArrowRight className="w-[1.175rem] h-[1.175rem]" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:block relative">
            <div className="bg-gray-950 rounded-md overflow-hidden shadow-2xl relative">
              <div className="flex items-center justify-between bg-violet-950 px-3 py-2">
                <div className="text-gray-200 text-sm font-semibold">
                  List resources with availability
                </div>
                <div className="space-x-1.5 leading-none pt-0.5">
                  <span
                    className="bg-white/30 w-3 h-3 inline-block rounded-full"
                  />
                  <span
                    className="bg-white/30 w-3 h-3 inline-block rounded-full"
                  />
                  <span
                    className="bg-white/30 w-3 h-3 inline-block rounded-full"
                  />
                </div>
              </div>
              <pre>
                <code className="language-js text-[0.95rem]">
                  {`await floyd.resources.list({`}{`\n`}
                  {`  filter: {`}{`\n`}
                  {`    availability: {`}{`\n`}
                  {`      start: '${today.toISOString().split('T')[0]}'`}{`\n`}
                  {`      end: '${nextWeek.toISOString().split('T')[0]}'`}{`\n`}
                  {`      consumers: {`}{`\n`}
                  {`        [ADULT_TYPE_ID]: 2`}{`\n`}
                  {`        [TEEN_TYPE_ID]: 1`}{`\n`}
                  {`      }`}{`\n`}
                  {`    }`}{`\n`}
                  {`  },`}{`\n`}
                  {`  limit: 20`}{`\n`}
                  {`});`}{'\n'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-gray-500/10 to-transparent hidden lg:block">
        <div className="container">
          <div
            className="border-l border-dashed border-gray-400/80 h-32"
          />
        </div>
      </div>
    </div>
  )
}

function U({ children }) {
  return (
    <span className="relative">
      <span className="h-[px] bg-amber-400/20 block absolute inset-0 -rotate-2 rounded-md" />
      <span className="relative">
        {children}
      </span>
    </span>
  )
}
