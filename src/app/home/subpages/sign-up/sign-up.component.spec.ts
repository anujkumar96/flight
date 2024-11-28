import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { SignUpComponent } from './sign-up.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';



class _mockLoginData{
  create(){
let d=[ {
      "name": "avinash",
      "email": "avi@gmail.com",
      "username": "avinash",
      "password": "123",
      "cpassword": "123",
      "mobile": "8077165301",
      "id": 1
    },]
    return of (d)
  }
}
describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[{provide:RegisterServiceService,useClass: _mockLoginData}],
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update',()=>{
    component.updateUserdata()
    expect(component).toBeTruthy();
  })
});
