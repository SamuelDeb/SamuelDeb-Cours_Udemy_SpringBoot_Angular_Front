import { TestBed } from '@angular/core/testing';
import { App } from './app';

// Définition du bloc de tests pour le composant App
describe('App', () => {
  // Configuration du module de test avant chaque test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // Importation du composant à tester
    }).compileComponents();
  });

  // Test : vérifie que le composant App est créé correctement
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Vérifie que l'instance existe
  });

  // Test : vérifie que le titre s'affiche correctement dans le template
  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Déclenche la détection des changements
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, MesProduits'); // Vérifie le contenu du h1
  });
});
