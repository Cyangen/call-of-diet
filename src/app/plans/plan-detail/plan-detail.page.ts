import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../plans.model';
import { NavController } from '@ionic/angular';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.page.html',
  styleUrls: ['./plan-detail.page.scss'],
})
export class PlanDetailPage implements OnInit {
  plan: Plan;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private planService: PlansService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('planId')) {
        this.navCtrl.navigateBack('/plans');
        return;
      }
      this.plan = this.planService.getPlan(paramMap.get('planId'));
      console.log(this.plan);

    });
  }

}
