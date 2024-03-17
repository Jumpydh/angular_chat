import {Component, NgModule} from '@angular/core';
import {AuthService} from "../_helper/auth.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userPasswordForm: FormGroup;


  constructor(private authService: AuthService, public router: Router) {
    this.userPasswordForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {
    console.log('login')
    let username = this.userPasswordForm.get('username')?.value;
    let password = this.userPasswordForm.get('password')?.value;
    this.authService.login(username, password).subscribe((_: any) => {
        if (this.authService.isAuthenticatedUser()) {
          this.router.navigate(['/'])
        }
      }
    )
  }

}
