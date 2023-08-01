import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  ngOnInit():void {
    this.user = new User();
  }

  save() {
    alert('save | ' + this.newuser)
    if (this.newuser) {
      alert('new user :: ' + this.user.userid + " | " + this.user.username)
      this.newUserEvent.emit(this.user)
      this.user = new User;
    } else {
      this.updateUserEvent.emit(this.user);
      this.user = new User;
      alert('update user :: ' + this.user)
    }
    this.show = false;
  }

  hideForm() {
    this.show = false;
  }
}
