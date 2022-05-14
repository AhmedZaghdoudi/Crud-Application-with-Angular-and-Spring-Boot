import { Component, OnInit } from '@angular/core';
import { ServiceproduitService } from '../service/serviceproduit.service';
import { Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { ServicecategorieService } from '../service/servicecategorie.service';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']
})
export class AddProduitsComponent implements OnInit {

  constructor(private produitservice:ServiceproduitService,private router:Router,private categorieservice:ServicecategorieService) { }
  produit:any={
    nom:"",
    qte:0,
    disponible:1,
    categorie:{
      idCategory:0    }
  }

  categorielist:any[];
   ngOnInit(): void {this.refrech();
  }

  refrech (){this.categorieservice.getAll()
    .subscribe(
      data => {
        this.categorielist = data;
      },
      error => {
        console.log(error);
      });
}
  onSubmit(){
    console.log(this.produit)
    this.produitservice.save(this.produit)
    .subscribe(
      data => {this.router.navigate(["/produits"])
      },
      error => {
        console.log(error);
      });
    
  }

}
