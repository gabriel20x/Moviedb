import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { movie_result } from '../../Interfaces/Interface';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
  
  movies : movie_result[] = []
  constructor(
    private _api: ApiService
    ) {
      this._api.query(this._api.topRatePath).subscribe(data => this._api.getData(data.results.slice(1,11),this.movies))
      // this._api.query(this._api.topRatePath).subscribe(data => this.movies = data)
  }
  ngOnInit(): void {
  }

  // Peticion(){
  //   console.log(this.movie[0].id)
  //   console.log(Object.values(this.movie))
  // }


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
