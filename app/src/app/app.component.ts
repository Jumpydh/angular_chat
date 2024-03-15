import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { Message, MessageComponent } from './message/message.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    MessageComponent,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  test_messages: Message[] = [];

  ngOnInit() {
    this.http.get('https://angular_chat_server:8080/messages', { responseType: 'text' }).subscribe(data => {
      //parse multiple messages
      let messages = JSON.parse(data);
      console.log(messages);
      for (let i = 0; i < messages.length; i++) {
        this.test_messages.push(new Message(messages[i].text, messages[i].user, new Date(messages[i].created_at)));
      }
    });
  }

  constructor(private http: HttpClient) {

  }

  title = 'angular-chat';
}
