import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {authGuard} from "./_helper/auth.guard"

export const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'chat', component: MainComponent,
    canActivate: [authGuard],
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
