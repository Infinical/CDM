import { Component, OnInit } from '@angular/core';

import { CDM } from '../../models/cdm';
import { CDMServices } from '../../services/cdm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  templateUrl: 'edit_cdm.component.html'
})
export class EditCdmComponent implements OnInit {

  cdmMachine: CDM = new CDM('', '', '', '', '', '');
  private paramOk: boolean =  false;
  private message: string = '';

  constructor(private service: CDMServices, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.cdmMachine.serialNo = sessionStorage.getItem('cdmSerialNo');
    this.cdmMachine.description = sessionStorage.getItem('cdmDescription');
    this.cdmMachine.terminalName = sessionStorage.getItem('cdmTerminalName');
    this.cdmMachine.terminalId = sessionStorage.getItem('cdmTerminalId');
    this.cdmMachine.vendor = sessionStorage.getItem('cdmVendor');
  }

  updateMachine() {
    this.service.updateMachine(this.cdmMachine).subscribe(
      (response: any) => {
        this.paramOk =  response.responseCode === '00';
        this.message = response.responseMessage;
        this.showToaster();
      }
    );
  }

  allowEdit() {
    this.router.navigateByUrl('/cdm/new');
  }

  showToaster(): any {
    if (this.paramOk) {
      this.toastr.success(this.message);
      this.allowEdit();
    } else {
      this.toastr.warning(this.message);
    }
  }



}
