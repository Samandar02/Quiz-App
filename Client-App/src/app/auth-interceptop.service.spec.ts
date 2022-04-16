import { TestBed } from '@angular/core/testing';

import { AuthInterceptopService } from './auth-interceptop.service';

describe('AuthInterceptopService', () => {
  let service: AuthInterceptopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
