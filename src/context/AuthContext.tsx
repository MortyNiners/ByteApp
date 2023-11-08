import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { logInUser } from '../services/logInUser.ts';
import { useNavigate } from 'react-router-dom';
import { ToastNotification } from '../components/ToastNotification.tsx';
import { AxiosError } from 'axios';

interface AuthContextInterface {
  login: () => void;
  setEmail: (inputValue: React.SetStateAction<string | null>) => void;
  setPassword: (inputValue: ((prevState: string) => string) | string) => void;
  setUsername: (inputValue: React.SetStateAction<string | null>) => void;
  isLoading: boolean;
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}
export const AuthContext = createContext<AuthContextInterface>({
  login: () => {},
  setEmail(): string {
    return '';
  },
  setPassword(): string {
    return '';
  },
  setUsername(): string {
    return '';
  },
  isLoading: false,
  isAuth: false,
  setIsAuth: () => false,
});
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState<string | null>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async () => {
    setIsLoading(true);
    setIsAuth(true);
    try {
      navigate('/main-container');
      const response = await logInUser({ email, password, username });
      localStorage.setItem('refresh_token', response.refresh_token);
      localStorage.setItem('access_token', response.access_token);
    } catch (e) {
      setIsLoading(false);
      setError(true);
      setErrorMessage((e as AxiosError).message);
      setIsAuth(false);
    } finally {
      setTimeout(() => {
        setError(false);
      }, 2000);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    localStorage.getItem('access_token') ? setIsAuth(true) : setIsAuth(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ login, setEmail, setPassword, setUsername, isLoading, isAuth, setIsAuth }}>
        {children}
        <ToastNotification
          error={error}
          message={errorMessage}
          normal={false}
          success={false}
          warning={false}
        ></ToastNotification>
      </AuthContext.Provider>
    </>
  );
};
