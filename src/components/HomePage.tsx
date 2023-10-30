import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="py-24 flex items-center min-h-screen justify-center bg-white">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-gray-800">
              Introducing chat app <span className="bg-blue-700 text-white p-1.5 rounded-full">ByteTalk</span>
            </p>
            <h1 className="mt-3 text-[56px] font-bold leading-[4rem] tracking-tight text-gray-800 ">
              One App, Endless Possibilities
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-gray-800">
              With ByteTalk, you can chat, call, and share with friends, family, and colleagues from a single,
              user-friendly platform.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              className="text-white bg-blue hover:bg-blue-light focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log In
            </button>

            <button
              onClick={() => navigate('/create-account')}
              type="button"
              className="text-white bg-blue hover:bg-blue-light focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
