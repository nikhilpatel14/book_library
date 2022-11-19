import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginBookComponent } from './no-login-book.component';

describe('NoLoginBookComponent', () => {
  let component: NoLoginBookComponent;
  let fixture: ComponentFixture<NoLoginBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLoginBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoginBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
