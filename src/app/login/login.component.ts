import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { LoginResponce, User } from '../interfaces/user.model';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  constructor(
    private commonService: CommonService,
    private storageService: StorageService,
    private router: Router
  ) {}

  public login() {
    const data: User = {
      username: this.username,
      password: this.password,
    };
    this.commonService.login(data).subscribe((Response: LoginResponce) => {
      console.log(Response);
      this.storageService.saveUser(Response);
      this.router.navigate(['/dashboard']);
    });
  }
}
