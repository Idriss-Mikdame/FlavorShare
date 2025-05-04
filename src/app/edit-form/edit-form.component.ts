import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnInit{

  recipe = {
    nom : '',
    ingredients : '',
    etapes : '',
    img : '',
    categorie : '',
    data : new Date()
  }
  public id:any
  constructor(private RecipeServices:RecipeServiceService,private router:Router,
              private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
   this.getRecipeById()
  }
  getRecipeById() {
    this.RecipeServices.afichererrecipeParid(this.id).subscribe((data) => {
      this.recipe = data;
    });
  }


  editForm() {
    this.RecipeServices.editArticle(this.recipe).subscribe(data => {
      if (data) {
        this.router.navigateByUrl('/admin/recipe-list');
      }
    });
  }


}
