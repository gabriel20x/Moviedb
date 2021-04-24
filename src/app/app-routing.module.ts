import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponentComponent } from './Components/movie-component/movie-component.component';
import { SeriesComponent } from './Components/series/series.component';


const routes: Routes = [
  {
    path: '',
    component: MovieComponentComponent
  },
  {
    path: 'Series',
    component: SeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
