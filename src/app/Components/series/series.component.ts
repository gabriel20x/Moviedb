import { Component, OnInit } from '@angular/core';
import { ResultMethodsService } from 'src/app/Services/result-methods.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(
    public _result : ResultMethodsService
  ) { }

  ngOnInit(): void {
  }

}
