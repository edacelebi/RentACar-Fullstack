import { TestBed } from '@angular/core/testing';

import { CarAbstractsService } from './car-abstracts.service';

describe('CarAbstractsService', () => {
  let service: CarAbstractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAbstractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
