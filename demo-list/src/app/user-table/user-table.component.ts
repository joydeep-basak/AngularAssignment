import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from '../user-component/user-model';
import { UserFormComponent } from '../user-form/user-form.component';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {

  @Input()  users!: User[];
  @ViewChild(UserFormComponent) component!: UserFormComponent;
   user! : User
  //  show! : boolean
   newuser! : boolean

   @Output() insertEventEmitter = new EventEmitter();
   @Output() updateEventEmitter = new EventEmitter();
  
  constructor() {
    console.log('In Constructor component is ::', this.component)
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("UserFormComponent:", this.component);
  }  

  delete(id:number) {
    this.users.splice(id, 1);
  }

  addNew() {
    alert('New User')
    // this.show = true;
    this.user = {
      userid:this.users.length + 1,
      username: "",
      address:"",
      pincode: ""
    }
    this.newuser = true;
    // this.show = true;
  }

  addNewUser(user: User) {
    console.log(user)
    this.insertEventEmitter.emit(user);
    
  }

  updateUser(user: User) {
    alert('Event Emit called update')
    // for(var i = 0; i < this.users.length; i++) {
    //     if (this.users[i].userid == user.userid) {
    //       this.users[i] = user;
    //     }
    // }
    this.updateEventEmitter.emit(user);
   }
  

  select(id:number) {
    // this.users[id -1];
    let usr = new User();
        usr.userid = this.users[id -1].userid;
        usr.username = this.users[id -1].username;
        usr.address = this.users[id -1].address;
        usr.pincode = this.users[id -1].pincode;
        this.user = usr;
    console.log('User Selected from Table compoenent',this.user)
    // this.show = true;
    this.newuser = false;
    var refToThis = this;
    setTimeout(function(){
      refToThis.show();
 }, 20);
  }

  show() {
    this.component.show(this.user);
  }

}


