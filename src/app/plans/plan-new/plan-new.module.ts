import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanNewPageRoutingModule } from './plan-new-routing.module';

import { PlanNewPage } from './plan-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanNewPageRoutingModule
  ],
  declarations: [PlanNewPage]
})
export class PlanNewPageModule {}
