import { Button } from '@floyd/ui/components';

export function GetStarted() {
  return (
    <div className="container">
      <div>
        <div className="pb-20 lg:pb-32">
          <div className="text-center">
            <h2 className="text-3xl max-w-xl mx-auto mb-3 leading-10">
              <span className="block text-[1.25rem] font-light leading-none mb-1.5">
                Ready to begin?
              </span>
              <span className="text-purple-700 text-[2.5rem] font-semibold tracking-tighter">
                your story starts here
              </span>
            </h2>
            <p className="text- text-bunker-500 max-w-xs mx-auto">
              You can claim your @handle and start creating your channel in minutes.
            </p>
            <div className="mt-9">
              <a href="https://hub.floyd.so/signup">
                <Button size="huge">
                  Get early access
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
