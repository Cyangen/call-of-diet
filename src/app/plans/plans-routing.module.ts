import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlansPage } from './plans.page';

const routes: Routes = [
  {
    path: '',
    component: PlansPage
  },
  {
    path: 'plan-new',
    loadChildren: () => import('./plan-new/plan-new.module').then( m => m.PlanNewPageModule)
  },
  {
    path: ':planId',
    loadChildren: () => import('./plan-detail/plan-detail.module').then( m => m.PlanDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansPageRoutingModule {}
