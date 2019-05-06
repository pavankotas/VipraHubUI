import { TestBed } from '@angular/core/testing';

import { LoggedinUserInfoService } from './loggedin-user-info.service';

describe('LoggedinUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedinUserInfoService = TestBed.get(LoggedinUserInfoService);
    expect(service).toBeTruthy();
  });
});
