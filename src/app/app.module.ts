import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NexusComponent } from './client/nexus/nexus.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { AproposComponent } from './client/apropos/apropos.component';
import { FooterComponent } from './client/footer/footer.component';
import { FaqComponent } from './client/faq/faq.component';
import { ContactComponent } from './client/contact/contact.component';
import { ServicesComponent } from './client/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NexusComponent,
    AccueilComponent,
    NavbarComponent,
    AproposComponent,
    FooterComponent,
    FaqComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
