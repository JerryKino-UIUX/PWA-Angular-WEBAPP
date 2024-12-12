import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'domain',
    pathMatch: 'full'
  },
  {
    path: 'domain',
    loadComponent: () => import('./pages/domain/domain.component')
      .then(m => m.DomainComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component')
      .then(m => m.EventsComponent)
  }
];