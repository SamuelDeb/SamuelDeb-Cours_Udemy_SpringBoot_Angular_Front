// Importation des modules nécessaires d'Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Déclaration du composant Produits
@Component({
  selector: 'app-produits',         // Sélecteur utilisé dans le template parent
  standalone : true,                // Composant autonome
  imports: [CommonModule],          // Importation du module commun Angular
  templateUrl: './produits.html',   // Chemin du template HTML du composant
  styleUrl: './produits.css'        // Chemin du fichier de styles CSS du composant
})
export class Produits {
  // Tableau contenant la liste des produits
  produits : string [];

  // Constructeur du composant : initialise la liste des produits
  constructor() {
    this.produits = ['ASUS', 'Imprimante HP', 'Smartphone Samsung', 'Smartphone Iphone'];
  }
}
