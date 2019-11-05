// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { UpdateUserGroupComponent } from './update_group.component';
import { NewUserGroupComponent } from './new_group.component';

// Theme Routing
import { ThemeRoutingModule } from './setup-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    UpdateUserGroupComponent,
    NewUserGroupComponent
  ]
})
export class ThemeModule { }
