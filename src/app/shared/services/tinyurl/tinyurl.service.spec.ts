import { TestBed } from '@angular/core/testing';

import { TinyurlService } from './tinyurl.service';

describe('TinyurlService', () => {
  let service: TinyurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinyurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
