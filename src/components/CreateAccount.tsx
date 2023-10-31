import Logo from '../assets/Logo/logo.svg';
import { FormEvent, SetStateAction, useState } from 'react';
import Eye from '../assets/CreateAcc/eye.svg';
import EyeSlash from '../assets/CreateAcc/eye-slash.svg';
import { useNavigate } from 'react-router-dom';
import { TermsConditionsModal } from './TermsConditionsModal.tsx';

export const CreateAccount = () => {
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [validUsername, setValidUsername] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [password, setPassword] = useState('');
  const [validPassword, setValidatePassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validVerifyPassword, setValidVerifyPassword] = useState(true);
  const [inputValid, setInputValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkMessage, setCheckMessage] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const validateUsername = (input: string) => {
    const pattern = /^[a-zA-Z0-9_-]+$/;
    const isValid = pattern.test(input);
    setValidUsername(isValid);
    setInputValid(isValid);
  };
  const handleChangeUsername = (event: { target: { value: SetStateAction<string> } }) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
    if (typeof inputValue === 'string') validateUsername(inputValue);
  };

  const validateEmail = (input: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = pattern.test(input);
    setValidEmail(isValid);
    setInputValid(isValid);
  };
  const handleChangeEmail = (event: { target: { value: SetStateAction<string> } }) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    if (typeof inputValue === 'string') validateEmail(inputValue);
  };
  const validatePassword = (input: string) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;
    const isValid = pattern.test(input);
    setValidatePassword(isValid);
    setInputValid(isValid);
  };
  const handleChangePassword = (event: { target: { value: SetStateAction<string> } }) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    if (typeof inputValue === 'string') validatePassword(inputValue);
  };
  const validateVerifyPassword = (input: string) => {
    const isValid = input === password;
    setValidVerifyPassword(isValid);
    setInputValid(isValid);
  };
  const handleChangeVerifyPassword = (event: { target: { value: SetStateAction<string> } }) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);
    if (typeof inputValue === 'string') validateVerifyPassword(inputValue);
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    switch (true) {
      case !isChecked:
        setCheckMessage(!checkMessage);
        break;
      case !inputValid:
    }
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img onClick={() => navigate('/')} alt="logo" className="w-[200px] p-4 cursor-pointer" src={Logo} />

          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={(event) => submitHandler(event)}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 ">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={userName}
                    onChange={handleChangeUsername}
                    className="bg-gray-50 border border-blue-300 outline-none focus:ring-2 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="@username"
                  />
                  {!validUsername && (
                    <>
                      <span className="text-red-500 text-[12px] font-medium">
                        Please use only letters, numbers, underscores, and hyphens.
                      </span>
                    </>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 ">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail}
                    className="bg-gray-50 border border-blue-300 outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 focus-ring-2 block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                  {!validEmail && (
                    <>
                      <span className="text-red-500 text-[12px] font-medium">
                        Invalid email. Please follow the format name@domain.com
                      </span>
                    </>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 ">Password</label>
                  <div className="flex justify-end items-center">
                    <input
                      type={visible ? 'text' : 'password'}
                      name="password"
                      id="password"
                      value={password}
                      onChange={handleChangePassword}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-blue-300 outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
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

                  {!validPassword && (
                    <>
                      <span className="text-red-500 text-[12px] font-medium">
                        Please enter a valid password: at least 8 characters, including uppercase and lowercase letters,
                        numbers, and special characters.
                      </span>
                    </>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 ">Confirm password</label>
                  <input
                    type={visible ? 'text' : 'password'}
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={handleChangeVerifyPassword}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-blue-300  outline-none focus:ring-2 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 "
                  />
                  {!validVerifyPassword && (
                    <>
                      <span className="text-red-500 text-[12px] font-medium"> Password doesn't match!</span>
                    </>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      checked={isChecked}
                      onClick={() => setIsChecked(!isChecked)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-600"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 ">
                      I accept the
                      <span
                        onClick={() => setModal(true)}
                        className="text-blue-600 font-medium hover:underline mx-1 cursor-pointer"
                      >
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
                  onClick={submitHandler}
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?
                  <span
                    onClick={() => navigate('/login')}
                    className="font-medium text-blue-600 hover:underline cursor-pointer mx-1"
                  >
                    Login here
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {modal && <TermsConditionsModal checked={setIsChecked} modal={setModal} />}
    </>
  );
};
