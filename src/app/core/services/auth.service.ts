import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AuthState, LoginCredentials, User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'auth_state';
  private authState = new BehaviorSubject<AuthState>({
    user: null,
    token: null,
    domain: null
  });

  constructor() {
    this.loadAuthState();
  }

  get isAuthenticated$(): Observable<boolean> {
    return new Observable(subscriber => 
      this.authState.subscribe(state => subscriber.next(!!state.token))
    );
  }

  get currentDomain$(): Observable<string | null> {
    return new Observable(subscriber => 
      this.authState.subscribe(state => subscriber.next(state.domain))
    );
  }

  setDomain(domain: string): void {
    const currentState = this.authState.value;
    const newState = { ...currentState, domain };
    this.authState.next(newState);
    this.saveAuthState(newState);
  }

  login(credentials: LoginCredentials): Observable<User> {
    // TODO: Implement actual API call
    // This is a mock implementation
    if (credentials.username && credentials.password) {
      const user: User = {
        id: '1',
        username: credentials.username,
        role: 'staff'
      };
      const token = 'mock_token';
      const newState = {
        user,
        token,
        domain: credentials.domain
      };
      this.authState.next(newState);
      this.saveAuthState(newState);
      return of(user);
    }
    return throwError(() => new Error('Invalid credentials'));
  }

  logout(): void {
    const domain = this.authState.value.domain;
    this.authState.next({ user: null, token: null, domain });
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private loadAuthState(): void {
    const savedState = localStorage.getItem(this.STORAGE_KEY);
    if (savedState) {
      this.authState.next(JSON.parse(savedState));
    }
  }

  private saveAuthState(state: AuthState): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
  }
}