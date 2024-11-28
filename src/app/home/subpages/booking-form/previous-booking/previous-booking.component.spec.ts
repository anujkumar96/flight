import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { SharedService } from 'src/app/services/shared.service';
import { PreviousBookingComponent } from './previous-booking.component';

describe('PreviousBookingComponent', () => {
  let component: PreviousBookingComponent;
  let fixture: ComponentFixture<PreviousBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SharedService],
      declarations: [ PreviousBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
