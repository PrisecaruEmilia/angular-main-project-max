import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://p1.pxfuel.com/preview/172/547/633/mushrooms-french-dish-tjena-kitchen-recipe.jpg'),
    new Recipe('Another test recipe', 'This is a complex test', 'https://p1.pxfuel.com/preview/172/547/633/mushrooms-french-dish-tjena-kitchen-recipe.jpg')
  ];

 @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
