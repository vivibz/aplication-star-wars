import { Component, OnInit } from '@angular/core';
import { Films } from '../shared/interface/IFilms';
import { Card, ImgFilms, ImgPeople } from '../shared/interface/IHome';
import { ServiceService } from '../shared/services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _service : ServiceService
    ) { }

  ngOnInit(): void {
    this. getFilms();
  }

  loading = false;

  films: Films[] = [];

  isShowingModal: boolean = false;
  infoModalFilms: string = ''
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
    {img:'../assets/img/r2-d2.jpg', title:'R2-D2', descriptionModal: ''},
    {img: '../assets/img/c-3po.png', title:'C-3po', descriptionModal: ''},
    {img: '../assets/img/obi-wan.jpg', title:'Obi-Wan Kenobi', descriptionModal: ''},
    {img: '../assets/img/r5-d4.jpg', title:'R5-D4', descriptionModal: ''},
    {img: '../assets/img/leia-organa.jpg', title:'Leia Organa', descriptionModal: ''},
    {img: '../assets/img/darth-vader.jpg', title: 'Darth Vader', descriptionModal: ''}, 
  ]

  imgFilmModal: ImgFilms = {img: '', title: '', descriptionModal: '',}

  

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  } 

  showModal = (film?: Films) => {
    this.isShowingModal = !this.isShowingModal;
    this.imgFilmModal.descriptionModal = film!.opening_crawl;
    this.imgFilmModal.title = film!.title;
  }



  getFilms() {
    this.loading = true;
    this._service.getFilms().subscribe( movies => {
      this.films = movies.results;
      this.loading = false
    })
    
    // if film.title == 'new holpe' {
    //   return '../assets/img/New-Hope.jpeg';
    // }
  }

  getFilmCover(filmTitle: string) {
    if (filmTitle == 'A New Hope' ) {
      return '../assets/img/New-Hope.jpeg' 
    }
    if (filmTitle == 'The Empire Strikes Back') {
      return  '../assets/img/The_Empire_Strikes_Back.jpg'
    }
    if (filmTitle == 'Return of the Jedi') {
      return '../assets/img/Return-Of-The-Jedi.jpg'
    }
    if (filmTitle == 'The Phantom Menace') {
      return '../assets/img/phantom-menace.jpg'
    }
    if (filmTitle == 'Attack of the Clones') {
      return '../assets/img/attack-of-the-clones.jpg'
    }
    if (filmTitle == 'Revenge of the Sith') {
      return '../assets/img/revenge-of-the-sith.jpg'
    } 
    return ''
  }
}

// interface Card{
//   icon: string
// }
