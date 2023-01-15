import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResultsFilms, ResultsPeople, ResultsPlanets, ResultsSpecies } from '../interface/responseResultsFilms';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient: HttpClient) { } 

  public getPeople(people: string): Observable<ResultsPeople> {
    return this._httpClient.get<ResultsPeople>(`${API_PATH}/people`)
  }
    // return this._httpClient.get<People[]>(`${API_PEOPLE}/people`)//trocar links da api path
  
  public getPlanets(): Observable<ResultsPlanets> {
    return this._httpClient.get<ResultsPlanets>(`${API_PATH}/planets`)
  }
  
  public getFilms(): Observable<ResultsFilms> {
    return this._httpClient.get<ResultsFilms>(`${API_PATH}/films`)
  }

 public getSpecies(): Observable<ResultsSpecies> {
    return this._httpClient.get<ResultsSpecies>(`${API_PATH}/species`)
  }

}
