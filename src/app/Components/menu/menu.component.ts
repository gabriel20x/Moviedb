import { Component, OnInit } from '@angular/core';
import { SearchMovieParams } from '../../Interfaces/Interface';
// import { GetMoviesQuerysService } from 'src/app/Services/get-movies-querys.service';
// import { MovieResult } from '../../Interfaces/Interface';
import { ResultMethodsService } from 'src/app/Services/result-methods.service';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private _result : ResultMethodsService
    ) {}
  ngOnInit(): void {
  }
  QueryValue : string = ''

TopMovies(){
  this._result.MoviesTopRatedResult()
}

ActionMovie(){
  this._result.searchParams.with_genres="18"
  this._result.MoviesSearchResult()
}
TerrorMovie(){
  this._result.searchParams.with_genres="53,27"
  this._result.MoviesSearchResult()
}
RomanceMovie(){
  this._result.searchParams.with_genres="10749"
  this._result.MoviesSearchResult()
}
ComediaMovie(){
  this._result.searchParams.with_genres="35"
  this._result.MoviesSearchResult()
}


}
