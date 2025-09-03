// Importation des modules nécessaires d'Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';

// Déclaration du composant Produits
@Component({
  selector: 'app-produits',         // Sélecteur utilisé dans le template parent
  standalone : true,                // Composant autonome
  imports: [CommonModule],          // Importation du module commun Angular
  templateUrl: './produits.html',   // Chemin du template HTML du composant
  styleUrl: './produits.css'        // Chemin du fichier de styles CSS du composant
})
export class Produits implements OnInit {
  // Tableau de produits
  produits : Produit [];

  // Constructeur du composant : initialise la liste des produits
  constructor() {
this.produits = [
{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
{idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
{idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
 ];
 }

 ngOnInit(): void {
     
 }
}
