import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nexus',
  templateUrl: './nexus.component.html',
  styleUrl: './nexus.component.css'
})
export class NexusComponent implements OnInit {

  showScrollTop = false;
  showWhatsAppPopup = false;

  ngOnInit(): void {
     // Forcer le scroll en haut au chargement du composant
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // ou 'auto' si tu veux sans animation
  });

    // popup après 5 secondes
    setTimeout(() => {
      this.showWhatsAppPopup = true;
    }, 5000);
  }

  // SCROLL BUTTON
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.showScrollTop = scrollPosition > 50;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // fermer popup
  closeWhatsApp() {
    this.showWhatsAppPopup = false;
  }

}