import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {authGuard} from "./_helper/auth.guard"
import {RegisterComponent} from "./register/register.component";

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [authGuard],
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
