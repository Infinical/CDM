// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NewCdmComponent } from './new_cdm.component';

import { EditCdmComponent } from './edit_cdm.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';
import { CDMRoutingModule } from './cdm-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    CDMRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    NewCdmComponent,
    EditCdmComponent,
    ModalsComponent
  ]
})
export class CDMModule { }
