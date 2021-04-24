import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResult } from '../Interfaces/Interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { 
    }
  topRatePath = "/movie/top_rated"
  // Esta key es falsa
  api_key : string = "8a161bcf3add53b7f9cb311d5e5f5a22"
  // Enserio, es falsa
  api_url : string = "https://api.themoviedb.org/3"
  api_imgPath : string=  "https://image.tmdb.org/t/p/w300"
  busqueda : string = ''
  query(path:string):Observable<any>{
    this.busqueda = `${this.api_url}${path}?api_key=${this.api_key}`
    return this._http.get<any>(this.busqueda)
  }

  getData(data:MovieResult[]){
    return data.map(data =>{
      return { id :data.id,
              original_title : data.original_title, 
              popularity : data.popularity,
              release_date : data.release_date,
              poster_path : `${this.api_imgPath}${data.poster_path}`}
    }
      )
    }
}