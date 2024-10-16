import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginResponce, User } from '../interfaces/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public login(data:User):Observable<LoginResponce>{
    return this.httpClient.post<LoginResponce>('https://dummyjson.com/auth/login', data);
  }
}
