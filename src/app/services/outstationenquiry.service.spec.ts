import { TestBed } from '@angular/core/testing';

import { OutstationenquiryService } from './outstationenquiry.service';

describe('OutstationenquiryService', () => {
  let service: OutstationenquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutstationenquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
