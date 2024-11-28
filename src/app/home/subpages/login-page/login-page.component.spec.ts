import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { SharedService } from 'src/app/services/shared.service';
import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';


class _mockLoginData {
  getuserdata() {
  let dat = [
      {
        "name": "avinash",
        "email": "avi@gmail.com",
        "username": "avinash",
        "password": "123",
        "cpassword": "123",
        "mobile": "8077165301",
        "id": 1
      }
      
    ];
    return of (dat);
  }
  }


describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ LoginPageComponent ],
      providers:[FormBuilder,LoginPageComponent,{ provide: SharedService, useClass : _mockLoginData}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should able to login', ()=> {
    component.login();
    expect(component).toBeTruthy();
  })
  it('should be able to book tickets', ()=> {
    component.logindata.reset();
    expect(component).toBeTruthy();
  })
  it('should be loginFormValue', () => {
    component.logindata.setValue({
      "username": "avinash",
      "password": "123"
    });
    spyOn(window, 'alert');
    component.login();
    expect(window.alert)
  });
  it('should be loginFormValuefaa', () => {
    component.logindata.setValue({
      "username": "avinashhh",
      "password": "12345",
    });
    
    spyOn(window, 'alert');
    component.login();
    expect(window.alert)
  });
  
});

