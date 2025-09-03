import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css'
})
export class AddProduit implements OnInit {

  newProduit = new Produit();
  message! : string;


 constructor(private produitService: ProduitService) { }


  addProduit() {
    // console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
       this.message = "Produit "+this.newProduit.nomProduit +" ajouté avec succès !"

  }
  ngOnInit(): void {
      
  }

}
