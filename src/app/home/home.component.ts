import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recipesList:any[] = []
  selectionParcategorie = '';
  rechercherRecipe = '';




  constructor(private RecipeServices:RecipeServiceService,private  route:Router
  ) {
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

  afficherlistrecipe() {
    this.route.navigateByUrl('/admin/recipe-list')
  }
}
