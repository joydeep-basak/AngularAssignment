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
  
  ngOnInit():void {

  }
}
