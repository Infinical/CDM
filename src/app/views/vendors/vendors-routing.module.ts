import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewVendorComponent } from './new_vendor.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vendors'
    },
    children: [
      {
        path: '',
        redirectTo: 'new'
      },
      {
        path: 'new',
        component: NewVendorComponent,
        data: {
          title: 'New Vendor'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
