import { TestBed } from '@angular/core/testing';

import { CarsAbstractService } from './cars-abstract.service';

describe('CarsAbstractService', () => {
  let service: CarsAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
