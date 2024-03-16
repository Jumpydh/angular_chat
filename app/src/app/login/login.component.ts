import {Component, NgModule} from '@angular/core';
import {AuthService} from "../_helper/auth.service";
import {Router} from "@angular/router";
import {FormsModule, NgModel, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inputPassword: any;
  inputUsername: any;

  constructor(private authService: AuthService, public router: Router) {
  }

  login() {
    console.log('login')
    this.authService.login(this.inputUsername, this.inputPassword).subscribe((_: any) => {
        if (this.authService.isAuthenticatedUser()) {
          this.router.navigate(['/chat'])

        }
      }
    )
  }
}
