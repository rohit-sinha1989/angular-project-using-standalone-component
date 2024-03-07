import { TestBed } from '@angular/core/testing';

import { AppEmployeeService } from './app-employee.service';

describe('AppEmployeeService', () => {
  let service: AppEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
