import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  } 

}
