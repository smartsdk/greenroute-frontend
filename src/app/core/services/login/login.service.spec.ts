import { TestBed, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, CookieService]
    });
  });

  it('should ...', inject([LoginService, CookieService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
