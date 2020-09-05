import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
})
export class DasboardPage implements OnInit {
  userData;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.userData=JSON.parse(localStorage.user)
    console.log(this.userData);

  }
  logout(){
    
    localStorage.removeItem('user');
    console.log(localStorage.getItem('user'));
    
    this.authService.logout();
    

}

 
}
