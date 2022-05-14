import { Component, OnInit } from '@angular/core';
import { Category } from '../model/categories.model';
import { ServicecategorieService } from '../service/servicecategorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categorieservice:ServicecategorieService) { }

  isReady: boolean;
  categorielist :Category [];

  ngOnInit(): void { this.refrech();
    
  }
  refrech (){this.categorieservice.getAll()
    .subscribe(
      data => {
        this.categorielist = data;
        this.isReady = true;
      },
      error => {
        console.log(error);
      });
}
  deleteCategory(id:any){this.categorieservice.delete(id).subscribe(
    data => {
      this.categorielist = data;
      this.isReady = true;
    },
    error => {
      console.log(error);
    });
    
  this.refrech();
  }
}
