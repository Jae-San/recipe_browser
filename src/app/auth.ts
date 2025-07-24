import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // Signal pour l'état de connexion (true = connecté, false = visiteur)
  isLoggedIn = signal(false);
  // Nom d'utilisateur fictif
  username = signal<string | null>(null);

  login() {
    this.isLoggedIn.set(true);
    this.username.set('Jean Dupont');
  }

  logout() {
    this.isLoggedIn.set(false);
    this.username.set(null);
  }
}
