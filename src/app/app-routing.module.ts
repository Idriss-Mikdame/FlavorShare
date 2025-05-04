import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
//import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {FormRecipeComponent} from './form-recipe/form-recipe.component';
import {RatingSystemComponent} from './rating-system/rating-system.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AuthenticationGuard} from './guards/authentication.guard';
import {EditFormComponent} from './edit-form/edit-form.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "admin", component : NavbarComponent,canActivate : [AuthenticationGuard]
    , children:[
      {path : "home" , component : HomeComponent},
      {path : "form" , component : FormRecipeComponent},
      {path : "recipe-list", component : RecipeListComponent},
      {path : "recipe-detail/:id",component:RecipeDetailComponent},
      {path : "rating", component : RatingSystemComponent},
      {path : "edit-form/:id", component : EditFormComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
