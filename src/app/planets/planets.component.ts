import { Component, OnInit } from '@angular/core';
import { Planets } from '../shared/interface/IPlanets';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  receivePlanets: Planets[] = [];

  constructor(
    private planetsService : ServiceService
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }


  getPlanets(){
    this.planetsService.getPlanets().subscribe( dataPlanets => {
      this.receivePlanets = dataPlanets.results;
    })
  }
}
