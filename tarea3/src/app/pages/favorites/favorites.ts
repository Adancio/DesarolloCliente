import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../shared/services/favorites/favorites.service';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  protected readonly favoritesService = inject(FavoritesService);
}