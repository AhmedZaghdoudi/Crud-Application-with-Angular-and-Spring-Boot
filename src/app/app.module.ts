import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { FormsModule } from '@angular/forms';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    CategoriesComponent,
    AddProduitsComponent,
    AddCategoriesComponent,
    ModifCategorieComponent,
    ModifProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
