import {Component, NgZone} from '@angular/core';
import {InputComponent} from "./input/input.component";
import {MessageComponent} from "./message/message.component";
import {NgForOf} from "@angular/common";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {HttpClient} from "@angular/common/http";
import {Channel} from "../_helper/models/channels";
import {RouterOutlet} from "@angular/router";
import {catchError} from "rxjs";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    InputComponent,
    MessageComponent,
    NgForOf,
    SidebarComponent,
    TopBarComponent,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  channels: Channel[];

  constructor(private http: HttpClient) {
    this.channels = [];
  }

  ngOnInit() {
    this.http.get('/api/channels', {
      responseType: 'text',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
      }
    }).pipe(
      catchError((error) => {
          console.log(error);
          if(error.status === 401) {
          localStorage.removeItem('access_token');
          }
          return error;
        }
      )).subscribe(data => {
      //parse multiple messages
      if (typeof data === 'string') {

        let channels = JSON.parse(data);
        console.log(channels);
        for (let i = 0; i < channels.length; i++) {
          this.channels.push(new Channel(channels[i].id, channels[i].name, channels[i].users));
        }
      }
    });
  }
}
