import {Component, Input} from '@angular/core';
import {LogoutButtonComponent} from "../../login/logout-button/logout-button.component";
import {MessageComponent} from "../message/message.component";
import {NgForOf} from "@angular/common";
import {Channel} from "../../_helper/models/channels";
import {HttpClient} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faHashtag, faHome, faHomeAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LogoutButtonComponent,
    MessageComponent,
    NgForOf,
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private http: HttpClient) {

  }


  @Input() channels!: Channel[]

  createChannel() {
    let name = prompt("Enter the name of the channel");
    if (name == null) {
      return;
    }

    this.http.post('/api/channels', new Channel('', name, []), {responseType: 'text',

    headers:{
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
    }).subscribe(data => {
      console.log(data);
    });
  }

  protected readonly faHomeAlt = faHomeAlt;
  protected readonly faHashtag = faHashtag;
}
