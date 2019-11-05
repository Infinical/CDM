import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';

import { User } from '../../models/user';
import { UserResponse } from '../../models/userRespFromServer';
import { UserServices } from '../../services/register-users.service';

@Component({
  templateUrl: 'view_users.component.html'
})
export class ViewUsersComponent implements OnInit, OnDestroy {

  users: UserResponse[] = [];
  users1: any;

  reqPayload: string = '';

  startIndex = 0;
  lastIndex = 4;
  usersToShow = 4;


  constructor(private service: UserServices) { }

  // "lastName": "string",
  //     "otherName": "string",
  //     "userName": "string",
  //     "userGroupId": "string",
  //     "userBranch": "string",
  //     "userEmail": "string",
  //     "userPhoneNo": "string",
  //     "frozen_yn": "string"



  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers(this.reqPayload).subscribe(
      (response: any) => {
        response.listData.forEach( (element) => {
          this.users.push(new UserResponse(element.lastName, element.otherName, element.userName, element.userGroupId,
            element.userBranch, element.userEmail, element.userPhoneNo, element.frozen_yn));
        }
      );
    });
  }

  onSelected(object) {
    sessionStorage.setItem('userName', object.userName);
    sessionStorage.setItem('userEmail', object.userEmail);
  }

  getArrayFromANumber(length) {
    return new Array(length / this.usersToShow);
  }

  updateIndex(pageIndex) {
    this.startIndex = pageIndex * this.usersToShow;
    this.lastIndex = this.startIndex + this.usersToShow;
  }

  ngOnDestroy() {
  }

}
