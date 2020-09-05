import { Component, OnInit } from '@angular/core';
import { Plugins, SplashScreen } from '@capacitor/core';
import { Platform, MenuController } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  state;
  userData;
  subscribe:any;
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private  authService: AuthenticationService,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name == "AppComponent")
      {
        if(window.confirm("Do you want to exit app"))
        {
          navigator["app"].exitApp();
        }
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      SplashScreen.show({
        showDuration: 2000,
        autoHide: true
      });

      this.authService.authenticationState.subscribe(state =>{
        console.log('Auth changed :',state);
        this.state=state;
        
        if(state==undefined) {
          console.log(state);
          return;
          
         

        } else if(state){
          this.userData=JSON.parse(localStorage.user)
          console.log(this.userData);
          console.log(state);
          this.router.navigate(['member','dashboard']);
        }
        else if(!state){
          this.router.navigate(['startup']);
        }
      })

    });
    
    
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
