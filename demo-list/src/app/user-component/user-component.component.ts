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
    this.users.push(user);
    alert('User updated event called ' + user.userid + "|" + user.username)
  }
  
  ngOnInit():void {
    // alert('ngOnInit called user component')
  }
}
