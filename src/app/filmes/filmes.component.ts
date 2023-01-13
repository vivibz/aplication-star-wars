import { Component, OnInit } from '@angular/core';
import { Films } from '../shared/interface/IFilms';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  receiveMovies: Films[] = [];
  searchText: string = '';

  constructor( 
    private filmsService: ServiceService
    ) { }

    ngOnInit(): void {
      this.getFilms();
    }
  
  getFilms() {
    this.filmsService.getFilms().subscribe( data => {
      this.receiveMovies = data.results;
    });
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  } 

}
