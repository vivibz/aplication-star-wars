import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SpeciesComponent } from './species/species.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { routing } from './app.routing';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FilmesComponent,
    SpeciesComponent,
    PeopleComponent,
    PlanetsComponent,
    SearchComponent,
    FooterComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
