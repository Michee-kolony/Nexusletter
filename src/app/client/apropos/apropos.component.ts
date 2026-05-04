import { Component, OnInit, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {
    // logique initiale si besoin
    // Forcer le scroll en haut au chargement du composant
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // ou 'auto' si tu veux sans animation
  });
  }

  // MÉTHODE CORRECTE
  ngAfterViewInit(): void {
    new Splide('#image-carousel', {
      type: 'loop',
      perPage: 3, // Desktop
      autoplay: true,
      gap: '1rem',
      breakpoints: {
        768: {
          perPage: 2, // Mobile & tablette
        }
      }
    }).mount();
  }

}