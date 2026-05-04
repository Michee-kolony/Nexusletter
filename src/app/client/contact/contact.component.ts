import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Forcer le scroll en haut au chargement du composant
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // ou 'auto' si tu veux sans animation
  });

  }
}
