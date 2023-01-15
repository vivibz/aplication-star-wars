import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SpeciesComponent } from './species/species.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { routing } from './app.routing';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmesComponent,
    SpeciesComponent,
    PeopleComponent,
    PlanetsComponent,
    SearchComponent,
    FooterComponent,
    LoadingComponent,
  
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
