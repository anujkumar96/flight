import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv';
import { RegisterServiceService } from '../services/register-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service:RegisterServiceService) { }
emp:any;
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this._service.getUsers().subscribe((val) => {
      console.log(val);
      this.emp = val;

      console.log(this.emp['data']);
      this._service = this.emp['data'];
    });
  }

  download() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'User List',
      useBom: true,
      headers: ['id', 'name'],
    };
    new ngxCsv(this.emp['data'], 'employeedetails', options);
  }
}
