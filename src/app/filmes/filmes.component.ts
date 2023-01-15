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

  loading = false;

  constructor( 
    private filmsService: ServiceService
    ) { }

    ngOnInit(): void {
      this.getFilms();
    }
  
  getFilms() {
    this.loading = true;
    this.filmsService.getFilms().subscribe( data => {
      this.receiveMovies = data.results;
      this.loading = false;
    });
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  } 

}
