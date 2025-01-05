import { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold, PiPlusBold } from 'react-icons/pi';
import { format } from 'date-fns';

interface Props {
  onSelect: (date: string) => void;
}

export function Calendar({ onSelect }: Props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Function to get day of week with Monday as 0
  const getMondayBasedDay = (date: Date) => {
    let day = date.getDay();
    return day === 0 ? 6 : day - 1; // Sunday becomes 6, Monday becomes 0
  };

  return (
    <div>
      <div className="flex items-center justify-between select-none mb-6">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
          className="text-purple-500 rounded-full flex items-center justify-center w-8 h-8 hover:bg-purple-100 transition-all">
          <PiCaretLeftBold
            className="w-5 h-5"
          />
        </button>
        <span className="font-semibold text-[1.05rem]">
          {format(currentMonth, 'MMMM yyyy')}
        </span>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
          className="text-purple-500 rounded-full flex items-center justify-center w-8 h-8 hover:bg-purple-100 transition-all">
          <PiCaretRightBold
            className="w-[1.125rem] h-[1.125rem]"
          />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-3 text-sm">
        <div className="text-center text-gray-600">Mon</div>
        <div className="text-center text-gray-600">Tue</div>
        <div className="text-center text-gray-600">Wed</div>
        <div className="text-center text-gray-600">Thu</div>
        <div className="text-center text-gray-600">Fri</div>
        <div className="text-center text-gray-600">Sat</div>
        <div className="text-center text-gray-600">Sun</div>
        {Array.from({ length: 42 }).map((_, index) => {
          const date = new Date(currentMonth);
          // Adjust the date calculation to account for Monday as first day
          date.setDate(index - getMondayBasedDay(date) + 1);
          const isCurrentMonth = date.getMonth() === currentMonth.getMonth();

          return (
            <a
              key={index}
              onClick={() => onSelect(format(date, 'yyyy-MM-dd'))}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all group ${
                isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
              } hover:bg-purple-100`}>
              <span className="block group-hover:hidden">
                {format(date, 'd')}
              </span>
              <span className="hidden group-hover:block text-purple-500">
                <PiPlusBold className="w-[0.9rem] h-[0.9rem]" />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
