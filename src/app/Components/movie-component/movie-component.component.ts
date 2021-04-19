import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { movie_result } from '../../Interfaces/Interface';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {

  constructor(
   private _api: ApiService
  ) {
    
  }
  movie : movie_result[] = [{}]
  ngOnInit(): void {
   console.log(this._api.query(this._api.topRatePath))
  }


  // movies: movieElement[] = [
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021},
  //   {imgUrl: 'https://animerelleno.com/storage/animes/poster/toradora.jpg', title: "Toradora", score: 100, year: 2021}
  // ];
}
