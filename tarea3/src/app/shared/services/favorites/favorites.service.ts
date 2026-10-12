import { Injectable, signal } from '@angular/core';
import { Movie } from '../../models/movie';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly _favorites = signal<Movie[]>([]);

  readonly favorites = this._favorites.asReadonly();

  add(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      return;
    }
    this._favorites.update((list) => [...list, movie]);
  }

  remove(id: number): void {
    this._favorites.update((list) => list.filter((movie) => movie.id !== id));
  }

  isFavorite(id: number): boolean {
    return this._favorites().some((movie) => movie.id === id);
  }

  toggle(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      this.remove(movie.id);
    } else {
      this.add(movie);
    }
  }
}