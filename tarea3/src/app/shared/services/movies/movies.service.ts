import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie';
import { MOVIES } from '../../data/movies.data';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private readonly movies: Movie[] = MOVIES;

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }
}