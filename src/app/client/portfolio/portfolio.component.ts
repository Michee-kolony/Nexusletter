import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // ou 'auto' si tu veux sans animation
  });
  }

}
