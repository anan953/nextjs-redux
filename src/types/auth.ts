export interface LoginCredentials {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthResponse {
  user: User;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
