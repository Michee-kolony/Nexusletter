import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './client/accueil/accueil.component';
import { NexusComponent } from './client/nexus/nexus.component';
import { ContactComponent } from './client/contact/contact.component';
import { AproposComponent } from './client/apropos/apropos.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';
import { ServicesComponent } from './client/services/services.component';
import { AcademyComponent } from './client/academy/academy.component';

const routes: Routes = [
  {path:'', redirectTo:'nexusletter', pathMatch:'full'},
  {path:'nexusletter', component: NexusComponent,
    children:[
      {path:'', redirectTo: 'accueil', pathMatch:'full'},
      {path:'accueil', component: AccueilComponent},
      {path:'contact', component: ContactComponent},
      {path:'apropos', component: AproposComponent},
      {path:'portfolio', component: PortfolioComponent},
      {path:'services', component: ServicesComponent}
    ]
  },
  {path:'creators-digital-academy', component: AcademyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
