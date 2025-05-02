import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipesList:any[] = []
  selectionParcategorie = '';
  rechercherRecipe = '';




  constructor(private RecipeServices:RecipeServiceService,
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






  deleteRecipe(id:string){
    console.log("ok")
    let conf = confirm("'Voulez-vous le supprimer Article?")
    if (conf){
      this.RecipeServices.supprimerRecipe(id).subscribe(supprime=>{
        if (supprime){
          this.getRecipes()
        }
      })
    }
  }
}
