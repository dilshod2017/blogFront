import { TestBed } from '@angular/core/testing';

import { MainBusService } from './main-bus.service';

describe('MainBusService', () => {
  let service: MainBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
