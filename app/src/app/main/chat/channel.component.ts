import {Component} from '@angular/core';
import {Message} from "../../_helper/models/message";
import {HttpClient} from "@angular/common/http";
import {MessageComponent} from "../message/message.component";
import {NgForOf} from "@angular/common";
import {InputComponent} from "../input/input.component";
import {ActivatedRoute, Params} from "@angular/router";
import {Channel} from "../../_helper/models/channels";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MessageComponent,
    NgForOf,
    InputComponent,
    TopBarComponent
  ],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.css'
})
export class ChannelComponent {

  // Server Sent Events
  // sub: Subscription | undefined;

  test_messages: Message[] = [];
  channel: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.onChannelChange(params);
    });
  }

  onChannelChange(params: Params) {
    this.channel = params['channel'];
    this.http.get('/api/channels/' + this.channel + '/messages', {responseType: 'text'}).subscribe(data => {
      let messages = JSON.parse(data);
      console.log(messages);
      this.test_messages = messages.map((message: { text: string; user: string; created_at: string; }) => {
          return new Message(message.text, message.user, new Date(message.created_at));
        }
      );
    })

    this.http.get('api/channels/' + this.channel+'/users', {responseType: 'text'}).subscribe(data => {
      let users = JSON.parse(data);
      console.log(users);
    }
    );

  }


  ngOnChanges() {

    // Server Sent Events
    // this.sub = this.getMessages().subscribe(
    //   data => {
    //     console.log(data);
    //     let message = JSON.parse(data);
    //     this.test_messages.push(new Message(message.text, message.user, new Date(message.created_at)));
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )

  }

  // Server Sent Events
  // getMessages(): Observable<any> {
  //
  //   return Observable.create(
  //     (observer: { next: (arg0: any) => void; error: (arg0: Event) => void; }) => {
  //
  //       let source = new EventSource("/api/channels/test/messages/events");
  //       source.onmessage = event => {
  //         this.zone.run(() => {
  //           observer.next(event.data)
  //         })
  //       }
  //
  //       source.onerror = event => {
  //         this.zone.run(() => {
  //           observer.error(event)
  //         })
  //       }
  //     }
  //   )
  // }
  // ngOnDestroy() {
  //   this.sub && this.sub.unsubscribe();
  // }
}
