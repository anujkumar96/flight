import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-previous-booking',
  templateUrl: './previous-booking.component.html',
  styleUrls: ['./previous-booking.component.css']
})
export class PreviousBookingComponent implements OnInit {
ticketdata:any;
  constructor(private _shared:SharedService) { }

  ngOnInit(): void {
    this.ticketdata=this._shared.getticketdata();
    }

}
