import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from '../main/footer/footer.component';
import {HeaderComponent} from '../main/header/header.component';
import {RouterModule} from '@angular/router';
import { StartComponent } from './start/start.component';
import { PrijzenComponent } from './prijzen/prijzen.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    StartComponent,
    PrijzenComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'start', component: StartComponent},
      {path: 'prijzen', component: PrijzenComponent},
      {path: 'projecten', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: 'start', pathMatch: 'full'}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
