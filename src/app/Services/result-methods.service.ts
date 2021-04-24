import { Injectable } from '@angular/core';
import { SearchMovieParams,MovieResult,Geners } from '../Interfaces/Interface';
import { GetMoviesQuerysService } from './get-movies-querys.service';

@Injectable({
  providedIn: 'root'
})
export class ResultMethodsService {

  constructor(
    private _movies: GetMoviesQuerysService
  ) { }
  movies : MovieResult[] = []
  genres : Geners[] = []
  series : [] = []
  searchParams = <SearchMovieParams>{}
  
  // 
  ExtractMoviesData(data:MovieResult[]){
    return data.map(data =>{
      return { 
        id :data.id,
        original_title : data.original_title, 
        popularity : data.popularity,
        release_date : data.release_date,
        poster_path : `${this._movies.ApiImgPath}${data.poster_path}`}
    })
    }

  ExtractMoviesGenersList(data:Geners[]){
    return data.map(data => {
      return { 
        id: data.id,
        name : data.name
      }
    })
  }

  MoviesTopRatedResult(){
    this._movies.TopRatedMoviesQuery().subscribe(data => this.movies = this.ExtractMoviesData(data.results))
  }

  MoviesSearchResult(){
    this._movies.SearchQuery(this.searchParams).subscribe(data => this.movies = this.ExtractMoviesData(data.results))
  }

  MoviesGenersResult(){
    this._movies.GenersQuery().subscribe(data => this.genres = this.ExtractMoviesGenersList(data.genres))
  }

}
