import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{



  constructor(private RecipeService: RecipeServiceService) {
  }




  getRecipes(){
    this.RecipeService.obtenirDonnee().subscribe(data=>{

    })
  }

  ngOnInit(): void {
  }
}
