import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { LoginResponce } from '../interfaces/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public user!: LoginResponce; 

  constructor(private storageService: StorageService, private router: Router){}

  public ngOnInit(): void {
    this.user=this.storageService.getUser()

  }

  public logout(){
    this.storageService.deleteUser();
    this.router.navigate(['/login']);
    
  }
}
