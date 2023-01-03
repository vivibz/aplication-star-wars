import { Component, OnInit } from '@angular/core';
import { Species } from '../shared/interface/ISpecies';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  receiveSpecies: Species[] = [];
  searchText: string = '';

  constructor(
    private speciesService: ServiceService
  ) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies() {
    this.speciesService.getSpecies().subscribe( dataSpecies => {
      this.receiveSpecies = dataSpecies.results;
    })
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  } 

}
