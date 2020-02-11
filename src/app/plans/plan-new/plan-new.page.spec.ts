import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanNewPage } from './plan-new.page';

describe('PlanNewPage', () => {
  let component: PlanNewPage;
  let fixture: ComponentFixture<PlanNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
