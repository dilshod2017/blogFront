import { TestBed } from '@angular/core/testing';

import { UnsavedChangesGuardService } from './unsaved-changes-guard.service';

describe('UnsavedChangesGuardService', () => {
  let service: UnsavedChangesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsavedChangesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
