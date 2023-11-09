export const Team = () => {
  return (
    <>
      <div className="min-w-full border-0 b border-l-0 h-[400px]  border-gray-300 overflow-y-scroll">
        <div className="p-10 flex items-center ">
          <span className="text-gray-500 font-bold text-xl mr-2">Team</span>
          <button className="w-[25px] h-[25px] bg-blue-500 rounded-full relative">
            <span className="absolute text-[26px] text-white  bottom-[-6px]  right-[5px]">+</span>
          </button>
        </div>

        <div className="flex flex-wrap ">
          <div className="mx-4 mt-2">
            <div className="w-[65px] fl h-[65px] bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};
