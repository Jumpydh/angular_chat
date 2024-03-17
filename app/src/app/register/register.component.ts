import {Component} from '@angular/core';
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private http: HttpClient) {
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  register() {
    let username = this.registerForm.get('username')?.value;
    let password = this.registerForm.get('password')?.value;
    this.http.post('/api/auth/register', {username,password}, {responseType: "text"}).subscribe(data => {

      console.log(data)
      return true;
    });
  }
}
