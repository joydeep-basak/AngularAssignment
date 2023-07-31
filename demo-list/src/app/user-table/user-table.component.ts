import { Component, Input } from '@angular/core';
import { User } from '../user-component/user-model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  @Input()  users!: User[];
   user! : User
   show! : boolean
   newuser! : boolean
  
  constructor() {
    
  }

  delete(id:number) {
    this.users.splice(id, 1);
  }

  addNew() {
    this.show = true;
    this.user = {
      userid:0,
      username: "",
      address:"",
      pincode: ""
    }
    this.newuser = true;
    this.show = true;
  }

  addNewUser(user: User) {
    console.log(user)
    this.users.push(user)
    alert(this.users.length)
  }

  updateUser(user: User) {
    alert('Event Emit called update')
    for(var i = 0; i < this.users.length; i++) {
        if (this.users[i].userid == user.userid) {
          this.users[i] = user;
        }
    }
   }
  

  select(id:number) {
    this.user = this.users[id -1];
    this.show = true;
    this.newuser = false;
  }
}
