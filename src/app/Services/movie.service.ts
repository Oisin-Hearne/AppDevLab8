import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private hc: HttpClient) { }

  MovieList():Observable<any> {
    return this.hc.get('http://www.omdbapi.com/?apikey=b0102157&s=%27war%27');
  }
}
