import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistedBooksComponent } from './wishlisted-books.component';

describe('WishlistedBooksComponent', () => {
  let component: WishlistedBooksComponent;
  let fixture: ComponentFixture<WishlistedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
