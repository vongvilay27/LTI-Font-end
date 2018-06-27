import { TestBed, inject } from '@angular/core/testing';

import { LocationcheckService } from './locationcheck.service';

describe('LocationcheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationcheckService]
    });
  });

  it('should be created', inject([LocationcheckService], (service: LocationcheckService) => {
    expect(service).toBeTruthy();
  }));
});
