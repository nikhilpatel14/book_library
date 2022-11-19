import { TestBed } from '@angular/core/testing';

import { BookSeviceService } from './book-sevice.service';

describe('BookSeviceService', () => {
  let service: BookSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
