import { TestBed, inject } from '@angular/core/testing';

import { TransportationsService } from './transportations.service';

describe('TransportationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportationsService]
    });
  });

  it('should be created', inject([TransportationsService], (service: TransportationsService) => {
    expect(service).toBeTruthy();
  }));
});
