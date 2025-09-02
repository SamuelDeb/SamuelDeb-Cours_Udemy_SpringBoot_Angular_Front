import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Déclaration du composant principal de l'application
@Component({
  selector: 'app-root',           // Sélecteur utilisé dans index.html
  imports: [RouterOutlet],        // Importation du RouterOutlet pour la navigation
  templateUrl: './app.html',      // Chemin du template HTML du composant
  styleUrl: './app.css'           // Chemin du fichier de styles CSS du composant
})
export class App {
  // Signal contenant le titre de l'application
  protected readonly title = signal('MesProduits');
}
