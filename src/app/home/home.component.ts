import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/interface/IHome';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: string = '';
   cards: Array<Card> = [
    {icon: '../assets/svg/bug.svg', title: 'Do you know what species are in Star Wars?', description: 'Meet 10 important races from the galaxy "far, far away":', link: 'species'},
    {icon: '../assets/svg/bug.svg', title: 'The Star Wars saga has so many species, including the strongest!', description: 'See the characteristics of each Star Wars species:', link: 'species'},
    {icon: '../assets/svg/films.svg', title: 'See the chronological order of the Star Wars movies', description: 'Start watching Star Wars movies in that order:', link: 'films'},
    {icon: '../assets/svg/films.svg', title: 'View all Star Wars movie information', description: 'Director, producer, release date of...:', link: 'films'},
    {icon: '../assets/svg/people.svg', title: 'Star Wars: Meet the main characters of the saga', description: '"There are non-human creatures that are Force-sensitive"', link: 'people'},
    {icon: '../assets/svg/people.svg', title: 'Strongest character? See and compare', description: 'See the characteristics of each star wars character:', link: 'people'},
    {icon: '../assets/svg/planets.svg', title: 'Discover the 10 Planets of the Star Wars Saga', description: 'Ten Memorable Star Wars Locations:', link: 'planets'},
    {icon: '../assets/svg/planets.svg', title: 'Which Star Wars planet is the best to live on?', description: 'See each characteristic of the planets::', link: 'planets'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  } 


}

// interface Card{
//   icon: string
// }
