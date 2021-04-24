import { Component, OnInit } from '@angular/core';
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
      this._result.SeriesGenersResult()
    }
  ngOnInit(): void {
  }
  QueryValue : string = ''

TopMovies(){
  this._result.MoviesTopRatedResult()
}

MoviesCategories(id:number){
  this._result.search_movies_params.with_genres=`${id}`
  this._result.MoviesSearchResult()
}

TopSeries(){
  this._result.SeriesTopRatedResult()
}

SeriesCategories(id:number){
  this._result.search_series_params.with_genres=`${id}`
  this._result.SeriesSearchResult()
}

}
