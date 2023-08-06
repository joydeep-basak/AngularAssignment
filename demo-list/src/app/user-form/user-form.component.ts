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
  // @Input()  show! :boolean;
  @Input() newuser! : boolean;

  @Output() newUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();

  constructor () {
    console.log(this.user)
  }

  ngOnInit():void {
    console.log(this.user)
  }

  show (user: User) {
    console.log('User Selected :: ', user)
    this.user = user;
  }

  save(user:User) {
    alert('save | ' + this.newuser)
    if (this.newuser) {
      console.log('New user from component', user)
      this.newUserEvent.emit(user)
      this.user = user;
    } else {
      
      console.log('Update user from component', user)
      this.user.username = user.username;
      this.user.address = user.address;
      this.user.pincode = user.pincode;
      this.updateUserEvent.emit(this.user);
      alert('update user :: ' + user)
    }
    // this.show = false;
  }

  hideForm() {
    this.user = {
      userid:0,
      username:'',
      address:'',
      pincode:''
    }
  }
}
