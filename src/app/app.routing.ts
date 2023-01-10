import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders} from '@angular/core'

import { FilmesComponent } from "./filmes/filmes.component";
import { HomeComponent } from "./home/home.component";
import { PeopleComponent } from "./people/people.component";
import { PlanetsComponent } from "./planets/planets.component";
import { SpeciesComponent } from "./species/species.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '**', component: PageNotFoundComponent}, //Todo: criar componente 
    { path: 'films', component: FilmesComponent},
    { path: 'species', component: SpeciesComponent},
    { path: 'planets', component: PlanetsComponent},
    { path: 'people', component: PeopleComponent},
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES)