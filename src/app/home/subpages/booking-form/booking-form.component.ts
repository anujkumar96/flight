import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

z:any;
data:any;
ticketdata:any;
  constructor(  private _http:HttpClient , private router:Router, private _shared:SharedService) { }

  ngOnInit(): void {



 this.data= localStorage.getItem('userdata')
     this.z= JSON.parse( this.data)
 
     this._shared.setticketdata(this.z);
  
}

}
