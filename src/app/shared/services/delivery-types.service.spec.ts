import { TestBed } from '@angular/core/testing';

import { DeliveryTypesService } from './delivery-types.service';

describe('DeliveryTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryTypesService = TestBed.inject(DeliveryTypesService);
    expect(service).toBeTruthy();
  });
});
