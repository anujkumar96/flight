import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  dateToday="";
  timeNow="";
  ngOnInit(): void {
    this.dateToday=new Date().toDateString();
    this.timeNow=new Date().toLocaleTimeString();
  }

}
