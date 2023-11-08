import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { logInUser } from '../services/logInUser.ts';
import { ToastNotification } from '../components/ToastNotification.tsx';
import { useNavigate } from 'react-router-dom';

interface AuthContextInterface {
  login: () => void;
  setEmail: (inputValue: React.SetStateAction<string | null>) => void;
  setPassword: (inputValue: ((prevState: string) => string) | string) => void;
  setUsername: (inputValue: React.SetStateAction<string | null>) => void;
  isLoading: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
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
  setError: () => false,
  setErrorMessage: () => '',
});
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState<string | null>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const login = async () => {
    setIsLoading(true);

    await logInUser({ email, password, username })
      .then(() => {
        navigate('/main-container');
      })
      .catch((e) => {
        setIsLoading(false);
        // console.log(e);
        if (e.response) {
          if (e.response.status === 400) {
            setError(true);
            setErrorMessage('Bad Request: All fields should be filled');
          } else {
            setError(true);
            setErrorMessage('An unexpected error occurred.');
          }
        } else {
          setError(true);
          setErrorMessage('Network error or server is down.');
        }
      })
      .finally(() => {
        setTimeout(() => {
          setError(false);
        }, 2000);
        setIsLoading(false);
      });
  };

  return (
    <>
      <AuthContext.Provider value={{ login, setEmail, setPassword, setUsername, isLoading, setError, setErrorMessage }}>
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
