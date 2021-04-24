import { Injectable } from '@angular/core';
import { SearchMovieParams,MovieResult,Genres,SeriesResult,SearchSeriesParams } from '../Interfaces/Interface';
import { GetMoviesQuerysService } from './get-movies-querys.service';
import { GetSeriesQuerysService } from './get-series-querys.service';

@Injectable({
  providedIn: 'root'
})
export class ResultMethodsService {

  constructor(
    private _movies: GetMoviesQuerysService,
    private _series: GetSeriesQuerysService
  ) { }
  movies : MovieResult[] = []
  movies_genres : Genres[] = []
  series : SeriesResult[] = []
  series_genres : Genres[] = []
  search_movies_params = <SearchMovieParams>{}
  search_series_params = <SearchSeriesParams>{}
  
  // Resultados de Peliculas
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

  MoviesTopRatedResult(){
    this._movies.TopRatedMoviesQuery().subscribe(data => this.movies = this.ExtractMoviesData(data.results))
  }

  MoviesSearchResult(){
    this._movies.SearchQuery(this.search_movies_params).subscribe(data => this.movies = this.ExtractMoviesData(data.results))
  }

  MoviesGenersResult(){
    this._movies.GenersQuery().subscribe(data => this.movies_genres = this.ExtractGenersList(data.genres))
  }

// Resultados de Series
ExtractSeriesData(data:SeriesResult[]){
  return data.map(data =>{
    return { 
      id :data.id,
      original_name : data.original_name,
      popularity : data.popularity,
      first_air_date : data.first_air_date,
      poster_path : `${this._series.ApiImgPath}${data.poster_path}`}
  })
  }

SeriesTopRatedResult(){
  this._series.TopRatedSeriesQuery().subscribe(data => this.series = this.ExtractSeriesData(data.results))
}

SeriesSearchResult(){
  this._series.SearchQuery(this.search_series_params).subscribe(data => this.series = this.ExtractSeriesData(data.results))
}

SeriesGenersResult(){
  this._series.GenersQuery().subscribe(data => this.series_genres = this.ExtractGenersList(data.genres))
}

ExtractGenersList(data:Genres[]){
  return data.map(data => {
    return { 
      id: data.id,
      name : data.name
    }
  })
}

}
