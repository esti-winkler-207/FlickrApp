import { TestBed } from '@angular/core/testing';

import { CallApiFlickerService } from './call-api-flicker.service';

describe('CallApiFlickerService', () => {
  let service: CallApiFlickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallApiFlickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
