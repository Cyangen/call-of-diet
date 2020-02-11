import { Component, OnInit } from '@angular/core';
import { PlansService } from './plans.service';
import { Plan } from './plans.model';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {
  loadedPlans: Plan[];

  constructor(private plansServie: PlansService) { }

  ngOnInit() {
    this.loadedPlans = this.plansServie.plans;
  }

}
