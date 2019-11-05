import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

import { AllowedMenus } from '../../models/menusForGroup';
import { UpdateUserGroup } from '../../models/updateUserGroup';
import { UserServices } from '../../services/register-users.service';
import { UserGroupPayload } from '../../models/userGroupPayload';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: 'update_group.component.html'
})
export class UpdateUserGroupComponent implements OnInit {

  private paramOk: boolean =  false;
  private message: string = '';

  reqPayload: UserGroupPayload = new UserGroupPayload('', '', false, []);

  groupId: string = sessionStorage.getItem('groupId');
  groupName: string = sessionStorage.getItem('groupName');

  // all menus
  allMenus: AllowedMenus[] = [];
  all_menus: string[] = [];


  // menus for this group
  menus_for_this_group: string [] = [];
  menusForGroup: UpdateUserGroup[] = [];

  constructor(@Inject(DOCUMENT) private _document: any,
  private service: UserServices, private toastr: ToastrService, private router: Router,
  private spinner: NgxSpinnerService) {}


  ngOnInit(): void {
    this.setupPayload();
    this.getMenusForThisGroup();
    this.getAllMenus();
  }


  setupPayload() {
    this.reqPayload.groupId = sessionStorage.getItem('groupId');
  }

  getAllMenus() {
    this.setupPayload();
    this.service.getAllMenus(this.reqPayload).subscribe(
      (response: any) => {
        response.list.forEach( (element) => {
          this.allMenus.push(new AllowedMenus(element.code, element.description));
          this.all_menus.push(element.description);
          this.menusForGroup.push(new UpdateUserGroup(element.description, this.menus_for_this_group.includes(element.description)));
        }
      );
      console.log(this.menus_for_this_group.includes('Admin setup'));
    });
  }

  getMenusForThisGroup() {
    this.setupPayload();
    this.service.getMenusByGroupID(this.reqPayload).subscribe(
      (response: any) => {
        response.menusList.forEach( (element) => {
          this.menus_for_this_group.push(element.description);
        }
      );
    });
  }

  buildArray(event): void {
    if (this.menus_for_this_group.indexOf(event.target.value) === -1) {
      this.menus_for_this_group.push(event.target.value);
    } else {
      this.menus_for_this_group = this.menus_for_this_group.filter(item => item !== event.target.value);
    }
  }

  showToaster() {
    if (this.paramOk) {
      this.toastr.success(this.message);
      this.router.navigateByUrl('/setup/new');
    } else {
      this.toastr.error(this.message);
    }
  }

  updateGroup() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.service.updateUser(this.reqPayload).subscribe(
      (response: any) => {
        this.message = response.responseMessage;
        this.paramOk = response.responseCode === '00';
        this.spinner.hide();
        this.showToaster();
    });
  }



}
