import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserServices } from '../../services/register-users.service';
import { AccessMenu } from '../../models/accessMenusModel';
import { UpdateUserGroup } from '../../models/updateUserGroup';
import { AccessMenusFromServer } from '../../models/accessMenusFromServer';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'edit_user.component.html'
})
export class EditUserComponent implements OnInit {
  // Update user details

  user: User = new User('', '', '', '', '', '', '', '', '', '', '', []);
  message: any;
  chosen: string[] = [];
  rightsFromServer: string[] = [];
  rightsGiven: AccessMenu[] = [];
  userGroupsFromServer: string[] = [];

  rightsForGroup: string[] = [];

  rightsForThisUser: string[] = [];
  displayedRights: AccessMenusFromServer[] = [];

  constructor(private service: UserServices, private router: Router, private toastr: ToastrService) { }

  isCollapsed: boolean = false;

  ngOnInit() {
    this.getThisUserDetails();
    this.getRights();
    this.getUserGroups();
    // this.setupComboBox();
    this.setupComboBox();
    this.chosen = this.rightsForThisUser;
    console.log(this.user);
    console.log(this.displayedRights);
    console.log(this.rightsForThisUser);
  }

  buildArray(event): void {
    if (this.chosen.indexOf(event.target.value) === -1) {
      this.chosen.push(event.target.value);
    } else {
      this.chosen = this.chosen.filter(item => item !== event.target.value);
    }
    console.log(this.chosen);
  }

  getThisUserDetails() {
    this.service.getUsersByUsername(new User(sessionStorage.getItem('userName'),
    sessionStorage.getItem('userEmail'), '', '' , '', '', '', '', '', '', '', []))
      .subscribe(
        (response: any) => {
          response.listData.forEach( (element) => {
            this.user.userName = element.userName;
            this.user.userEmail = element.userEmail;
            this.user.lastName = element.lastName;
            this.user.otherName = element.otherName;
            this.user.userGroupId = element.userGroupId;
            this.user.userBranch = element.userBranch;
            this.user.userPhoneNo = element.userPhoneNo;
          });

          response.listOfRights.forEach( (element) => {
            this.rightsForThisUser.push(element.code);
            console.log('building rights fror this user');
          });
        });
  }

  updateDetails() {
    for (let i  in this.chosen) {
      this.user.rightsList.push(new AccessMenu(this.chosen[i]));
    }

    this.service.updateUser(this.user).subscribe((response: any) => {
      if (response.responseCode === '00') {
        this.toastr.success(this.message);
        this.switchRoute();
      }  else {
        this.toastr.error(this.message);
      }
    });
    console.log(this.user);
  }

  getRights() {
    this.service.getUserRights(this.user).subscribe(
      (response: any) => {
        response.list.forEach( (element) => {
          this.rightsFromServer.push(element.description);
          console.log(element.code);
          this.displayedRights.push(new AccessMenusFromServer
            (element.code, element.description, this.rightsForThisUser.includes(element.code)));
          });
      });
  }


  setupComboBox() {
    for (let i in this.rightsFromServer) {
      if (this.rightsForThisUser.includes(this.rightsFromServer[i])) {
        this.displayedRights.push(new AccessMenusFromServer(this.rightsFromServer[i], '', true));
        this.chosen.push(this.rightsFromServer[i]);
      } else {
        this.displayedRights.push(new AccessMenusFromServer(this.rightsFromServer[i], '',  false));
      }
    }
  }

  getUserGroups() {
    this.service.getUserGroups(this.user).subscribe(
      (response: any) => {
        response.list.forEach( (element) => {
          this.userGroupsFromServer.push(element.description);
        });
      }
    );
  }

  filterForeCasts(value: any) {
    if (value !== 'SELECT USER GROUP') {
      this.user.userGroupId = value;
    }

    for (let i in this.rightsFromServer) {
      console.log(i);
    }
  }

  switchRoute () {
    this.router.navigateByUrl('/users/view');
  }


}
