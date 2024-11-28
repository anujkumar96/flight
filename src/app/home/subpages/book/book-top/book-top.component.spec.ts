import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { SharedService } from 'src/app/services/shared.service';
import { BookTopComponent } from './book-top.component';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Component, DebugElement, ErrorHandler } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


class mockLoginData{
  getflight(){
    var customer=[{
      duration: "14 hr",
      endtime: "04:00",
      from: "delhi",
      id: 55,
      price: 70000,
      serviceprovider: "Malaysian Airlines",
      starttime: "14:00",
      to: "canberra"
    }]
    return of (customer)
  }
}



describe('BookTopComponent', () => {
  let bookComponent: BookTopComponent;
  let fixture: ComponentFixture<BookTopComponent>;
  let debugEl:DebugElement;
  let registerService:RegisterServiceService;
  let registerServiceSpy:{book:jasmine.Spy};
  let routerSpy :{navigateByUrl:jasmine.Spy};
  let router:Router;

  let page:mockLoginData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTopComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[{provide:RegisterServiceService,SharedService,useClass:mockLoginData}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTopComponent);
    bookComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(bookComponent).toBeTruthy();
  });
  it('should be able to login for booking',()=>{
    expect(bookComponent.getDate()).not.toBeNull;
  })
  it("should disable booking on previous dates", () => {
    expect(bookComponent.getDate).toBeDefined();
});
  it('should be able to book tickets', ()=> {
    bookComponent.bookticket();
    expect(bookComponent).toBeTruthy();
  })
  it("should be able to login", () => {
    bookComponent.userLogin();
    expect(bookComponent.userLogin).toBeTruthy();
});
// it('checking details',()=>{
//   page.searchValue(page.getflight,'from');
//   expect(bookComponent.user).toBe('from');
//   // expect(bookComponent.password).toBe('');
//   // page.submitButton.click();
//   fixture.detectChanges();
//   expect(bookComponent.user).toBe('you have a error');
//   expect(page.errorMsg.textContent).toBe(bookComponent.user)
// })

// it('correctly handles error', inject([ErrorHandler], (service: ErrorHandler) => {
//   const spy = alert(console,);
//   const error: Error = new Error('ERROR');
//   service.handleError(error);
//   expect(spy).toHaveBeenCalledWith(error);
// }));


// it('should have navigation solution', ()=>{
//   bookComponent.bookticket();
// })
});
