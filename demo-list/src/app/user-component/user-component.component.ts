import { Component } from '@angular/core';
import { User } from './user-model';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

  users: User[] = [
    {
      userid:1,
      username: "name 1",
      address:"Address 1",
      pincode: "pincode 1"
    },
    {
      userid:2,
      username: "name 2",
      address:"Address 2",
      pincode: "pincode 2"
    },
    {
      userid:3,
      username: "name 3",
      address:"Address 3",
      pincode: "pincode 3"
    },
  ];

  constructor () {
    // alert('Constructor called user component')
      //this.users = 
  }

  updateUser(user:User) {
    console.log(user);
    for (let i = 0; i < this.users.length; i++) {
      if (user.userid == this.users[i].userid) {
        this.users[i] = user;
        break;
      }
    }
    alert('User updated event called ' + user.userid + "|" + user.username)
  }

  insertUser(user:User) {
    user.userid = this.users.length + 1;
    this.users.push(user);
  }
  
  ngOnInit():void {
    // alert('ngOnInit called user component')
  }
}
