import { Component, OnInit } from '@angular/core';

import { Vendor } from '../../models/vendorModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: 'new_vendor.component.html'
  })
  export class NewVendorComponent implements OnInit {

    vendor: Vendor = new Vendor('', '');

    constructor() { }
    ngOnInit() {

    }

  }
