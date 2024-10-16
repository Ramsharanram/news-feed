import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string='';
  public password: string='';

  constructor(private commonService: CommonService){}


 public login(){
  const data: User={
    username: this.username,
    password: this.password
  }
  this.commonService.login(data).subscribe(Response=>{
    console.log(Response)
  })
 }
}
