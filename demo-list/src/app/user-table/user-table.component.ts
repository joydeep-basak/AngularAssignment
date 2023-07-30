import { Component, Input } from '@angular/core';
import { User } from '../user-component/user-model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  @Input()
  users!: User[];
  user! : User
  show! : boolean
  get() {

  }
  constructor() {
    
  }

  delete(id:number) {
    alert(id);
  }

  select(id:number) {
    this.user = this.users[id];
    this.show = true;
    alert(this.user + '|' + this.show);
  }
}
