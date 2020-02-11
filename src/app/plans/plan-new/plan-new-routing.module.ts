import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanNewPage } from './plan-new.page';

const routes: Routes = [
  {
    path: '',
    component: PlanNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanNewPageRoutingModule {}
