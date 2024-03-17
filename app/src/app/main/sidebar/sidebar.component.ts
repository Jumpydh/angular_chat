import {Component, Input} from '@angular/core';
import {LogoutButtonComponent} from "../../login/logout-button/logout-button.component";
import {MessageComponent} from "../message/message.component";
import {NgForOf, NgIf} from "@angular/common";
import {Channel} from "../../_helper/models/channels";
import {HttpClient} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faHashtag, faHome, faHomeAlt} from "@fortawesome/free-solid-svg-icons";
import {DialogModalButtonComponent} from "../dialog-modal-button/dialog-modal-button.component";
import {DialogCreateChannelComponent} from "../../Dialogs/dialog-create-channel/dialog-create-channel.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LogoutButtonComponent,
    MessageComponent,
    NgForOf,
    RouterLink,
    FaIconComponent,
    DialogModalButtonComponent,
    DialogCreateChannelComponent,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private http: HttpClient) {

  }

  createChannel: string = 'Create Channel';



  @Input() channels!: Channel[]


  protected readonly faHomeAlt = faHomeAlt;
  protected readonly faHashtag = faHashtag;
  protected readonly DialogCreateChannelComponent = DialogCreateChannelComponent;
  dialogActive: boolean = false;
  setActive(active: boolean) {
    this.dialogActive = active;
  }
}
