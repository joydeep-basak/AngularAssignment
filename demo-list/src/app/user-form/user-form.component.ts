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
    this.user = {
      userid : 0,
      username : '',
      address: '',
      pincode : '',
    };
    if (this.user != undefined) {
      console.log('User Form constructor :: ',this.user)
    }
  }

  ngOnInit():void {
    if (this.user != undefined) {
      console.log('User Form ngOnInit :: ',this.user)
    }
  }

  save(user:User) {
    alert('save | ' + this.newuser)
    if (this.newuser) {
      alert('new updated user :: ' + user.userid + " | " + user.username)
      this.newUserEvent.emit(user)
      this.user = user;
    } else {
      this.updateUserEvent.emit(user);
      this.user = user;
      alert('update user :: ' + user)
    }
    this.show = false;
  }

  hideForm() {
    this.show = false;
    this.user = {
      userid : 0,
      username : '',
      address: '',
      pincode : '',
    };
  }
}
