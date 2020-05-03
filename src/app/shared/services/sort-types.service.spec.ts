import { TestBed } from '@angular/core/testing';

import { SortTypesService } from './sort-types.service';

describe('SortTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortTypesService = TestBed.get(SortTypesService);
    expect(service).toBeTruthy();
  });
});
