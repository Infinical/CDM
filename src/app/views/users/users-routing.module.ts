import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewUsersComponent } from './view_users.component';
import { NewUserComponent } from './new_user.component';
import { EditUserComponent } from './edit_user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'view'
      },
      {
        path: 'view',
        component: ViewUsersComponent,
        data: {
          title: 'List of Users'
        }
      },
      {
        path: 'register',
        component: NewUserComponent,
        data: {
          title: 'Create New User'
        }
      },
      {
        path: 'update',
        component: EditUserComponent,
        data: {
          title: 'Update User Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
