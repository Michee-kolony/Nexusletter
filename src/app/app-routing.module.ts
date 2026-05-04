import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './client/accueil/accueil.component';
import { NexusComponent } from './client/nexus/nexus.component';

const routes: Routes = [
  {path:'', redirectTo:'nexusletter', pathMatch:'full'},
  {path:'nexusletter', component: NexusComponent,
    children:[
      {path:'', redirectTo: 'accueil', pathMatch:'full'},
      {path:'accueil', component: AccueilComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
