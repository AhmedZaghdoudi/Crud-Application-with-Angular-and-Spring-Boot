import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';

const routes: Routes = [

  {path: "produits", component : ProduitsComponent},
  {path: "categories", component : CategoriesComponent},
  {path: "add-produits", component : AddProduitsComponent},
  {path: "add-categories", component : AddCategoriesComponent},
  {path: "edit-categories/:id",component: ModifCategorieComponent },
  {path:"edit-produit/:id",component:ModifProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
