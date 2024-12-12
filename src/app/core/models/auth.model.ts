export interface User {
  id: string;
  username: string;
  role: 'organizer' | 'staff';
}

export interface LoginCredentials {
  username: string;
  password: string;
  domain: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  domain: string | null;
}