import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {ngAfterViewInit(): void {
  new Splide('#image-carousel', {
    type: 'loop',
    perPage: 3, // Desktop (par défaut)
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
