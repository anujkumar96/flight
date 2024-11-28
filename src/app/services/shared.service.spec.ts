import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
let data=5;

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it ('should be able to fetch data of booked flights',()=>{
    service.setMessage(data);
  })
  it ('should be able to post data of booked flights',()=>{
    service.getMessage();
  })
  it ('should be able to fetch data of tickets',()=>{
    service.setDate(data);
  })
  it ('should be able to post data of tickets',()=>{
    service.getDate();
  })
  it ('should be able to fetch data of booked flights',()=>{
    service.setticketdata(data);
  })
  it ('should be able to fetch data flights',()=>{
    service.getticketdata();
  })
  it ('should be able to post data of flights',()=>{
    service.postflightdata(data);
  })
  it ('should be able to get data of booked flights',()=>{
    service.getfldata();
  })
  it ('should be able to add data to booked flights',()=>{
    service.setUser(data);
  })
  it ('should be able to retrive data of booked flights',()=>{
    service.getUser();
  })

  it ('should be able to retrive data of getuserdata',()=>{
    service.getuserdata();
  })
  
});
