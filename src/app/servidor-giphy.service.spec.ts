import { TestBed } from '@angular/core/testing';

import { ServidorGiphyService } from './servidor-giphy.service';

describe('ServidorGiphyService', () => {
  let service: ServidorGiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServidorGiphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
