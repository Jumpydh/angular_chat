import {Component, NgZone} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {Message, MessageComponent} from "../message/message.component";
import {NgForOf} from "@angular/common";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CanDeactivateFn} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    InputComponent,
    MessageComponent,
    NgForOf,
    SidebarComponent,
    TopBarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  test_messages: Message[] = [];
  sub: Subscription | undefined;

  constructor(private zone: NgZone, private http: HttpClient) {

  }

  getMessages(): Observable<any> {

    return Observable.create(
      (observer: { next: (arg0: any) => void; error: (arg0: Event) => void; }) => {

        let source = new EventSource("/api/messages/events", {
          withCredentials:true,

        });
        source.onmessage = event => {
          this.zone.run(() => {
            observer.next(event.data)
          })
        }

        source.onerror = event => {
          this.zone.run(() => {
            observer.error(event)
          })
        }
      }
    )
  }

  ngOnInit() {
    this.sub = this.getMessages().subscribe(
      data => {
        console.log(data);
        let message = JSON.parse(data);
        this.test_messages.push(new Message(message.text, message.user, new Date(message.created_at)));
      },
      error => {
        console.log(error);
      }
    )
    this.http.get('/api/messages', {responseType: 'text'}).subscribe(data => {
      //parse multiple messages
      let messages = JSON.parse(data);
      console.log(messages);
      for (let i = 0; i < messages.length; i++) {
        this.test_messages.push(new Message(messages[i].text, messages[i].user, new Date(messages[i].created_at)));
      }
    });
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }


  title = 'angular-chat';
}
