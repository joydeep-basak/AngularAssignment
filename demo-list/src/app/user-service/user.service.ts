import { Injectable } from '@angular/core';
import { MockServiceService } from '../mock-service.service';
import { User } from '../user-component/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private mockservice: MockServiceService) { }

  updateUser(user:User) {
    console.log(user);
    this.mockservice.updateUser(user);
  }

  insertUser(user:User) {
    this.mockservice.insertUser(user);
  }

  getAllUsers() {
    return this.mockservice.getAllUsers();
  }
}
