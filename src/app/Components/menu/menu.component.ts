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

ActionMovie(){
  this._result.searchParams.with_genres="18"
  this._result.MoviesSearchResult()
}

}
