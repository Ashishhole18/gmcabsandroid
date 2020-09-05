import { TestBed } from '@angular/core/testing';

import { YourridesService } from './yourrides.service';

describe('YourridesService', () => {
  let service: YourridesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourridesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
