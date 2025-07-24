import { Component } from '@angular/core';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-bar.html',
  styleUrl: './auth-bar.css'
})
export class AuthBar {
  constructor(public auth: Auth) {}

  logout() {
    this.auth.logout();
  }
}
