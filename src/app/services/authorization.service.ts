import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor() {}

  isAuthorized(allowedRoles: any): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    const access = JSON.parse(sessionStorage.getItem('access'));
    const allowed = allowedRoles;
    console.log(access);
    console.log(allowedRoles);
    return access.includes(allowedRoles[0]);
  }
}

