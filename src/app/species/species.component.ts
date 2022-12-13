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



  // getPeople() {
  //   this.peopleService.getPeople('people').subscribe(dataPeople =>{
  //     this.receivePeople = dataPeople.results;
  //     console.log(this.receivePeople)
  //   })
  // }

}
