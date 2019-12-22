import { TestBed } from '@angular/core/testing';

import { ComanService } from './coman.service';

describe('ComanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComanService = TestBed.get(ComanService);
    expect(service).toBeTruthy();
  });
});
