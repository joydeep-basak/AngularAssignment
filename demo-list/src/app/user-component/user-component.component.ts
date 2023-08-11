import { Component } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { User } from './user-model';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

  users!:User[] ;
  //  = [
  //   {
  //     userid:1,
  //     username: "name 1",
  //     address:"Address 1",
  //     pincode: "pincode 1"
  //   },
  //   {
  //     userid:2,
  //     username: "name 2",
  //     address:"Address 2",
  //     pincode: "pincode 2"
  //   },
  //   {
  //     userid:3,
  //     username: "name 3",
  //     address:"Address 3",
  //     pincode: "pincode 3"
  //   },
  // ];

  constructor (private userservice : UserService) {
    this.userservice = userservice;
    
    // alert('Constructor called user component')
      //this.users = 
  }

  updateUser(user:User) {
    console.log(user);
    let usr = new User();
        usr.userid = user.userid;
        usr.username = user.username;
        usr.address = user.address;
        usr.pincode = user.pincode;
    this.userservice.updateUser(usr);
  }

  insertUser(user:User) {
    let usr = new User();
        usr.userid = this.users.length + 1;
        usr.username = user.username;
        usr.address = user.address;
        usr.pincode = user.pincode;
    this.userservice.insertUser(usr);
  }
  
  ngOnInit():void {
    this.users = this.userservice.getAllUsers();
  }
}
