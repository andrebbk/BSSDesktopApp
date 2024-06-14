import { TestBed } from '@angular/core/testing';

import { WindowRefServiceService } from './window-ref-service.service';

describe('WindowRefServiceServiceService', () => {
  let service: WindowRefServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowRefServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
