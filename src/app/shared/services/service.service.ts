import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH} from 'src/environments/environment';
import { People } from 'src/app/shared/interface/IPeople';
import { Films } from 'src/app/shared/interface/IFilms';
import { Species } from 'src/app/shared/interface/ISpecies';
import { Planets } from 'src/app/shared/interface/IPlanets';
import { Observable } from 'rxjs';
import { ResultsFilms } from '../interface/responseResultsFilms';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient: HttpClient) { } 

  public getPeople(people: string): Observable<People> {
    return this._httpClient.get<People>(`${API_PATH}/people`)
  }
    // return this._httpClient.get<People[]>(`${API_PEOPLE}/people`)//trocar links da api path
  

  getPlanets() {
    return this._httpClient.get<Planets[]>(`${API_PATH}/planets`)
  }

  public getFilms(films: string): Observable<ResultsFilms> {
    return this._httpClient.get<ResultsFilms>(`${API_PATH}/films`)
  }

  getSpecies() {
    return this._httpClient.get<Species[]>(`${API_PATH}/species`)
  }

}
