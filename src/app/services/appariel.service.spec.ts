import { TestBed } from '@angular/core/testing';

import { ApparielService } from './appariel.service';

describe('ApparielService', () => {
  let service: ApparielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApparielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
