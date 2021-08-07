import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://p1.pxfuel.com/preview/172/547/633/mushrooms-french-dish-tjena-kitchen-recipe.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://p1.pxfuel.com/preview/172/547/633/mushrooms-french-dish-tjena-kitchen-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
