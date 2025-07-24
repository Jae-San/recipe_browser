import { Component } from '@angular/core';
import { Auth } from '../auth';

@Component({
  selector: 'app-meal-planner',
  imports: [],
  templateUrl: './meal-planner.html',
  styleUrl: './meal-planner.css'
})
export class MealPlanner {
  constructor(public auth: Auth) {}
}
