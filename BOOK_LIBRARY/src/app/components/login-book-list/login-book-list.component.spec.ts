import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBookListComponent } from './login-book-list.component';

describe('LoginBookListComponent', () => {
  let component: LoginBookListComponent;
  let fixture: ComponentFixture<LoginBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
