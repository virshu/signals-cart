import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #user = signal<string | null>(null);

  readonly isLoggedIn = computed(() => this.#user() !== null);
  readonly username = computed(() => this.#user());

  login(username: string): void {
    this.#user.set(username);
  }

  logout(): void {
    this.#user.set(null);
  }
}
