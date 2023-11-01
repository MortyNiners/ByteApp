import { createContext, ReactNode, useState } from 'react';
import { logInUser } from '../services/logInUser.ts';
import { useNavigate } from 'react-router-dom';

interface AuthContextInterface {
  login: () => void;
  setEmail: (inputValue: ((prevState: string) => string) | string) => void;
  setPassword: (inputValue: ((prevState: string) => string) | string) => void;
  setUsername: (inputValue: ((prevState: string) => string) | string) => void;
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
});
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    logInUser({ email, password, username })
      .then(({ refresh_token, access_token }) => {
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('access_token', access_token);
      })
      .then(() => navigate('chat-room'))
      .catch((err) => {
        console.log('err');
        throw err;
      });
  };
  return (
    <>
      <AuthContext.Provider value={{ login, setEmail, setPassword, setUsername }}>{children}</AuthContext.Provider>
    </>
  );
};
