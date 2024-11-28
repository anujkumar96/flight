import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-formchild',
  templateUrl: './formchild.component.html',
  styleUrls: ['./formchild.component.css']
})
export class FormchildComponent implements OnInit {
  ticketbook!:FormGroup;
  id:any;
  userid:any;
  ticketdata:any;
  tdate:any;
  fdata:any
 
  constructor( private route:Router, private  _service:RegisterServiceService, private _shared:SharedService ) { }

  ngOnInit(): void {
 
    this.ticketdata =this._service.getflight();
   
    this.ticketbook=new FormGroup({
       name : new FormControl('',Validators.required),
       mobile : new FormControl('',Validators.required),
       dob : new FormControl('',Validators.required),
       gender : new FormControl('',Validators.required),
       userId : new FormControl ( '' , Validators.required),
       serviceprovider :new FormControl(''),
       source :new FormControl(''),
       destination :new FormControl(''),
       starttime :new FormControl(''),
       date :new FormControl(''),
       endtime :new FormControl(''),
       price :new FormControl('')
       });
       this.id=  localStorage.getItem('userid');
       this.userid = JSON.parse(this.id)
       this.tdate= localStorage.getItem('date');
       this.fdata=JSON.parse(this.tdate)
       
       this. ticketdata =this._shared.getfldata()

  
      
      }
       bookticket()
       {
          this._service.ticket(this.ticketbook.value).subscribe((res:any)=>{
           window.alert('Ticket booked successfully');
      
        
           localStorage.setItem('ticket',JSON.stringify(this.ticketbook.value))
           this.ticketbook.reset();
     
           this.route.navigate(['ticket-details'])
  
       
         },
        //  err=>{
        //    alert ("something went wrong")
        //  }
         )
     }
     }
    