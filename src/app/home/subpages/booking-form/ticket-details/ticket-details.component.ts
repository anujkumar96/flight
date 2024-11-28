import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  userid:any
  val:any
  id:any;
ticketdata:any;
  constructor( private rout :Router , private _service:RegisterServiceService, private _shared:SharedService) { }
  ngOnInit(): void {
    this.ticketdata=this._shared.getticketdata();
    this.userid =localStorage.getItem('userid');
     this.id= JSON.parse(this.userid);
    this._service.getticket().subscribe((res:any)=>{
      const data =res.filter((d:any)=>{

        return this.id == d.userId
      })
    this.val=  data
    })

  }
  logOut(){
    this.rout.navigate(['login']) 
     }

     cancelticket(data:any){
      this._service.deletedata(data).subscribe(res=>{
        this.val=this.val.find((item:any)=>item.data!=data);
        window.alert('succesfully delete');
        this.rout
    });
     }


    }
    
    