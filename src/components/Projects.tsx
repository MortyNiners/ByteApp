export const Projects = () => {
  return (
    <div className="min-w-full border-t-0 border-l-0  h-[300px]  border-[2px] border-gray-300">
      <div>
        <div className="pt-10 pl-10 flex items-center ">
          <span className="text-gray-500 font-bold text-xl mr-2">Projects</span>
          <button className="w-[25px] h-[25px] bg-blue-500 rounded-full relative">
            <span className="absolute text-[26px] text-white  bottom-[-6px]  right-[5px]">+</span>
          </button>
        </div>
        <div className="flex flex-wrap p-6">
          <div className="bg-blue-500 rounded-full p-1 mt-2">
            <span className="text-white p-2">Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
};
