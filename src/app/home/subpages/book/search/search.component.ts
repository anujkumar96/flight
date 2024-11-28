import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
message:any;
date:any;
foundflight!:number;
ticketdata:any;
data:any;
d:any;
user:any;
  constructor(private _shared:SharedService , private _rout:Router, private _service:RegisterServiceService) { }

  ngOnInit(): void {
    this.user=this._shared.getUser();
    this.message=this._shared.getMessage();
    this.date=this._shared.getDate();
    this._shared.postflightdata(this.ticketdata)
    this.foundflight=this.message.length;
    localStorage.setItem('date' , JSON.stringify(this.date.depart)) ;
      }
  
  setlocal(da:any){
    const userdata = this.message.filter((res:any)=>{
      return  da === res.id;  
    })
    this.d=da;
    this._shared.setticketdata(this.d)
  
    localStorage.setItem('userdata',JSON.stringify(userdata));
    this._rout.navigate(['booking-form']);

    this.ticketdata=this.date;
      this._shared.setticketdata(this.ticketdata);
     
  }
  userLogin(){

    if (this.user) {
           alert('login');
      this._rout.navigate(['/booking-form']);
    }
     else {
      alert('Login first to book tickets');
      this._rout.navigate(['/login']);
    }
  }



}
