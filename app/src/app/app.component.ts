import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './main/input/input.component';
import { MessageComponent } from './main/message/message.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {TopBarComponent} from "./main/top-bar/top-bar.component";
import {SidebarComponent} from "./main/sidebar/sidebar.component";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    MessageComponent,
    CommonModule,
    HttpClientModule,
    TopBarComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}
