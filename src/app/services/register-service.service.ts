import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  url="http://localhost:3000/tickets"

  constructor(private _http:HttpClient) { }


  create(data2:any):Observable<any>{
    return this._http.post("http://localhost:3000/users",data2)  // for posting/adding the data in json file containing users data.
    }

   getflight(){
      return this._http.get<any>("http://localhost:3000/flightdata")  // for fetching the data from JSON file containing flight details.
      }

      ticket(data3:any):Observable<any> {
        return this._http.post("http://localhost:3000/tickets",data3)  // for adding/posting data of passengers in JSON file.
      }

      getticket(){
        return this._http.get<any> ("http://localhost:3000/tickets")  //for fetching tickets back of the logged in user.
      }
   
      deletedata(id:number):Observable<any>{
        return this._http.delete(`${this.url}/${id}`)     // this is for delete the data home com.
      }

// miscellaneous task for downloading data from MySQL in nxCsv format on click
getUsers() {
  return this._http.get('http://localhost:3000/employees');
}


}
