import { Input, Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // I want to get this data from outside of this component
  // so i'm gonna use @input decorator
  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  OnSelected() {
    this.recipeSelected.emit();
  }

}
