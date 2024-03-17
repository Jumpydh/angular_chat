import {Component, Input} from '@angular/core';
import {Message} from "../../_helper/models/message";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input()
  message!: Message;
}

