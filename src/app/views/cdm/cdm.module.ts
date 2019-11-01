// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';
import { NewCdmComponent } from './new_cdm.component';

import { EditCdmComponent } from './edit_cdm.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Notifications Routing
import { NotificationsRoutingModule } from './cdm-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    NewCdmComponent,
    EditCdmComponent,
    ModalsComponent
  ]
})
export class NotificationsModule { }
