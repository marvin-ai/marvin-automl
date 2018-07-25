import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthguardGuard } from './authguard.guard';

describe('AuthguardGuard', () => {

  let service: AuthguardGuard = null;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthguardGuard,
        { provide: RouterTestingModule, useValue: router }
      ],
      imports: [RouterTestingModule]
    });
  });

  beforeEach(inject([AuthguardGuard], (agService: AuthguardGuard) => {
    service = agService;
  }));
/*
  it('checks if a user is valid', () => {
    expect(service.canActivate()).toBeFalsy();
    expect(router.navigate).toHaveBeenCalled();
  });
*/
  it('should ...', inject([AuthguardGuard], (guard: AuthguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
