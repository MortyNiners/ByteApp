import { useState } from 'react';
import InboxLight from '../assets/Header/chat_white.svg';
import InboxDark from '../assets/Header/chat_dark.svg';
import CalendarLight from '../assets/Header/calendar_light.svg';
import CalendarDark from '../assets/Header/calendar_dark.svg';

export const HeaderContainer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <header className="min-w-[320px] ">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <div className="border-[2px] h-[75px] border-t-0 border-gray-300 flex justify-center items-center">
              <p className=" font-medium text-[20px] text-gray-400">Task Manager</p>
            </div>
          </div>
          <div className="col-span-9  border-[2px]  border-t-0 border-x-0 border-gray-300 h-[75px]">
            <div className="flex justify-center min-w-full">
              <div className="w-[200px] flex flex-1 items-center ">
                <div className="relative ml-4 text-gray-600">
                  <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <button type="submit" className=" absolute bottom-[11px] right-0 mt-5 mr-4">
                    <svg
                      className="text-gray-600 h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 56.966 56.966"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="  h-[75px] flex-1 flex items-center">
                <label className=" bg-gray-200 h-[44px] relative inline-flex cursor-pointer select-none items-center justify-center rounded-md  p-1">
                  <input type="checkbox" className="sr-only" checked={isChecked} onChange={handleCheckboxChange} />
                  <span
                    className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                      !isChecked ? 'text-white bg-blue-500' : 'text-body-color'
                    }`}
                  >
                    <img className="w-[20px] mr-2" src={isChecked ? InboxDark : InboxLight} alt="" />
                    Inbox
                  </span>
                  <span
                    className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                      isChecked ? 'text-white bg-blue-500' : 'text-body-color'
                    }`}
                  >
                    <img className="w-[20px] mr-2" src={isChecked ? CalendarLight : CalendarDark} alt="" />
                    Calendar
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
