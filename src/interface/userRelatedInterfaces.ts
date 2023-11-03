export interface UserCredentialsClientInterface {
  email: string | null;
  username: string | null;
  password: string;
}

export interface UserLogInInterface {
  refresh_token: string;
  access_token: string;
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
