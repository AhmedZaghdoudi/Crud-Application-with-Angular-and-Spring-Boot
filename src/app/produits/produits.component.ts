import { Component, OnInit } from '@angular/core';
import { product } from '../model/produits.model';
import { ServiceproduitService } from '../service/serviceproduit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor(private produitsservice:ServiceproduitService) { }

  isReady: boolean;
  productlist :product [];

  ngOnInit(): void { this.refrech();
    
  }
  refrech (){this.produitsservice.getAll()
    .subscribe(
      data => {
        this.productlist = data;
        this.isReady = true;
      },
      error => {
        console.log(error);
      });
}
  deleteproduit(id:any){this.produitsservice.delete(id).subscribe(
    data => { console.log(id);
      
      this.isReady = true;
    },
    error => {
      console.log(error);
    });
    
  this.refrech();
  }
}