import { TestBed } from '@angular/core/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasketService = TestBed.inject(BasketService);
    expect(service).toBeTruthy();
  });
});
