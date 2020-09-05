import { TestBed } from '@angular/core/testing';

import { LocalenquiryService } from './localenquiry.service';

describe('LocalenquiryService', () => {
  let service: LocalenquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalenquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
