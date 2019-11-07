import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { AllowedMenus } from '../models/menusForGroup';
import { UserResponse } from '../models/userRespFromServer'

@Injectable({ providedIn: 'root' })
export class MenusService {
    private messageSource = new BehaviorSubject('');
    currentMessage = this.messageSource.asObservable();

    private userGroup = new BehaviorSubject<AllowedMenus>({'code': '', 'description': ''});
    currentUserGroup = this.userGroup.asObservable();

    private user = new BehaviorSubject<UserResponse>({'lastName': '', 'otherName': '', 'userName': '',
    'userGroupId': '', 'userBranch': '', 'userEmail': '', 'userPhoneNo': '', 'frozen_yn': ''});
    currentUser = this.user.asObservable();

    constructor () {
    }

    sendMenu(menu: string) {
        this.messageSource.next(menu);
    }

    sendUserGroups(data: any) {
        console.log('called with ' + data);
        this.userGroup.next(data);
    }

    getUserGroups(): Observable<any> {
        return this.userGroup.asObservable();
    }

    sendUser(data: any) {
        this.user.next(data);
    }

    getUser(): Observable<any> {
        return this.user.asObservable();
    }
}
