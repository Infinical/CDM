import { TestBed } from '@angular/core/testing';

import { UserServices } from './register-users.service';

describe('RegisterUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserServices = TestBed.get(UserServices);
    expect(service).toBeTruthy();
  });
});
