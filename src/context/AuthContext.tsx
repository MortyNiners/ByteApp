import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { logInUser } from '../services/logInUser.ts';
import { useNavigate } from 'react-router-dom';
import { ToastNotification } from '../components/ToastNotification.tsx';

interface AuthContextInterface {
  login: () => void;
  setEmail: (inputValue: ((prevState: string) => string) | string) => void;
  setPassword: (inputValue: ((prevState: string) => string) | string) => void;
  setUsername: (inputValue: ((prevState: string) => string) | string) => void;
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async () => {
    setIsLoading(true);
    logInUser({ email, password, username })
      .then(({ refresh_token, access_token }) => {
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('access_token', access_token);
        navigate('main-page');
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        setErrorMessage(err.message);
        setIsAuth(false);

        throw err;
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
