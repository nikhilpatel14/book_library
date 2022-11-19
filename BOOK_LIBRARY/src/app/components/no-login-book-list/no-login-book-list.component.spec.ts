import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginBookListComponent } from './no-login-book-list.component';

describe('NoLoginBookListComponent', () => {
  let component: NoLoginBookListComponent;
  let fixture: ComponentFixture<NoLoginBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLoginBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoginBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
