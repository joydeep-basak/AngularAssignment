import { Injectable } from '@angular/core';
import { MockServiceService } from '../mock-service.service';
import { User } from '../user-component/user-model';
import { HttpService } from '../http/http.service';
import { ReturnModel } from '../http/return-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users: User[] | undefined;

  constructor(private mockservice: MockServiceService, private httpservice : HttpService) { }

  updateUser(user:User) {
    console.log(user);
    this.mockservice.updateUser(user);
  }

  insertUser(user:User) {
    this.mockservice.insertUser(user);
  }

   getAllUsers(): any {
    return this.httpservice.getData('http://localhost:9080/api/user/v1/allusers', undefined)
  }
}
