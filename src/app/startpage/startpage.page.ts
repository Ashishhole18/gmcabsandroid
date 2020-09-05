import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.page.html',
  styleUrls: ['./startpage.page.scss'],
})
export class StartpagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("instart up");

    setTimeout(() => {

      this.router.navigate(['startpage/slider']);
  }, 3000);
  }
  ionViewWillEnter()
  {
    console.log("instart up");
    setTimeout(() => {

      this.router.navigate(['startpage/slider']);
  }, 3000);

  }

}
