import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResignterPage } from './resignter.page';

const routes: Routes = [
  {
    path: '',
    component: ResignterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResignterPageRoutingModule {}
