import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserGroupComponent } from './update_group.component';
import { NewUserGroupComponent } from './new_group.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'System setup'
    },
    children: [
      {
        path: '',
        redirectTo: 'update'
      },
      {
        path: 'update',
        component: UpdateUserGroupComponent,
        data: {
          title: 'Update User Groups'
        }
      },
      {
        path: 'new',
        component: NewUserGroupComponent,
        data: {
          title: 'New User Group'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
