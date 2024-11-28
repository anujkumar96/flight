import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
message:any;
date1:any;
ticket:any;
p:any;
u:any;
flightdata:any
  constructor(private _http: HttpClient) { }

  setMessage(data:any){
    this.message=data
  }
  getMessage(): any{
    return this.message
  }

  setDate(data2:any){
    this.date1=data2;
  }
getDate(){
  return this.date1;
}
setticketdata(data3:any){
  console.log("data3",)
       this.p=data3;
}
getticketdata():any{
  return this.ticket;
}

postflightdata(val:any){
this.flightdata =val
}


getfldata(){
  return this.p
}
setUser(v:any){
this.u=v;
}
getUser(){
  return this.u;
}


getuserdata(){
 return this._http.get('http://localhost:3000/users')
}
}











