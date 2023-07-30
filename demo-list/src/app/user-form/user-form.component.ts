import { Component, Input } from '@angular/core';
import { User } from '../user-component/user-model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  

  @Input()
  user!: User;
  @Input()
  show! :boolean;
  constructor () {
      this.show = true;
  }

  save() {

  }

  hideForm() {
    alert(this.show)
    this.show = false;
  }
}
