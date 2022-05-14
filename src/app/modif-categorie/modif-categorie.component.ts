import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicecategorieService } from '../service/servicecategorie.service';

@Component({
  selector: 'app-modif-categorie',
  templateUrl: './modif-categorie.component.html',
  styleUrls: ['./modif-categorie.component.css']
})


export class ModifCategorieComponent implements OnInit {

  constructor(private categorieservice:ServicecategorieService,private router:Router,private activatedRoute: ActivatedRoute) { }

  categorie:any={
    nom:"",
    qt:0

  }

  id = this.activatedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {this.getcatbyid()
  }
  getcatbyid(){
    this.categorieservice.getById(this.id)
    .subscribe(
      data => { this.categorie=data},
      error => {
        console.log(error);
      });

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

