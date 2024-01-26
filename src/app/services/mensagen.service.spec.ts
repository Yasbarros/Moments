import { TestBed } from '@angular/core/testing';

import { MensagenService } from './mensagen.service';

describe('MensagenService', () => {
  let service: MensagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
