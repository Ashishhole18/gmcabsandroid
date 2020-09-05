import { Component, OnInit } from '@angular/core';
import { OtpserviceService } from 'src/app/services/otpservice.service';
import { UserRegister } from 'src/app/models/userreg.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators,FormControl} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isMobileAvail;
  verifyFlag=false;
  otpflag=false;
  isDisabled=false;
  user:UserRegister;
  phonenumberResult;
  otpProgress;
  code;
  codeResult;
  errmsg;
  phver=true;
  isMobileerr;
  userRegistrationResult;
  userData;
  success;
  

  constructor(private otpService:OtpserviceService,private authService: AuthenticationService, private formBuilder: FormBuilder,
    private userSrv:UserService) {
    this.user=new UserRegister("","",undefined,"");
   }

   get name() {
    return this.registrationForm.get("name");
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get mobile() {
    return this.registrationForm.get('mobile');
  }
  get password() {
    return this.registrationForm.get('mobile');
  }
  get confirm_password() {
    return this.registrationForm.get('mobile');
  }
  get OTP()
  {
    return this.registrationForm.get('code');
  }
 
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    email: [
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    mobile: [
      { type: 'required', message: 'mobile number is required' },
      { type: 'pattern', message: 'Please enter a valid mobile number' }
    ],
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'pattern', message: 'Please enter a valid password' }

    ],
    OTP: [
      { type: 'required', message: 'OTP is required' },
      { type: 'pattern', message: 'Please enter a valid mobile number' }
    ],
    confirm_password: [
      { type: 'required', message: 'password is required' },
      { type: 'areEqual', message: 'Please enter a same password' }
    ]
  };
  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    mobile: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9]{10}$')
      ]
    ],
    OTP: [
      '',
      [
        Validators.required,
        
      ]
    ],
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
   ]))
    
  });

  public submit() {

    console.log(this.registrationForm.value);
    this.userSrv.newUser(this.user).subscribe(
      result=>
      {
        this.userRegistrationResult=result;
        console.log(this.userRegistrationResult);
        
          this.userSrv.checkUserAvils(this.user.mobile).subscribe(
            result=>
            {
              this.userData=result.data[0];
              console.log(this.userData);
              localStorage.removeItem('user');
              localStorage.setItem('user',JSON.stringify(this.userData));
              this.authService.login();

            }
          )
        }
        

      
    )
  }

  ngOnInit() {
  }

  sendOTP()
  {

    this.userSrv.checkUserAvils(this.user.mobile).subscribe(
      result=>
      {
        this.isMobileAvail=result;
        console.log(this.isMobileAvail);
        
        
        if(this.isMobileAvail.success)
        {
          this.isMobileerr="Account already exist";

        }
        else{

          this.otpProgress=true;

          this.otpService.login(this.user.mobile).subscribe(
            result=>{
              this.phonenumberResult=result;
              this.otpProgress=this.phonenumberResult.valid;
              if(!this.otpProgress)
              {
                this.otpflag=true;
                this.verifyFlag=false;
              }
      
            }
          );
        }
        

      },
      error=>
      {
        

      }

    );


    
  }
  disInput()
  {


    this.otpService.verify(this.user.mobile,this.code).subscribe(
      result=>
      {
       this.codeResult=result;
       console.log(this.user.mobile)
       console.log(this.codeResult.valid)
       console.log(this.code)
       this.otpProgress=false;
       if(this.codeResult.valid)
       {
        this.isDisabled=true;
        this.otpflag=false;
        this.phver=false;
 
       }
       else{

         this.errmsg="OTP is invalid";
 
       }
 
      }
     
    )}

}

