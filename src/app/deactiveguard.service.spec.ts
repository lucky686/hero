import { TestBed } from '@angular/core/testing';

import { DeactiveguardService } from './deactiveguard.service';

describe('DeactiveguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactiveguardService = TestBed.get(DeactiveguardService);
    expect(service).toBeTruthy();
  });
});
