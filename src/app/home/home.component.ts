import { Component, OnInit } from '@angular/core';
import { Card, ImgFilms, ImgPeople } from '../shared/interface/IHome';


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

  imgPeoples: Array<ImgPeople> = [
    {img:'../assets/img/r2-d2.jpg', title:'R2-D2', link: '' },
    {img: '../assets/img/c-3po.png', title:'C-3po', link: ''},
    {img: '../assets/img/obi-wan.jpg', title:'Obi-Wan Kenobi', link: ''},
    {img: '../assets/img/r5-d4.jpg', title:'R5-D4', link: ''},
    {img: '../assets/img/leia-organa.jpg', title:'Leia Organa', link: ''},
    {img: '../assets/img/darth-vader.jpg', title: 'Darth Vader', link: ''}, 
  ]

  imgFilms: Array<ImgFilms> = [
    {img:'../assets/img/New-Hope.jpeg', title:'A New Hope', link: '1' },
    {img: '../assets/img/The_Empire_Strikes_Back.jpg', title:'The Empire Strikes Back', link: '2'},
    {img: '../assets/img/Return-Of-The-Jedi.jpg', title: 'Return of the Jedi', link: '3'},
    {img: '../assets/img/phantom-menace.jpg', title:'The Phantom Menace', link: '4'},
    {img: '../assets/img/attack-of-the-clones.jpg', title:'Attack of the Clones', link: '5'},
    {img: '../assets/img/revenge-of-the-sith.jpg', title:'Revenge of the Sith', link: '6'}
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
