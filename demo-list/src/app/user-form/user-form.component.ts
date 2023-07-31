import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user-component/user-model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {


  @Input()  user!: User;
  @Input()  show! :boolean;
  @Input() newuser! : boolean;

  @Output() newUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();

  constructor () {
  }

  save() {
    if (this.newuser) {
      alert('new user')
      this.newUserEvent.emit(this.user)
    } else {
      this.updateUserEvent.emit(this.user);
      alert('update user')
    }
    this.show = false;
  }

  hideForm() {
    this.show = false;
  }
}
