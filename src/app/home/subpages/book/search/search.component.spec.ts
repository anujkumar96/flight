import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { SharedService } from 'src/app/services/shared.service';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


class _mockLoginData{


  deletedata(){
   let d=[{
      duration: "14 hr",
      endtime: "04:00",
      from: "delhi",
      id: 55,
      price: 70000,
      serviceprovider: "Malaysian Airlines",
      starttime: "14:00",
      to: "canberra"
    }]
    return of (d)
  }
}
class userLogin{


  deletedata(){
    let d=[{
      "name": "avinash",
      "email": "avi@gmail.com",
      "username": "avinash",
      "password": 123,
      "cpassword": 123,
      "mobile": 8077165301,
      "id": 1
    },]
    return of (d)
  }
}
let da=2;

 
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ SearchComponent ],
      providers:[{provide:RegisterServiceService,SharedService,useClass:_mockLoginData}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should check login data', () => {
    component.setlocal(da);
    expect(component.setlocal);
  });
  it('should add to cart', ()=> {
    component.userLogin();
    expect(component).toBeTruthy();
  })
  it('should add to cart', ()=> {
   expect(component.ngOnInit()).toBeTruthy();
  })


 it('should be loginFormValue', () => {
   component.user.setValue({
     "username": "avinash",
     "password": 123,
   });
   component.userLogin();
   spyOn(window, 'alert');
   
   expect(window.alert);
 });
 it('should be loginForm-Value', () => {
   component.user.setValue({
     "password": 12345,      
     "username": "avinashhh"
   
   });
   
   spyOn(window, 'alert');
   component.userLogin();
   expect(window.alert).toBeFalse()
 });

});
