import { Component } from '@angular/core';
import {AuthService} from "../../_helper/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css'
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  onButtonClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
