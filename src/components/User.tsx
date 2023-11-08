import MessageSvg from '../assets/Header/chat_white.svg';
import SettingsSvg from '../assets/Header/settings.svg';
import BellSvg from '../assets/Header/bell.svg';

export const User = () => {
  return (
    <>
      <aside>
        <div className=" min-w-full border-t-0 border-l-0 h-[20vw]    border-[2px] border-gray-300">
          <div className="flex flex-col  items-center ">
            <div>
              <img src="" alt="" />
            </div>
            <div className=" mt-10 w-[100px] h-[100px] bg-gray-400 rounded-full"></div>
            <div className="mt-2">
              <span className="font-bold text-s">User Name</span>
            </div>
            <div className="mt-1">
              <span className="font-medium text-gray-500 text-s">lexiren226@jucatyo.com</span>
            </div>
            <div className="mt-10 flex ">
              <div className="w-[65px] h-[65px] rounded-full bg-blue-500 mx-6 flex justify-center items-center cursor-pointer">
                <img
                  src={SettingsSvg}
                  alt=""
                  className="w-[32px]  hover:w-[35px] transition-all duration-200 ease-out "
                />
              </div>
              <div className="w-[65px] h-[65px] rounded-full bg-blue-500 mx-6 flex justify-center items-center cursor-pointer">
                <img
                  src={MessageSvg}
                  alt=""
                  className="w-[32px] hover:w-[35px] transition-all duration-200 ease-out "
                />
              </div>
              <div className="w-[65px] h-[65px] rounded-full bg-blue-500 mx-6 flex justify-center items-center cursor-pointer">
                <img src={BellSvg} alt="" className="w-[32px] hover:w-[35px] transition-all duration-200 ease-out " />
                <div className="relative">
                  <div className=" absolute bottom-2 left-0 w-[32px] h-[32px] bg-red-600 rounded-full">
                    <div className="flex justify-center items-center mt-1">
                      <p className="text-white font-bold  m-0 p-0">2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[70%] mt-6">
              <div className="flex justify-end mb-1">
                <span className="text-s font-medium text-gray-500">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div className="bg-blue-600 h-2.5 w-[40%] rounded-full"></div>
              </div>
            </div>
            <div className="flex w-full  justify-between mt-6">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 mx-24">12</span>
                <span className="self-center mt-2 text-lg font-bold text-gray-500">Completed</span>
                <span className="self-center text-sm font-bold text-gray-500">task</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-xl  font-bold text-gray-800">22</span>
                <span className="mt-2 text-lg font-bold text-gray-500">To do</span>
                <span className="self-center text-sm font-bold text-gray-500">task</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 mx-24">243</span>
                <span className="self-center mt-2 text-lg font-bold text-gray-500">All</span>
                <span className="self-center text-sm font-bold text-gray-500">completed</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};