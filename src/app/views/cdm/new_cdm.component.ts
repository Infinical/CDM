import { Component, SecurityContext, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CDM } from '../../models/cdm';
import { ListCDM } from '../../models/listOfCDM';
import { CDMServices } from '../../services/cdm.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// such override allows to keep some initial values



@Component({
  templateUrl: 'new_cdm.component.html'
})
export class NewCdmComponent implements OnInit, OnDestroy {

  dummy: string[] = ['ghjs', 'jhgfd', 'ugveh'];

  startIndex = 0;
  lastIndex = 4;
  elementsToShow = 5;

  cdmMachine: CDM = new CDM('', '', '', '', '', '');

  allCdmMachines: ListCDM[] = [];

  paramOk: boolean = false;
  message: string = '';

  proceed: boolean = true;

  constructor(sanitizer: DomSanitizer, private service: CDMServices, private router: Router, private toastr: ToastrService) {  }

  ngOnInit() {
    console.log(this.allCdmMachines);
    this.viewmachines();
    console.log(this.allCdmMachines);
  }

  ngOnDestroy() {
    this.allCdmMachines.splice(0, this.allCdmMachines.length);
  }

  createMachine() {
    this.validation();
    if (this.proceed  === true ) {
      this.service.createMachine(this.cdmMachine).subscribe(
        (response: any) => {
          this.paramOk = response.responseCode === '00';
          this.message = response.responseMessage;
          this.showToaster();
        }
      );
    }
  }

  onSelected(object) {
    sessionStorage.setItem('cdmSerialNo', object.serialNo);
    sessionStorage.setItem('cdmDescription', object.description);
    sessionStorage.setItem('cdmTerminalName', object.terminalName);
    sessionStorage.setItem('cdmTerminalId', object.terminalId);
    sessionStorage.setItem('cdmVendor', object.vendor);
  }

  viewmachines() {
    this.service.viewMachines(this.cdmMachine).subscribe(
      (response: any) => {
        response.listData.forEach( (element) => {
          this.allCdmMachines.push(new ListCDM(element.cdm, element.createdBy, element.createdDate,
            element.description, element.terminalName, element.serialNo, element.terminalId, element.vendor));
        });
      }
    );
  }

  showToaster(): any {
    if (this.paramOk) {
      this.toastr.success(this.message);
      this.router.navigateByUrl('/dashboard');
    } else {
      this.toastr.warning(this.message);
    }
  }


  validation() {
    if (this.cdmMachine.serialNo.trim() === '') {
      this.toastr.warning('Serial No cannot be empty');
      this.proceed = false;
      return;
    }
    if (this.cdmMachine.description.trim() === '') {
      this.toastr.warning('Description cannot be empty');
      this.proceed = false;
      return;
    }
    if (this.cdmMachine.terminalName.trim() === '') {
      this.toastr.warning('Terminal name cannot be empty');
      this.proceed = false;
      return;
    }
    if (this.cdmMachine.terminalId.trim() === '') {
      this.toastr.warning('Terminal ID cannot be empty');
      this.proceed = false;
      return;
    }
    if (this.cdmMachine.vendor.trim() === '') {
      this.toastr.warning('Vendor cannot be empty');
      this.proceed = false;
      return;
    }
    this.proceed = true;
  }

  getArrayFromANumber(length) {
    console.log(length);
    return new Array(length / this.elementsToShow);
  }

  updateIndex(pageIndex) {
    this.startIndex = pageIndex * this.elementsToShow;
    this.lastIndex = this.startIndex + this.elementsToShow;
  }


}
