import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from '../services/recipe-service.service';
import {immediateProvider} from 'rxjs/internal/scheduler/immediateProvider';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],

})
export class RecipeDetailComponent implements OnInit {
  recipeID: string | null = null;
  recipeDetails: any;

  constructor(
    private recipeService: RecipeServiceService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.recipeID = this.route.snapshot.paramMap.get('id');
    if (this.recipeID) {
      this.recipeService.afichererrecipeParid(this.recipeID).subscribe((data) => {
        this.recipeDetails = data;
      });
    }
  }

}
