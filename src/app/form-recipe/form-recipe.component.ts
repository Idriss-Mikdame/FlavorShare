import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css'
})
export class FormRecipeComponent implements OnInit{
  recipesList:any[] = []


  constructor(private RecipeServices:RecipeServiceService) {
  }
  ngOnInit(): void {
    this.getRecipes()
  }


  getRecipes(){
    this.RecipeServices.obtenirDonnee().subscribe(data=>{
      data = this.recipesList
    })
  }
}
