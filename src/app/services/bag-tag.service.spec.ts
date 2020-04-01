import { TestBed } from '@angular/core/testing';

import { BagTagService } from './bag-tag.service';

describe('BagTagService', () => {
  let service: BagTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
