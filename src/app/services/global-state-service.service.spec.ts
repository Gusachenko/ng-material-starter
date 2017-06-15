import { TestBed, inject } from '@angular/core/testing';

import { GlobalStateServiceService } from './global-state-service.service';

describe('GlobalStateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalStateServiceService]
    });
  });

  it('should ...', inject([GlobalStateServiceService], (service: GlobalStateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
