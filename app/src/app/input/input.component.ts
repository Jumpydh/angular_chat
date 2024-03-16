import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  inputMessage: string = '';


  constructor(private http: HttpClient) {

  }

  sendMessage() {
    this.http.put('/api/messages', this.inputMessage, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
    // clear the input
    this.inputMessage = '';
  }

}
