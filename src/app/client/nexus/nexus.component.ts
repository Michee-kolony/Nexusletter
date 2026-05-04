// nexus.component.ts (version corrigée)
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nexus',
  templateUrl: './nexus.component.html',
  styleUrls: ['./nexus.component.css']
})
export class NexusComponent implements OnInit {

  showScrollTop = false;
  showSplash = true;
  displayedText = '';
  isTyping = true;
  showProgress = false;
  progressWidth = 0;
   stars: number[] = [];

  private texts = ['Bienvenue chez NexusLetters', 'Allons-y !'];
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private typingSpeed = 100;
  private erasingSpeed = 50;
  private pauseDuration = 1500;

  ngOnInit(): void {

      // Générer 200 petites étoiles oranges
    this.stars = Array(200).fill(0).map((_, i) => i);
    // Forcer le scroll en haut au chargement du composant
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Démarrer l'animation du texte
    this.typeNextText();
    
    // Créer les particules
    this.createParticles();
    
    // Cacher le splashscreen après la fin des animations
    setTimeout(() => {
      this.showSplash = false;
    }, 5000);
  }

  // Effet machine à écrire
  typeNextText() {
    if (this.currentTextIndex >= this.texts.length) {
      this.isTyping = false;
      this.startProgressBar();
      return;
    }

    const currentText = this.texts[this.currentTextIndex];
    
    if (this.currentCharIndex < currentText.length) {
      this.displayedText += currentText[this.currentCharIndex];
      this.currentCharIndex++;
      setTimeout(() => this.typeNextText(), this.typingSpeed);
    } else {
      // Pause avant d'effacer ou de passer au texte suivant
      setTimeout(() => {
        if (this.currentTextIndex === 0) {
          this.eraseText();
        } else {
          this.currentTextIndex++;
          this.typeNextText();
        }
      }, this.pauseDuration);
    }
  }

  eraseText() {
    if (this.displayedText.length > 0) {
      this.displayedText = this.displayedText.slice(0, -1);
      setTimeout(() => this.eraseText(), this.erasingSpeed);
    } else {
      this.currentCharIndex = 0;
      this.currentTextIndex++;
      this.typeNextText();
    }
  }

  startProgressBar() {
    this.showProgress = true;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      this.progressWidth = progress;
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 20);
  }

  // Création des particules - VERSION CORRIGÉE
  createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 3;
      particle.style.position = 'absolute';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.backgroundColor = `hsl(${Math.random() * 60 + 30}, 100%, 50%)`;
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      // Correction ici : conversion en string avec +
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      particle.style.animation = `floatParticle ${Math.random() * 10 + 5}s linear infinite`;
      particle.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(particle);
    }
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
}