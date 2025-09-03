import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css'
})
export class Produits {

  produits : string [];

  constructor() {
    this.produits = ['ASUS', 'Imprimante HP', 'Smartphone Samsung', 'Smartphone Iphone'];
  }

}
