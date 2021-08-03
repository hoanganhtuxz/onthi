import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUpComponent } from './book-up.component';

describe('BookUpComponent', () => {
  let component: BookUpComponent;
  let fixture: ComponentFixture<BookUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
