import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../interfaces/user.model';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public login(data:User){
    return this.httpClient.post('https://dummyjson.com/auth/login', data);
  }
}
