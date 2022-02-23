import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JoueursComponent } from './components/joueurs/joueurs.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { OneJoueurComponent } from './components/one-joueur/one-joueur.component';
import { EditJoueurComponent } from './components/edit-joueur/edit-joueur.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: JoueursComponent
  },
  {
    path: 'joueur/:id',
    component: OneJoueurComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    NavbarComponent,
    OneJoueurComponent,
    EditJoueurComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
