import { Component, Input } from '@angular/core';

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

export class Message {
  message: string;
  user: string;
  created_at: Date;
  constructor(message: string, user: string, created_at: Date) {
    this.message = message;
    this.user = user;
    this.created_at = created_at;
  }
}
