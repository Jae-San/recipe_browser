import { Component, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeCard } from './recipe-card/recipe-card';
import { MealPlanner } from './meal-planner/meal-planner';
import { SearchBar } from './search-bar/search-bar';
import { AuthBar } from './auth-bar/auth-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, RecipeList, RecipeCard, MealPlanner, SearchBar, AuthBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('recipe_app');
}
