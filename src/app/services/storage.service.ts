import { Injectable } from '@angular/core';
import { LoginResponce } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public saveUser(user: LoginResponce) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): LoginResponce {
    const data = localStorage.getItem('user');
    return JSON.parse(data || '{}');
  }

  public deleteUser(){
    localStorage.removeItem('user');
  }
}
