import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public checkUserAvils(mobile):Observable<any>
  {
    return this.http.get("https://www.gmcabs.in/api/getwhere/tbl_users/mobile/"+mobile).pipe(
      tap(
        result=>
        {
          console.log(result);
          
        }
      )
    )
  }

  public newUser(user):Observable<any>
  {
    return this.http.post("https://www.gmcabs.in/api/createuser",user,{responseType:'text' as 'json'});


  }

  public LoginCheck(user):Observable<any>
  {
    return this.http.post("https://www.gmcabs.in/api/login",user,{responseType:'text' as 'json'});


  }

 

  public checkMobile(mobile):Observable<any>
  {
    
    return this.http.get("http://localhost:3000/usermobile/"+mobile).pipe(
      tap(
        result=>
        {
          console.log(result)
        }
      )
    );
  }


  public getUserByMobile(mobile):Observable<any>
  {
    
    return this.http.get("http://localhost:3000/userdetails/"+mobile).pipe(
      tap(
        result=>
        {
          console.log(result)
        }
      )
    );
  }
}


