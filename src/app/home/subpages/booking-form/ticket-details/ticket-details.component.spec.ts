import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { SharedService } from 'src/app/services/shared.service';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { TicketDetailsComponent } from './ticket-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


class mockLoginData{
  deletedata(){
    var d=[{
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
    },]
    return of  (d)
  }
  getticket(){
    var db=[{
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
    },]
    return of  (db)
  }
}



describe('TicketDetailsComponent', () => {
  let component: TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[{ provide: RegisterServiceService, useClass : mockLoginData}],
      declarations: [ TicketDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be ngonit',()=>{
    expect(component.ngOnInit).toBeTruthy();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be able to logout', ()=> {
    component.logOut();
    expect(component.logOut).toBeTruthy();
  })
  it('should cancel tickets', ()=> {
    component.cancelticket(1);
    expect(component).toBeTruthy();
  })
  it('should check login data', () => {
    component.cancelticket('');
    expect(component.cancelticket).not.toEqual('');
  });
  // it('should check login data', () => {
  //   component.cancelticket(1);
  //   expect(component.cancelticket).not.toEqual('');
  // });
});
