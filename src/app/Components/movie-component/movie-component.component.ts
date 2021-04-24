import { Component, OnInit } from '@angular/core';
import { ResultMethodsService } from 'src/app/Services/result-methods.service';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
  constructor(
    public _result : ResultMethodsService
    ) {
    this._result.MoviesTopRatedResult()
  }
  ngOnInit(): void {
  }
}
