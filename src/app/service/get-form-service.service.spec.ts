import { TestBed } from '@angular/core/testing';

import { GETFormServiceService } from './get-form-service.service';

describe('GETFormServiceService', () => {
  let service: GETFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GETFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
