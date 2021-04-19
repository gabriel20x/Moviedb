import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movie_result } from '../Interfaces/Interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { 
    }
  topRatePath = "/movie/top_rated"
  api_key : string = "8a161bcf3add53b7f9cb311d5e5f5a22"
  api_url : string = "https://api.themoviedb.org/3"
  api_imgPath : string=  "https://image.tmdb.org/t/p/w500"
  busqueda : string = ''
  // movie = <movie_result>{}
  movies : movie_result[] = [{}]
  query(path:string){
    this.busqueda = `${this.api_url}${path}?api_key=${this.api_key}`
    this._http.get<any>(this.busqueda).subscribe(data => this.getData(data.results.slice(1,11)))
  }
  getData(data:movie_result) {
      this.movies[0] = <movie_result>{ id : data[0].id,
                                      original_title : data[0].original_title, 
                                      popularity : data[0].popularity,
                                      release_date : data[0].release_date,
                                      poster_path : data[0].poster_path  }
      console.log(this.movies)
    }
}
