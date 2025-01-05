import { format } from 'date-fns';
import { PiTimer, PiTimerBold } from 'react-icons/pi';

interface Props {
  date: string;
  times: string[];
}

export function DateSlot({ date, times }: Props) {
  return (
    <div className="flex mb-3 p-3 rounded-sm bg-white">
      <div className="bg-gray-100 w-24 min-h-24 p-3 rounded-sm mr-3 text-center flex flex-col justify-center">
        <p className="font-semibold text-[1.125rem] text-purple-600">
          {format(new Date(date), 'MMM dd')}
        </p>
        <p className="text-gray-700 text-[0.85rem]">
          {format(new Date(date), 'eeee')}
        </p>
      </div>
      <ul className="flex-1 space-y-3">
        {times.map(time => (
          <li key={time} className="border border-gray-200/50 rounded-sm p-1.5 flex items-center justify-between">
            <span className="flex items-center space-x-1.5">
              <PiTimer className="w-[1.125rem] h-[1.125rem]" />
              <span>{time}</span>
            </span>
            <a href="#" className="text-purple-600 text-sm">
              Archive
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
