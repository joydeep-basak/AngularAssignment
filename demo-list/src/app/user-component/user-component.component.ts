import { Component } from '@angular/core';
import { User } from './user-model';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

  users: User[] = [];

  constructor () {
    alert('Constructor called user component')
      this.users = [
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
      ]
  }

  updateUser(user:User) {
    console.log(user);
    this.users.push({
      userid:4,
      username: "name 4",
      address:"Address 4",
      pincode: "pincode 4"
    },)
    alert('User updated event called ' + user.userid + "|" + user.username)
  }
  
  ngOnInit():void {
    alert('ngOnInit called user component')
  }
}
