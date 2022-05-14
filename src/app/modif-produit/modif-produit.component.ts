import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceproduitService } from '../service/serviceproduit.service';
import { ServicecategorieService } from '../service/servicecategorie.service';

@Component({
  selector: 'app-modif-prodiut',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css'],
})
export class ModifProduitComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private produitservice: ServiceproduitService,
    private router: Router,
    private categorieservice: ServicecategorieService
  ) {}
  produit: any = {
    nom: '',
    qte: 0,
    disponible: 1,
    category: {
      idCategory: 0,
    },
  };
  id = this.activatedRoute.snapshot.paramMap.get('id');
  categorielist: any[];
  ngOnInit(): void {
    this.refrech();
    this.getprodbyid();
  }
  getprodbyid() {
    this.produitservice
      .getById(this.id)
      .subscribe(
        (data) => {
          this.produit = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  refrech() {
    this.categorieservice.getAll().subscribe(
      (data) => {
        this.categorielist = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    console.log(this.produit);
    this.produitservice.save(this.produit).subscribe(
      (data) => {
        this.router.navigate(['/produits']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
