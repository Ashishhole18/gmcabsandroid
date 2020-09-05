import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { catchError, tap , map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enquiry } from '../interfaces/Enquiry';

@Injectable({
  providedIn: 'root'
})
export class YourridesService {

  constructor(private http:HttpClient) { }
  public cancelEnquiry(enq_id,enq):Observable<any>
  {
    return this.http.post("https://cors-anywhere.herokuapp.com/https://www.gmcabs.in/api/updateEnquiry/"+enq_id,enq,{responseType:'text' as 'json'});


  }

  public getYourRides(user_id): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>('https://www.gmcabs.in/api/getRides/'+user_id)
      .pipe(
        map(yourrides => yourrides.sort((a1: Enquiry, a2: Enquiry) => a2.enq_id - a1.enq_id )),
        catchError(this.handleError<Enquiry[]>('Get Enquiry', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
