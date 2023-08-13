import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user-component/user-model';
import { ReturnModel } from './return-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getData(host: string, params : any) : Observable<ReturnModel> {
    return this.httpClient.get<ReturnModel>(host + (params == undefined? '':params))
     
  }


}
