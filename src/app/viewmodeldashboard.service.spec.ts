import { TestBed } from '@angular/core/testing';

import { ViewmodeldashboardService } from './viewmodeldashboard.service';

describe('ViewmodeldashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewmodeldashboardService = TestBed.get(ViewmodeldashboardService);
    expect(service).toBeTruthy();
  });
});
