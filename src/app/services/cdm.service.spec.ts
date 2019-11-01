import { TestBed } from '@angular/core/testing';

import { CDMServices } from './cdm.service';

describe('CDMServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CDMServices = TestBed.get(CDMServices);
    expect(service).toBeTruthy();
  });
});
