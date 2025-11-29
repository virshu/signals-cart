import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from './login-request';
import { form, Field } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [Field],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly loginModel = signal<LoginRequest>({
      username: '',
      password: ''
    });
  readonly loginForm = form(this.loginModel);

  login(event: Event): void {
    event.preventDefault();
    this.auth.login(this.loginModel());
    this.router.navigateByUrl('/');
  }
}
