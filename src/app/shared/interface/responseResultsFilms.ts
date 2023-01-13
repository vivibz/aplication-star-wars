import { Films } from "./IFilms";
import { People } from "./IPeople";
import { Planets } from "./IPlanets";
import { Species } from "./ISpecies";

export interface ResultsFilms{
    results: Films[];
}

export interface ResultsPeople{
    results: People[];
}

export interface ResultsPlanets{
    results: Planets[];
}

export interface ResultsSpecies{
    results: Species[];
}

// export interface ResultForHome {
//     results: any[]
// }