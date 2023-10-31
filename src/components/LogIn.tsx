import Logo from '../assets/Logo/logo.svg';
import { useNavigate } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import Eye from '../assets/CreateAcc/eye.svg';
import EyeSlash from '../assets/CreateAcc/eye-slash.svg';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleEmail = (event: { target: { value: SetStateAction<string> } }) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
  };
  const handlePassword = (event: { target: { value: SetStateAction<string> } }) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
  };
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img onClick={() => navigate('/')} className="w-[200px] p-4 cursor-pointer" src={Logo} alt="logo" />
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl ">
                Log in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Your email or @username </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleEmail}
                    value={email}
                    className="bg-gray-50 border border-blue-300  outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="@company.com or @username"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 ">Password</label>
                  <div className="flex justify-end items-center">
                    <input
                      type={visible ? 'text' : 'password'}
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePassword}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-blue-300  outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                    />
                    {visible ? (
                      <img
                        className="w-[20px] absolute mr-4 cursor-pointer"
                        onClick={() => setVisible(false)}
                        src={Eye}
                        alt="Eye"
                      />
                    ) : (
                      <img
                        className="w-[20px] absolute mr-4 cursor-pointer"
                        onClick={() => setVisible(true)}
                        src={EyeSlash}
                        alt="EyeSlash"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 ">Remember me</label>
                    </div>
                  </div>
                  <span
                    onClick={() => navigate('/reset-password')}
                    className="text-sm font-medium text-gray-800 hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?
                  <span
                    onClick={() => navigate('/create-account')}
                    className="font-medium text-blue-600 hover:underline cursor-pointer mx-1"
                  >
                    Sign up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
