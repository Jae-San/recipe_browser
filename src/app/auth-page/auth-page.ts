import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css'
})
export class AuthPage {
  lastName = '';
  firstName = '';
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit() {
    // Simule la connexion/inscription
    this.auth.isLoggedIn.set(true);
    this.auth.username.set(this.firstName + ' ' + this.lastName);
    this.router.navigate(['/']);
  }
}
