import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DialogCreateChannelComponent} from "../../Dialogs/dialog-create-channel/dialog-create-channel.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-dialog-modal-button',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    DialogCreateChannelComponent
  ],
  templateUrl: './dialog-modal-button.component.html',
  styleUrl: './dialog-modal-button.component.css'
})
export class DialogModalButtonComponent {
  @Output() dialogActive: EventEmitter<boolean>
  _dialogActive: boolean = false;

  @Input() title: string="";

  constructor() {
    this.dialogActive = new EventEmitter();
  }

  click() {
    this._dialogActive = !this._dialogActive;
    this.dialogActive.emit(this._dialogActive);
  }

}
