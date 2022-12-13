import { Component, OnInit } from '@angular/core';
import { People } from '../shared/interface/IPeople';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


  receivePeople: People[] = [];

  constructor( 
    private peopleService: ServiceService
    ) {}

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople() {
    this.peopleService.getPeople('people').subscribe(dataPeople =>{
      this.receivePeople = dataPeople.results;
      console.log(this.receivePeople)
    })
  }

}
