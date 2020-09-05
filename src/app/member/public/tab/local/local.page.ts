import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalenquiryService } from 'src/app/services/localenquiry.service';
import { EnquiryModel } from 'src/app/models/enquiry.model';
import { City } from 'src/app/models/city.model';




@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
  spinner=false;
  Locals: any = [];
 
  city:City[];
  VehicleTypes: any = [];
  Vehicles: any = [];
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  enqiry:EnquiryModel={picup_time:"",dropoff_location:"",email:"",fullname:"",mobile:"",picup_date:"",picup_location:"",vehicle_id:"",added_by:0,enq_status:"1"};
  localForm: FormGroup;
  userData;
  isItemAvailable = false;
  constructor(
    private localenquiryService: LocalenquiryService, 
    private http: HttpClient, 
    private fb: FormBuilder,
    private localenquiryAPI: LocalenquiryService,
    private zone: NgZone,
    private router: Router,
    
    ) {
    
     /* this.localForm = this.fb.group({
        picup_location: [''],
        dropoff_location: [''],
        picup_date: [''],
        picup_time: [''],
        vehicle_id: [''],
    })*/
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }
  ngOnInit() {


    this.userData=JSON.parse(localStorage.getItem('user'))
    console.log(this.userData);
    this.enqiry.fullname=this.userData.fullname;
    this.enqiry.email=this.userData.email;
    this.enqiry.mobile=this.userData.mobile;
    this.enqiry.added_by=this.userData.user_id;
    this.localenquiryService.getCity().subscribe((res) => {
      console.log(res)
      this.city = res;
      console.log("City Response",this.city);
      
    })

    this.localenquiryService.getVehicleType().subscribe((res) => {
      console.log(res)
      this.VehicleTypes = res;
      console.log("VehicleTypes Response",this.VehicleTypes);
      
    })
    this.localForm = new FormGroup({
      city_name: new FormControl(''),
      picup_location: new FormControl(''),
      dropoff_location: new FormControl(''),
      picup_date: new FormControl(''),
      picup_time: new FormControl(''),
      vehicle_type : new FormControl(''),
      vehicle_name : new FormControl('')    
    });
    
  }



  async filterList(evt) {
    const val = evt.target.value;

      console.log(val)
      if (val && val.trim() !== '') {
        console.log("in");
        
        this.isItemAvailable = true;
        this.city = this.city.filter((item) => {
            return (item.city_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.isItemAvailable = false;
    }


  }


  

  onChangeCity(city_id) {

    console.log('Selected', city_id);
    if (city_id) {
      this.localenquiryService.getLocal(city_id).subscribe(
        data => {
          this.Locals = data;
        }
      );
    } else {
      this.Locals = null;
    }
  }
  onChangeVehicleType(vehicle_type_id) {

    console.log('Selected', vehicle_type_id);
    if (vehicle_type_id) {
      this.localenquiryService.getVehicle(vehicle_type_id).subscribe(
        data => {
          this.Vehicles = data;
        }
      );
    } else {
      this.Vehicles = null;
    }
  }

  onFormSubmit() {
    this.spinner=true;

    if (!this.localForm.valid) {
      return false;
    } else {
      
      this.localenquiryAPI.newEnquiry(this.enqiry).subscribe(
        result=>{
          console.log(result);
          this.localForm.reset();
          if(result)
          {
            this.spinner=false;
          }
          
        },err=>
        {
          console.log(err);
          
        }
      )
    }
   console.log(this.enqiry);
   
  }
}
