import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient: HttpClient) { }

  getPeople() {
    return this._httpClient.get(`${API_PATH}/people`)
  }

  getPlanets() {
    return this._httpClient.get(`${API_PATH}/planets`)
  }

  getFilms() {
    return this._httpClient.get(`${API_PATH}/films`)
  }

  getSpecies() {
    return this._httpClient.get(`${API_PATH}/species`)
  }

}
