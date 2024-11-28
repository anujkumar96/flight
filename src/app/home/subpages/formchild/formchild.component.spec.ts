import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { SharedService } from 'src/app/services/shared.service';
import { FormchildComponent } from './formchild.component';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

let ob={date: "2022-07-01",
destination: "dubai",
dob: "1997-01-06",
endtime: "02:00",
gender: "Male",
mobile: "8077165301",
name: "aman",
price: "27000",
serviceprovider: "Emirates",
source: "delhi",
starttime: "19:00",
userId: "2"
}

// class mockData {
//   ticket() {
//     var data = [
//       {
//         date: "2022-06-29",
//         destination: "helsinki",
//         dob: "1995-06-15",
//         endtime: "05:00",
//         gender: "Male",
//         id: 18,
//         mobile: "8077165301",
//         name: "aman",
//         price: "170000",
//         serviceprovider: "Turkish Airlines",
//         source: "delhi",
//         starttime: "11:00",
//         userId: "2"
        
//       },
      
//     ];
//     return of (data);
//   }
//   }



class mockLoginData {

ticket(ob:any) {
  var dat = [
    {
      date: "2022-06-23",
destination: "chennai",
dob: "1997-02-11",
endtime: "15:00",
gender: "Male",
id: 14,
mobile: "8077165301",
name: "anuj",
price: "10000",
serviceprovider: "Air India",
source: "delhi",
starttime: "14:00",
userId: "2"
    },
    
  ];
  return of (dat);
}
}

describe('FormchildComponent', () => {
  let component: FormchildComponent;
  let fixture: ComponentFixture<FormchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[{ provide: SharedService,RegisterServiceService, useClass : mockLoginData}],
      declarations: [ FormchildComponent ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it ('should be ngon it',()=>{
   component.ticketdata
    expect(component.ngOnInit).not.toBeNull;
  })


  it('should be create',()=>{
    expect(component).toBeTruthy()
  })

  it('should be able to book tickets', ()=> {
  component.bookticket() 
    expect(component.bookticket);
});

});










// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RegisterServiceService } from 'src/app/services/register-service.service';
// import { SharedService } from 'src/app/services/shared.service';
// import { FormchildComponent } from './formchild.component';
// import { RouterTestingModule } from '@angular/router/testing';

// import { of } from 'rxjs';

// let ob = {
//   date: '2022-07-01',
//   destination: 'dubai',
//   dob: '1997-01-06',
//   endtime: '02:00',
//   gender: 'Male',
//   mobile: '8077165301',
//   name: 'aman',
//   price: '27000',
//   serviceprovider: 'Emirates',
//   source: 'delhi',
//   starttime: '19:00',
//   userId: '2',
// };

// // class mockData {
// //   ticket() {
// //     var data = [
// //       {
// //         date: "2022-06-29",
// //         destination: "helsinki",
// //         dob: "1995-06-15",
// //         endtime: "05:00",
// //         gender: "Male",
// //         id: 18,
// //         mobile: "8077165301",
// //         name: "aman",
// //         price: "170000",
// //         serviceprovider: "Turkish Airlines",
// //         source: "delhi",
// //         starttime: "11:00",
// //         userId: "2"

// //       },

// //     ];
// //     return of (data);
// //   }
// //   }

// class MockRegisterService {
//   ticket(data3: any) {
//     let a = {
//       name: 'avinash',
//       mobile: '8077165301',
//       dob: '1996-09-17',
//       gender: 'Male',
//       numOfTicket: 2,
//       userId: '1',
//       serviceprovider: 'Singapore Airlines',
//       source: 'delhi',
//       destination: 'manilla',
//       starttime: '07:00',
//       date: '2022-06-22',
//       endtime: '16:00',
//       price: '34000',
//       id: 7,
//     };
//     return of(a);
//   }
// }

// class mockLoginData {
//   ticket(ob: any) {
//     var dat = [
//       {
//         date: '2022-06-23',
//         destination: 'chennai',
//         dob: '1997-02-11',
//         endtime: '15:00',
//         gender: 'Male',
//         id: 14,
//         mobile: '8077165301',
//         name: 'anuj',
//         price: '10000',
//         serviceprovider: 'Air India',
//         source: 'delhi',
//         starttime: '14:00',
//         userId: '2',
//       },
//     ];
//     return of(dat);
//   }
// }

// describe('FormchildComponent', () => {
//   let component: FormchildComponent;
//   let fixture: ComponentFixture<FormchildComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule],
//       providers: [
//         {
//           provide: SharedService,
//           RegisterServiceService,
//           useClass: mockLoginData,
//         },
//         { provide: RegisterServiceService, useClass: MockRegisterService },
//       ],
//       declarations: [FormchildComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FormchildComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be ngon it', () => {
//     component.ticketdata;
//     expect(component.ngOnInit).not.toBeNull;
//   });

//   it('should be create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should be able to book tickets', () => {
//     component.bookticket();
//     expect(component.bookticket);
//   });

//   it('should call dasdkasn', () => {
//     component.ticketbook.setValue({
//       name: 'avinash',
//       mobile: '8077165301',
//       dob: '1996-09-17',
//       gender: 'Male',
//       numOfTicket: 2,
//       userId: '1',
//       serviceprovider: 'Singapore Airlines',
//       source: 'delhi',
//       destination: 'manilla',
//       starttime: '07:00',
//       date: '2022-06-22',
//       endtime: '16:00',
//       price: '34000',
//       id: 7,
//     });
//     spyOn(component, 'bookticket');
//     component.bookticket();
//   });
// });
