import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {

  constructor(private http:HttpClient) { }

  public login(phoneno):Observable<any>
  {
    return this.http.get("https://gmcab.herokuapp.com/login?phonenumber=91"+phoneno+"&channel=sms").pipe(
      tap(
        result=>
        {
          console.log(result);
          
        }
      )
    );
  }
  public verify(phoneno,code):Observable<any>
  {
    return this.http.get("https://gmcab.herokuapp.com/verify?phonenumber=91"+phoneno+"&code="+code).pipe(
      tap(
        result=>
        {
          console.log(result)
        }
      )
    );
  }

}
