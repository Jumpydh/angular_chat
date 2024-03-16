import { Component } from '@angular/core';
import {LogoutButtonComponent} from "../login/logout-button/logout-button.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LogoutButtonComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
