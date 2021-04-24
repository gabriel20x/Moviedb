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
    public _result : ResultMethodsService
    ) {
      this._result.MoviesGenersResult()
    }
  ngOnInit(): void {
  }
  QueryValue : string = ''

TopMovies(){
  this._result.MoviesTopRatedResult()
}

MoviesCategories(id:number){
  this._result.searchParams.with_genres=`${id}`
  this._result.MoviesSearchResult()
}

}
