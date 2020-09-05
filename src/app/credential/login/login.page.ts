import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgOtpInputModule } from  'ng-otp-input';
import { OtpserviceService } from 'src/app/services/otpservice.service';
import { UserService } from 'src/app/services/user.service';
import { UserLogin } from 'src/app/models/userlogin.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  spinner=false;
  flag=false;
  otpflag=false;
  phonenumber;
  phonenumberResult;
  code;
  codeResult;
  otpProgress;
  errmsg;
  passwordType: string ='password';
  passwordShow: boolean = false;
  userData;
  loggedUserData;
  userlogin:UserLogin;
  resterrmsg:string;

  constructor(private authService: AuthenticationService,private otpService:OtpserviceService,private usersrv:UserService) { 
    this.userlogin=new UserLogin("","")
  }

  public togglePassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = 'text';
    } else {
      this.passwordShow = true;
      this.passwordType = 'password';
    }
  }



  ngOnInit() {
  }

  change()
  {
    this.flag=true;
  }

  login()
  {
    
    this.usersrv.LoginCheck(this.userlogin).subscribe(
      
        result=>
        {
          this.spinner=true;
          this.userData=JSON.parse(result);
          console.log(this.userData);

          console.log(this.userData.message);
          if(this.userData.success==1)
          {
            localStorage.removeItem('user');
            localStorage.setItem('user',JSON.stringify(this.userData.data[0]));
            this.authService.login();

          }
          else{
            this.spinner=false;
            this.resterrmsg="User not found";

          }
        },err=>
        {
          this.resterrmsg="Something went wrong";

        }

      
    )
    
  }
  sendOTP()
  {

    this.usersrv.checkUserAvils(this.phonenumber).subscribe(
      result=>
      {
        console.log(result.success);
        this.userData=result;
        if(this.userData.success)
        {
          console.log("in mo");
          
          this.otpProgress=true;
          this.flag=false;
          this.otpflag=true;
          this.otpService.login(this.phonenumber).subscribe(
      result=>{
        console.log("in mo1");
        this.phonenumberResult=result;
        this.otpProgress=this.phonenumberResult.valid;

      }
    );

        }
        else{
          this.errmsg="user not found.please register first";
          
        }
      }

    ),
    error=>
    {
      this.errmsg="something went wrong";
    }
    
  }
  verify()
  {
    this.otpProgress=true;
    this.otpService.verify(this.phonenumber,this.code).subscribe(
     result=>
     {
      this.codeResult=result;
      console.log(this.codeResult.valid)
      this.otpProgress=false;
      if(this.codeResult.valid)
      {
        console.log(this.phonenumber)
      
            localStorage.removeItem('user');
            localStorage.setItem('user',JSON.stringify(this.userData.data[0]));
            console.log(localStorage.getItem('user'));
            
            this.authService.login();
      }
      else{
        this.errmsg="OTP is invalid";

      }

     }
    )

  }

}
