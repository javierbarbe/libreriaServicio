import { TestBed } from '@angular/core/testing';

import { PokeServiceLibService } from './poke-service-lib.service';

describe('PokeServiceLibService', () => {
  let service: PokeServiceLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeServiceLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
