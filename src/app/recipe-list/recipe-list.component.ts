import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeServiceService} from '../services/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipesList:any[] = []


  constructor(private RecipeServices:RecipeServiceService) {
  }
  ngOnInit(): void {
    this.getRecipes()
  }


  getRecipes(){
    this.RecipeServices.obtenirDonnee().subscribe(Recipe=>{
      this.recipesList = Recipe
      console.log(Recipe)
    })
  }
}
