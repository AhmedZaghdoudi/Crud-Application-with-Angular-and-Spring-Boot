import { Component, OnInit } from '@angular/core';
import { ServicecategorieService } from '../service/servicecategorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private categorieservice:ServicecategorieService,private router:Router) { }

  categorie:any={
    nom:"",
    qt:0
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.categorieservice.save(this.categorie)
    .subscribe(
      data => {this.router.navigate(["/categories"])
      },
      error => {
        console.log(error);
      });
  }

}
