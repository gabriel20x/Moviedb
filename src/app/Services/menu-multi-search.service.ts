import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuFilter, MovieResult, SeriesResult } from '../Interfaces/Interface'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuMultiSearchService {
  constructor(
    private _http : HttpClient
    ) { 
    }
  // Esta key es falsa
  ApiKey : string = "8a161bcf3add53b7f9cb311d5e5f5a22"
  // Api's URL
  ApiUrl : string = "https://api.themoviedb.org/3"
  SearchPath :string = "/search/multi"
  Search : MenuFilter[] = []

  QueryString : string = ''
  MenuFilterQuery(query:string):Observable<any>{
    this.QueryString = `${this.ApiUrl}${this.SearchPath}?api_key=${this.ApiKey}&query=${query}`
    return this._http.get<any>(this.QueryString)
  }
  MenuFilterResult(query:string){
  if(query!=''){
    this.MenuFilterQuery(query).subscribe(data => this.Search = this.ExtractFilterData(data.results))
    console.log(this.Search)
  }
  }
  ExtractFilterData(data:any){
    return data.map((data: { media_type: string; id: number; original_title: string; original_name: string; }) =>{
      if (data.media_type == "movie") {
        return {
          id :data.id,
          name: data.original_title,
          media_type: data.media_type
        }
      } 
      if (data.media_type == "tv")
      {
        return {
          id :data.id,
          name: data.original_name,
          media_type: data.media_type
        }
      }
      return <MenuFilter>{}
        }
    )
  }
}
