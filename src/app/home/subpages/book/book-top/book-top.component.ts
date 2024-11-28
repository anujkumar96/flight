import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-book-top',
  templateUrl: './book-top.component.html',
  styleUrls: ['./book-top.component.css']
})
export class BookTopComponent implements OnInit {
book!:FormGroup;
minDate:any;
user:any;
constructor(private _service:RegisterServiceService, private _route:Router, private _shared:SharedService) { }


  ngOnInit(): void {
this.user=this._shared.getUser();
 
this.getDate();
    this.book=new FormGroup({
      from : new FormControl('',Validators.required),
      to : new FormControl('',Validators.required),
      depart : new FormControl('',[Validators.required])
    })
    
  }

getDate(){
  var date:any=new Date();
  var toDate:any=date.getDate();
  if(toDate<10){
    toDate="0"+toDate;
  }
  var month:any=date.getMonth()+1;
  if(month<10){
    month="0"+month; 
  }
  var year=date.getFullYear(); 
  this.minDate = year + "-" + month + "-" + toDate;
  }


  userLogin(){

    if (this.user) {
      this._route.navigate(['/ticket-details']);
    }
     else {
      alert('Login first to view previous bookings');
      this._route.navigate(['/login']);
    }
  }



  bookticket(){
  this._service.getflight().subscribe(res=>{

    const customer=res.filter((data:any)=>{
   
   return (data.from.toUpperCase() ===this.book.value.from.toUpperCase() && data.to.toUpperCase()===this.book.value.to.toUpperCase())
    })
   
    this._shared.setMessage(customer);
    this._shared.setDate(this.book.value);
   
    if (customer) {
      this.book.reset();
      // alert('Flight found between these given routes');
      this._route.navigate(['/search'])
      
    } else {
      alert('Flight Not Found');
    }
  },
  // (err) => {
  //   alert('something went wrong');
  // }   
  );
}


}