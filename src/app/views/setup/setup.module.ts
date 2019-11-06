// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { UpdateUserGroupComponent } from './update_group.component';
import { NewUserGroupComponent } from './new_group.component';
import { SetupRoutingModule } from './setup-routing.module';



@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  declarations: [
    UpdateUserGroupComponent,
    NewUserGroupComponent
  ]
})
export class SetupModule { }
