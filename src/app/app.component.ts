import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  // searchText: string = '';

   constructor( 
     public router: Router
   ) {}

  ngOnInit(): void {
    console.log(this.router.url + 'mais')
  }

  // onSearchTextEntered(searchValue: string) {
  //   this.searchText = searchValue;
  //   console.log(this.searchText);
  // } 

}