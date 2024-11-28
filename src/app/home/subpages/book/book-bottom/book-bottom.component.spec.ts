import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBottomComponent } from './book-bottom.component';

describe('BookBottomComponent', () => {
  let component: BookBottomComponent;
  let fixture: ComponentFixture<BookBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
