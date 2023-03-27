import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies:any[]=[];
  constructor(private ms: MovieService) {}

  ngOnInit(): void {
    this.ms.MovieList().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }
}
