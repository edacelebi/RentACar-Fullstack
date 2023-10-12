import { TestBed } from '@angular/core/testing';

import { BrandAbstractsService } from './brand-abstracts.service';

describe('BrandAbstractsService', () => {
  let service: BrandAbstractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandAbstractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
