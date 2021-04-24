import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchMovieParams } from '../Interfaces/Interface';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesQuerysService {

  constructor(
    private _http: HttpClient
  ) {}

  
  // Esta key es falsa
  ApiKey : string = "8a161bcf3add53b7f9cb311d5e5f5a22"
  // Api's URL
  ApiUrl : string = "https://api.themoviedb.org/3"
  ApiImgPath : string=  "https://image.tmdb.org/t/p/w300"
  //Paths
  TopRatePath = "/movie/top_rated"
  DiscoverPath = "/discover/movie"
  QueryString : string = ''
  ParamsString : String = ''

  SearchQuery(Params:SearchMovieParams):Observable<any>{
    Object.entries(Params).forEach(([key,value]) => {
      if(value){
        this.ParamsString = this.ParamsString + `&${key}=${value}`
      }
    });
    this.QueryString = `${this.ApiUrl}${this.DiscoverPath}?api_key=${this.ApiKey}&language=en-US${this.ParamsString}`
    return this._http.get<any>(this.QueryString)
  }

  TopRatedMoviesQuery():Observable<any>{
    this.QueryString = `${this.ApiUrl}${this.TopRatePath}?api_key=${this.ApiKey}&language=en-US`
    return this._http.get<any>(this.QueryString)
  }

}
