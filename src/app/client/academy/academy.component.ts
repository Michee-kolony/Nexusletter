import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {

  isVideoOpen = false;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
     // Forcer le scroll en haut au chargement du composant
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // ou 'auto' si tu veux sans animation
  });
    // Menu mobile toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

    openVideo() {
    const url = '/images/jeny.mp4';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.isVideoOpen = true;
  }

  closeVideo() {
    this.isVideoOpen = false;
  }
}