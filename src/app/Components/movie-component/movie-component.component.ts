import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/Services/api.service';
import { ResultMethodsService } from 'src/app/Services/result-methods.service';
import { MovieResult } from '../../Interfaces/Interface';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
  // movies : MovieResult[] = []
  constructor(
    public _result : ResultMethodsService
    ) {
    // this._api.query(this._api.topRatePath).subscribe(data => this.movies = this._api.getData(data.results.slice(1,11)))
    this._result.MoviesTopRatedResult()
  }
  ngOnInit(): void {
  }



}
