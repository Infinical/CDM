import { Component, OnInit } from '@angular/core';

import { UserServices } from '../../services/register-users.service';
import { UserGroupPayload } from '../../models/userGroupPayload';
import { AllowedMenus } from '../../models/menusForGroup';
import { AccessMenu } from '../../models/accessMenusModel';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ThemeService } from 'ng2-charts';
import { MenusService } from '../../services/menus.service';

@Component({
  templateUrl: 'new_group.component.html'
})
export class NewUserGroupComponent implements OnInit {

  // add user group

  reqPayload: UserGroupPayload = new UserGroupPayload('',  '', false, []);

  // these form part of the request payload
  private userGroupName: string = '';
  private userGroupMenus: AllowedMenus[] = [];

  private paramOk: boolean = false;
  private message: string = '';

  elementsToShow: number = 5;

  groups_as_string: string[] = [];


  allMenus: AllowedMenus[] = [];

  temp: AllowedMenus[] = [];

  allUserGroups: AllowedMenus[] = [];

  dummy: AllowedMenus[] = [new AllowedMenus('16', 'One'), new AllowedMenus('2', 'Two'),
  new AllowedMenus('3', 'Three'), new AllowedMenus('2', 'Two'), new AllowedMenus('2', 'Two'),
  new AllowedMenus('2', 'Two')];

  groupMenus: AccessMenu [] = [];
  chosen: string[] = [];

  proceed: boolean = false;

  constructor(private service: UserServices, private toastr: ToastrService, private router: Router,
    private spinner: NgxSpinnerService, private menusService: MenusService) { }

  ngOnInit() {
    this.getAllUserGroups();
    this.getMenusForGroup();

    console.log(this.allMenus);
  }

  updateGroupsList () {
    this.menusService.currentUserGroup
      .subscribe(userGroup => {
        if (userGroup !== null && (this.allUserGroups.indexOf(userGroup) !== -1)) {
          console.log('log this ' + userGroup.description);
          this.allUserGroups.push(new AllowedMenus(userGroup.code, userGroup.description));
        }
      });
  }

  setupPayload() {
    for (let i in this.chosen) {
      this.groupMenus.push(new AccessMenu(this.chosen[i]));
    }


    for (let j in this.allMenus) {
      if (this.chosen.includes(this.allMenus[j].description)) {
        console.log(this.allMenus[j].description);
        this.temp.push(new AllowedMenus(this.allMenus[j].code, this.allMenus[j].description));
      }
    }
    console.log(this.reqPayload.userGroupMenus);
    this.reqPayload.userGroupName = this.userGroupName;
    this.reqPayload.userGroupMenus = this.temp;
  }

  getMenusForGroup() {
    this.service.getAllMenus(this.reqPayload).subscribe(
      (response: any) => {
        response.list.forEach( (element) => {
          console.log(this.allMenus);
          this.allMenus.push(new AllowedMenus(element.code, element.description));
        }
      );
    });
  }

  buildArray(event): void {
    if (this.chosen.indexOf(event.target.value) === -1) {
      this.chosen.push(event.target.value);
    } else {
      this.chosen = this.chosen.filter(item => item !== event.target.value);
    }
  }

  sendValue() {
    this.menusService.sendUserGroups(this.reqPayload);
  }

  hitSend(): any {
    this.validation();
    if (this.proceed) {
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      this.setupPayload();
      this.service.addMenusForGroup(this.reqPayload).subscribe(
        (response: any) => {
          this.sendValue();
          this.getAllUserGroups();
          this.spinner.hide();
          this.paramOk = response.responseCode === '00';
          this.message = response.responseMessage;
          this.showToaster();
        });
    }
  }

  onSelected(object) {
    sessionStorage.setItem('groupId', object.code);
    sessionStorage.setItem('groupName', object.description);
  }

  getAllUserGroups() {
    this.service.getUserGroups(this.reqPayload).subscribe(
      (response: any) => {
        response.list.forEach( (element) => {
          if (!this.groups_as_string.includes(element.code)) {
            this.groups_as_string.push(element.code);
            this.allUserGroups.push(new AllowedMenus(element.code, element.description));
          }
        }
      );
    });
  }

  showToaster(): any {
    if (this.paramOk) {
      this.toastr.success(this.message);
      // this.router.navigateByUrl('/dashboard');
    } else {
      this.toastr.warning(this.message);
    }
  }

  validation() {
    if (this.userGroupName.trim() === '') {
      this.toastr.warning('Name cannot be empty');
      this.proceed = false;
      return;
    }
    this.proceed = true;
  }

}
