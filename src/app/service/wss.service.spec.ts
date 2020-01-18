import { TestBed } from '@angular/core/testing';

import { WssService } from './wss.service';

describe('WssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WssService = TestBed.get(WssService);
    expect(service).toBeTruthy();
  });
});
