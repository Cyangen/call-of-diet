import { Injectable } from '@angular/core';
import { Plan } from './plans.model';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  // tslint:disable-next-line: variable-name
  private _plans: Plan[] = [
    new Plan(
      'p1',
      'depurativa',
      [
        {lunch : 'tonno e insalata1', dinner: 'pasta di legumi1'},
        {lunch : 'tonno e insalata2', dinner: 'pasta di legumi2'},
        {lunch : 'tonno e insalata3', dinner: 'pasta di legumi3'},
        {lunch : 'tonno e insalata4', dinner: 'pasta di legumi4'},
        {lunch : 'tonno e insalata5', dinner: 'pasta di legumi5'},
        {lunch : 'tonno e insalata6', dinner: 'pasta di legumi6'},
        {lunch : 'tonno e insalata7', dinner: 'pasta di legumi7'}
      ]
    ),
    new Plan(
      'p2',
      'mantenimento',
      [
        {lunch : 'tonno e insalata1', dinner: 'pasta di legumi1'},
        {lunch : 'tonno e insalata2', dinner: 'pasta di legumi2'},
        {lunch : 'tonno e insalata3', dinner: 'pasta di legumi3'},
        {lunch : 'tonno e insalata4', dinner: 'pasta di legumi4'},
        {lunch : 'tonno e insalata5', dinner: 'pasta di legumi5'},
        {lunch : 'tonno e insalata6', dinner: 'pasta di legumi6'},
        {lunch : 'tonno e insalata7', dinner: 'pasta di legumi7'}
      ]
    ),
      new Plan(
      'p2',
      'detox',
      [
        {lunch : 'tonno e insalata1', dinner: 'pasta di legumi1'},
        {lunch : 'tonno e insalata2', dinner: 'pasta di legumi2'},
        {lunch : 'tonno e insalata3', dinner: 'pasta di legumi3'},
        {lunch : 'tonno e insalata4', dinner: 'pasta di legumi4'},
        {lunch : 'tonno e insalata5', dinner: 'pasta di legumi5'},
        {lunch : 'tonno e insalata6', dinner: 'pasta di legumi6'},
        {lunch : 'tonno e insalata7', dinner: 'pasta di legumi7'}
      ]
    )
  ];

  get plans() {
    return [...this._plans];
  }

  constructor() { }
}
