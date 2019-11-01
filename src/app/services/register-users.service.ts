import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(private http: HttpClient) { }

  public registerUsers(reqPayload) {
    return this.http.post(`${environment.baseurl}new_user`, reqPayload, {responseType: 'json'});
  }

  public loginUsers(reqPayload) {
    return this.http.post(`${environment.baseurl}login`, reqPayload, {responseType: 'json'});
  }

  public updateUser(reqPayload) {
    return this.http.post(`${environment.baseurl}updateUser`, reqPayload, {responseType: 'json'});
  }

  public getUserRights(reqPayload) {
    return this.http.post(`${environment.baseurl}special_rights_list`, reqPayload, {responseType: 'json'});
  }

  public getAllUsers(reqPayload) {
    return this.http.post(`${environment.baseurl}getAllUsers`, reqPayload, {responseType: 'json'});
  }

  public getUserGroups(reqPayload) {
    return this.http.post(`${environment.baseurl}list_of_user_groups`, reqPayload, {responseType: 'json'});
  }

  public getAllMenus(reqPayload) {
    return this.http.post(`${environment.baseurl}menu_list`, reqPayload, {responseType: 'json'});
  }

  public addMenusForGroup(reqPayload) {
    return this.http.post(`${environment.baseurl}addUserGroup`, reqPayload, {responseType: 'json'});
  }

  public getUsersByUsername(reqPayload) {
    return this.http.post(`${environment.baseurl}getUserByUserName`, reqPayload, {responseType: 'json'});
  }

  public getMenusByGroupID(reqPayload) {
    return this.http.post(`${environment.baseurl}menus_list_By_GroupId`, reqPayload, {responseType: 'json'});
  }

}
