import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  messageInput: FormGroup;
  channel: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.messageInput = new FormGroup({
      message: new FormControl('')
    });
    this.route.params.subscribe(params => {
      this.channel = params['channel'];
    });
  }

  sendMessage() {
    let message = this.messageInput.get('message')?.value;
    this.http.post('/api/channels/'+this.channel+'/messages', message, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
    // clear the input
    this.messageInput.get('message')?.setValue('');
  }

}
