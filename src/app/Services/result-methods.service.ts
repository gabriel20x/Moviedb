import { Injectable } from '@angular/core';
import { SearchMovieParams,MovieResult } from '../Interfaces/Interface';
import { GetMoviesQuerysService } from './get-movies-querys.service';

@Injectable({
  providedIn: 'root'
})
export class ResultMethodsService {

  constructor(
    private _movies: GetMoviesQuerysService
  ) { }
  movies : MovieResult[] = []
  series : [] = []
  searchParams = <SearchMovieParams>{}
  
  // 
  ExtractMoviesData(data:MovieResult[]){
    return data.map(data =>{
      return { id :data.id,
              original_title : data.original_title, 
              popularity : data.popularity,
              release_date : data.release_date,
              poster_path : `${this._movies.ApiImgPath}${data.poster_path}`}
    }
      )
    }

  MoviesTopRatedResult(){
    this._movies.TopRatedMoviesQuery().subscribe(data => this.movies = this.ExtractMoviesData(data.results))
    return this.movies
  }

  MoviesSearchResult(){
    this._movies.SearchQuery(this.searchParams).subscribe(data => this.movies = this.ExtractMoviesData(data.results))
    return this._movies
  }

}
