import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Channel} from "../../_helper/models/channels";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../_helper/auth.service";

class User {
  username: string;
  id: string;

  constructor(username: string, id: string) {
    this.username = username;
    this.id = id;
  }
}

@Component({
  selector: 'app-dialog-create-channel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './dialog-create-channel.component.html',
  styleUrl: './dialog-create-channel.component.css'
})
export class DialogCreateChannelComponent {
  createChannelForm: FormGroup;
  users: User[] = [];
  selectedUsers: User[] = [];
  creationError: string | undefined = undefined;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.createChannelForm = new FormGroup({
      channelName: new FormControl('')
    });
  }

  ngOnInit() {
    this.creationError = undefined;
    this.http.get('/api/users', {responseType: 'json',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    }).subscribe((data: any) => {
        for (let user of data) {
          if(user.id == this.auth.Session.id) continue;
          this.users.push(new User(user.username, user.id));
        }
      }
    );
  }

  submit() {
    let channelName = this.createChannelForm.get('channelName')?.value;
    let users = this.selectedUsers.map(user => user.id);

    if (channelName == '') {
        this.creationError = 'Channel name cannot be empty';
      return;
    } else if (this.selectedUsers.length == 0) {
        this.creationError = 'You need to select at least one user';
      return;
    }
    this.createChannel(channelName, users);
  }


  createChannel(name: string, users: string[]) {

    this.http.post('/api/channels', new Channel('', name, users), {
      responseType: 'text',

      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    }).subscribe(data => {
      console.log(data);
    });
  }

  onChange(user: User) {
    this.selectedUsers.push(user);
    this.users = this.users.filter(cUser => cUser.id !== user.id);
  }

  removeUser(user: User) {
    this.selectedUsers = this.selectedUsers.filter(cUser => cUser.id !== user.id);
    this.users.push(user);
  }
}
