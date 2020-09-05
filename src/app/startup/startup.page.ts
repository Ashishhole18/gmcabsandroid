import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.page.html',
  styleUrls: ['./startup.page.scss'],
})
export class StartupPage {

  constructor(private router: Router,private autsrv:AuthenticationService) { }

  
  ionViewWillEnter()
  {
    this.autsrv.authenticationState.subscribe(state =>{
      console.log('Auth changed :',state);
      
      if(state){
        console.log(state);
        this.router.navigate(['member','dashboard']);
      }
      else if(!state){
        setTimeout(() => {
          console.log("hello")
    
          this.router.navigate(['startpage/slider']);
      }, 2000);
      }
    })

    
 

  }

}
