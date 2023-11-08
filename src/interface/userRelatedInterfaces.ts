export interface UserCredentialsClientInterface {
  email: string | null;
  username: string | null;
  password: string;
}

export interface UserLogInInterface {
  message: string;
}

export interface NotificationInterface {
  normal: boolean;
  success: boolean;
  error: boolean;
  warning: boolean;
  message: string;
}

export interface UsernameVerificationInterface {
  username: string;
}

export interface UsernamePromiseInterface {
  message: boolean;
}
