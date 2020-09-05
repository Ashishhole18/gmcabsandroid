import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { YourridesService } from 'src/app/services/yourrides.service';
import { EnquiryModel } from 'src/app/models/enquiry.model';
import { Enquiry } from '../../../interfaces/Enquiry';
import { AlertController } from '@ionic/angular';
import { UpdateEnq } from 'src/app/models/updateenq.model';


@Component({
  selector: 'app-yourrides',
  templateUrl: './yourrides.page.html',
  styleUrls: ['./yourrides.page.scss'],
})
export class YourridesPage implements OnInit {

  enqiry:EnquiryModel={picup_time:"",dropoff_location:"",email:"",fullname:"",mobile:"",picup_date:"",picup_location:"",vehicle_id:"",added_by:0,enq_status:""};
  userData;
  Rides: any = [];
  flag: any = 0;
  len=undefined;
  spinner=true;
  updateEnq:UpdateEnq;
  enquiryUpdateData;
  constructor(
    private authService: AuthenticationService, 
    private yourrides:YourridesService,
    private http: HttpClient, 
    private fb: FormBuilder,
    private yourRidesAPI: YourridesService,
    private zone: NgZone,
    private router: Router,
    private altContrl:AlertController,
   
  
    ) { 
      this.updateEnq=new UpdateEnq("","");
    }

  ngOnInit() {
    this.userData=JSON.parse(localStorage.getItem('user'));
    console.log("localStorage",this.userData);
    this.enqiry.fullname=this.userData.fullname;
    this.enqiry.email=this.userData.email;
    this.enqiry.mobile=this.userData.mobile;
    console.log(this.userData.user_id);
    this.yourrides.getYourRides(this.userData.user_id).subscribe((res) => {
      console.log("Value in res",res);
      this.Rides = res;
      this.len=res.length;
      if(this.len)
      {
        this.spinner=false

      }else{
        this.spinner=false;
      }
      console.log(this.Rides);
  });
}
doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    this.yourrides.getYourRides(this.userData.user_id).subscribe((res) => {
      console.log("Value in res",res);
      this.Rides = res;
      this.len=res.length;
      if(this.len)
      {
        this.spinner=false

      }
      console.log(this.Rides);
  });
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

cancelEnquiry(enq_id)
{
  console.log("cancel Enquiry"+enq_id);
  this.altContrl.create({
    header: 'cancel ride?',
    
    cssClass: 'my-custom-alert',
    message: 'Please tell us why you want to cancel ride.',
    inputs : [
    {
        type:'radio',
        label:'Driver denied to go destination.',
        value:'Driver denied to go destination.'
    },
    {
        type:'radio',
        label:'Driver denied to come to pickup.',
        value:'Driver denied to come to pickup.'
    },
    {
      type:'radio',
      label:'Expected a shorter time wait.',
      value:'Expected a shorter time wait.'
    },
    {
      type:'radio',
      label:'Unable to contact driver.',
      value:'Unable to contact driver.'
    },
    {
      type:'radio',
      label:'My reason is not listed.',
      value:'My reason is not listed.'
    }
  ],
    buttons:[{
      text:"Don't Cancel",
      role:'cancel'
    },
    {
      text:'Cancel Ride',
      
      handler:(data)=>
      {
        this.Rides=undefined
        this.spinner=true;
        console.log(data);
        this.updateEnq.enq_status="8";
        this.updateEnq.message=data;
        this.yourRidesAPI.cancelEnquiry(enq_id,this.updateEnq).subscribe(
          result=>
          {
            this.enquiryUpdateData=JSON.parse(result);
            console.log(this.enquiryUpdateData.success);
            
            if(this.enquiryUpdateData.success)
            {
              this.spinner=false;
             
              this.altContrl.create({
                header:'Success',
                message:'Your ride cancelled  successfully',
                buttons:[{
                  text:'Ok',
                  handler:()=>
                {
                  this.router.navigate(['member/dashboard']);
                }
              }
                
              ]
              }).then(alertEle=>
                {
                  alertEle.present();
                })
            }

          }
        )
        
        
      }
    }
  ]
  }).then(alertEle=>
    {
      alertEle.present();
    })
  
}



  logout(){
    localStorage.clear();
    localStorage.removeItem('user');
    this.authService.logout();
}


}
