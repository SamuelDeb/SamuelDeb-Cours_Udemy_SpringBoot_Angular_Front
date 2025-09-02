// Importation des modules nécessaires d'Angular
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Importation des routes de l'application
import { routes } from './app.routes';

// Configuration principale de l'application Angular
export const appConfig: ApplicationConfig = {
  providers: [
    // Fournit les écouteurs d'erreurs globales du navigateur
    provideBrowserGlobalErrorListeners(),
    // Active la détection de changement de zone avec coalescence des événements
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Fournit la configuration du routeur avec les routes définies
    provideRouter(routes)
  ]
};
