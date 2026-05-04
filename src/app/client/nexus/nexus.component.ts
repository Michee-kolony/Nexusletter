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