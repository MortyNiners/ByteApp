import Logo from '../assets/Logo/logo.svg';
import { useNavigate } from 'react-router-dom';
import { TermsConditionsModal } from './TermsConditionsModal.tsx';
import { FormEvent, useState } from 'react';
export const ResetPassword = () => {
  const [modal, setModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkMessage, setCheckMessage] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    switch (true) {
      case !isChecked:
        setCheckMessage(!checkMessage);
        break;
    }
  };
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img onClick={() => navigate('/')} className="w-[200px] p-4 cursor-pointer" src={Logo} alt="logo" />
          <div className="w-full p-6 bg-white rounded-lg shadow border md:mt-0 sm:max-w-md  sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Change Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={(event) => submitHandler(event)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-blue-300  outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-blue-300  outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-blue-300  outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    checked={isChecked}
                    onClick={() => setIsChecked(!isChecked)}
                    className="bg-gray-50 border border-blue-300  outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>

                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter" className="font-light text-gray-500  ">
                    I accept the
                    <span className="font-medium text-blue-500 hover:underline cursor-pointer">
                      Terms and Conditions
                    </span>
                  </label>
                </div>
              </div>
              {checkMessage && (
                <span className="text-red-500 text-[12px]  font-medium ">
                  Please accept the terms and conditions to proceed.
                </span>
              )}
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
      {modal && <TermsConditionsModal checked={setIsChecked} modal={setModal} />}
    </>
  );
};
