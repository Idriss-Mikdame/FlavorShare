import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RatingSystemComponent} from './rating-system/rating-system.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "home" , component : HomeComponent},
  {path : "recipe-list", component : RecipeListComponent},
  {path : "recipe-detail", component : RecipeDetailComponent},
  {path : "rating", component : RatingSystemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
