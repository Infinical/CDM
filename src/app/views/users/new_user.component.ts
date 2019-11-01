import {Component, OnDestroy, OnInit} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

import { User } from '../../models/user';
import { AccessMenu } from '../../models/accessMenusModel';
import { UserServices } from '../../services/register-users.service';
import { AccessMenusFromServer } from '../../models/accessMenusFromServer';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'new_user.component.html'
})
export class NewUserComponent implements OnInit, OnDestroy {

// Create User component


  user: User = new User('', '', '', '', '', '', '', '', '', '', '', []);
  access: AccessMenu = new AccessMenu('');
  private message: any;

  chosen: string[] = [];
  rightsFromServer: AccessMenusFromServer[] = [];
  userGroupsFromServer: AccessMenusFromServer[] = [];

  userGroupName: string = '';
  cacheForecasts: string = '';

  private inputAccepted: boolean = false;
  constructor(private service: UserServices, private router: Router, private toastr: ToastrService) { }

  ngOnInit ( ) {
    this.getRights();
    this.getUserGroups();
  }

  registerNewUsers() {
    this.service.registerUsers(this.user)
      .subscribe((response: any) => this.message = response.responseMessage );
  }

  getRights() {
    this.service.getUserRights(this.user).subscribe(
      (response: any) => {
        response.list.forEach( (element) => {
          this.rightsFromServer.push(new AccessMenusFromServer(element.code, element.description, false));
        });
      });
  }

  getUserGroups() {
    this.service.getUserGroups(this.user).subscribe(
      (response: any) => {
        response.list.forEach( (element) => {
          this.userGroupsFromServer.push(new AccessMenusFromServer(element.code, element.description, false));
          console.log(this.userGroupsFromServer);
        });
      }
    );
  }

  buildArray(event): void {
    if (this.chosen.indexOf(event.target.value) === -1) {
      this.chosen.push(event.target.value);
    } else {
      this.chosen = this.chosen.filter(item => item !== event.target.value);
    }
    console.log(this.chosen);
  }

  setupPayload() {
    for (let i in this.chosen) {
      this.user.rightsList.push(new AccessMenu(this.chosen[i]));
    }
  }

  public createUser() {
    this.setupPayload();
      this.service.registerUsers(this.user).
        subscribe((response: any) => {
          this.message = response.responseMessage;
            this.showToaster();
        }
      );
  }

  filterForeCasts(value: any) {
    if (value !== 'SELECT USER GROUP') {
      this.user.userGroupId = value;
    }
  }


  acceptInput() {
    this.router.navigateByUrl('/users/view');
  }

  showToaster(): any {
    if (this.inputAccepted) {
      this.toastr.success(this.message);
      this.acceptInput();
    } else {
      this.toastr.warning(this.message);
    }
  }


  ngOnDestroy(): void {
  }

}
