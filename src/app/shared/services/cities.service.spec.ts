import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesService = TestBed.inject(CitiesService);
    expect(service).toBeTruthy();
  });
});
