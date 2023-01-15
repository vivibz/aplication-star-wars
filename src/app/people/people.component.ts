import { Component, OnInit, Output } from '@angular/core';
import { People } from '../shared/interface/IPeople';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  loading = false;

  receivePeople: People[] = [];
  searchText: string = '';

  constructor( 
    private peopleService: ServiceService
    ) {}

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople() {
    this.loading = true;
    this.peopleService.getPeople('people').subscribe(dataPeople =>{
      this.receivePeople = dataPeople.results;
      this.loading = false;
    })
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  } 


}
