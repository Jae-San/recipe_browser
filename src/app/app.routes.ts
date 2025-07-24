import { Routes } from '@angular/router';
import { AuthPage } from './auth-page/auth-page';
import { App } from './app';

export const routes: Routes = [
  { path: 'auth', component: AuthPage },
  { path: '', component: App },
];
