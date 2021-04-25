import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ResultMethodsService } from 'src/app/Services/result-methods.service';
import { MenuMultiSearchService } from 'src/app/Services/menu-multi-search.service';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { MenuFilter} from '../../Interfaces/Interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public _result : ResultMethodsService,
    public _menuSearch: MenuMultiSearchService
    ) {
        // autocompletacion para la busqueda
    this.filteredOptions = this.QueryValue.valueChanges
    .pipe(
    startWith(''),
    map(option => option ? this._filterOptions(option) : this._menuSearch.Search.slice())
    )
    }
    ngOnInit(): void {
    this._result.MoviesGenersResult()
    this._result.SeriesGenersResult()
  // detecta cambios en la busqueda y solicita la lista de resultados
    this.QueryValue.valueChanges
    .pipe(
      debounceTime(350)
      )
    .subscribe(value => this._menuSearch.MenuFilterResult(value))
  }
  
  TopMovies(){
    this._result.MoviesTopRatedResult()
  }

MoviesCategories(id:number){
  this._result.search_movies_params.with_genres=`${id}`
  this._result.MoviesSearchResult()
}

TopSeries(){
  this._result.SeriesTopRatedResult()
}

SeriesCategories(id:number){
  this._result.search_series_params.with_genres=`${id}`
  this._result.SeriesSearchResult()
}
QueryValue = new FormControl('')
filteredOptions: Observable<MenuFilter[]>;
ClearQueryValue(){
  this.QueryValue.setValue('')
}
// @Output('QueryValue') SearchEmitter = new EventEmitter<string>()
private _filterOptions(value: string): MenuFilter[] {
  const filterValue = value.toLowerCase();

  return this._menuSearch.Search.filter(search => search.name.toLowerCase().indexOf(filterValue) === 0);
}
}
