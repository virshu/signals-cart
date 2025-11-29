import { computed, Injectable, signal } from '@angular/core';
import { LoginRequest } from '../pages/login/login-request';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../pages/login/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #user = signal<LoginResponse | null>(null);

  readonly isLoggedIn = computed(() => this.#user() !== null);
  readonly username = computed(() => this.#user());

  private apiUrl = 'https://fakestoreapi.com/auth/login';
  constructor(private http: HttpClient) {}

  login(username: LoginRequest): void {
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<{ token: string }>(this.apiUrl, username, { headers }).subscribe({
      next: (response) => {
        console.log('Login successful, token:', response.token);
        this.#user.set({ username: username.username, token: response.token });
  }})
}

  logout(): void {
    this.#user.set(null);
  }
}
