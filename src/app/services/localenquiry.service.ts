import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Local } from '../interfaces/local';
import { City } from '../interfaces/City';
import { Vehicle_Type } from '../interfaces/Vehicle_Type';
import { Vehicle } from '../interfaces/Vehicle';
//import { Enquiry } from '../interfaces/Enquiry';
//import { EnquiryModel } from '../models/enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class LocalenquiryService {

  
  constructor(private http: HttpClient) { }

  public newEnquiry(enquiry):Observable<any>
  {
    return this.http.post("https://cors-anywhere.herokuapp.com/https://www.gmcabs.in/api/addEnquiry",enquiry,{responseType:'text' as 'json'});


  }

 
  getLocal(city_id): Observable<Local[]> {
    return this.http.get<Local[]>('https://www.gmcabs.in/api/getlocalbyid/'+city_id)
      .pipe(
        tap(locals => console.log('local fetched!')),
        catchError(this.handleError<Local[]>('Get locals', []))
      );
  }

  getCity(): Observable<City[]> {
    return this.http.get<City[]>('https://www.gmcabs.in/api/getcity')
    .pipe(
      tap(city => console.log('city fetched!')),
      catchError(this.handleError<City[]>('Get City', []))
      );
  }

  getVehicleType(): Observable<Vehicle_Type[]> {
    return this.http.get<Vehicle_Type[]>('https://www.gmcabs.in/api/getvehicletype')
    .pipe(
      tap(vehicletype => console.log('Vehicle Type fetched!')),
      catchError(this.handleError<Vehicle_Type[]>('Get Vehicle Type', []))
      );
  }
  getVehicle(vehicle_id): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('https://www.gmcabs.in/api/getVehicleById/'+vehicle_id)
    .pipe(
      tap(vehicletype => console.log('Vehicle fetched!')),
      catchError(this.handleError<Vehicle[]>('Get Vehicle', []))
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
