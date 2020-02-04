import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from '../main/footer/footer.component';
import {HeaderComponent} from '../main/header/header.component';
import {RouterModule} from '@angular/router';
import { StartComponent } from './start/start.component';
import { PrijzenComponent } from './aanbod/prijzen.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { OfferteComponent } from './offerte/offerte.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    StartComponent,
    PrijzenComponent,
    ProjectsComponent,
    ContactComponent,
    OfferteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'start', component: StartComponent},
      {path: 'aanbod', component: PrijzenComponent},
      {path: 'projecten', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'offerte', component: OfferteComponent},
      {path: '', redirectTo: 'start', pathMatch: 'full'}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
