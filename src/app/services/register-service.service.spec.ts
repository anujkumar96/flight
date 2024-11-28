import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RegisterServiceService } from './register-service.service';

let data2={
  "name": "anuj kumar",
  "email": "anuj@gmail.com",
  "username": "anuj",
  "password": "12",
  "cpassword": "12",
  "mobile": "7417814797",
  "id": 2
},
data3={
  "name": "aman",
  "mobile": "8077165301",
  "dob": "2022-06-09",
  "gender": "Male",
  "numOfTicket": 2,
  "userId": "2",
  "serviceprovider": "Air Asia",
  "source": "delhi",
  "destination": "chennai",
  "starttime": "06:00",
  "date": "2022-06-15",
  "endtime": "09:00",
  "price": "9000",
  "id": 5
},
id=2;

describe('RegisterServiceService', () => {
  let service: RegisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('should add data for new registered user',()=>{
    service.create(data2)
  });
  it ('should fetch data of flights',()=>{
    service.getflight()
  })
  it ('should add data of booked flights',()=>{
    service.ticket(data3);
  })
  it ('should be able to fetch data of booked flights',()=>{
    service.getticket();
  })
  it ('should be able to fetch data of booked flights',()=>{
    service.deletedata(id);
  })
});
