import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCdmComponent } from './new_cdm.component';
import { EditCdmComponent } from './edit_cdm.component';
import { ModalsComponent } from './modals.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CDM Machines'
    },
    children: [
      {
        path: '',
        redirectTo: 'view'
      },
      {
        path: 'new',
        component: NewCdmComponent,
        data: {
          title: 'New Machine'
        }
      },
      {
        path: 'update',
        component: EditCdmComponent,
        data: {
          title: 'Update Machines'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CDMRoutingModule {}
