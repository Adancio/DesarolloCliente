import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { FavoritesService } from '../../shared/services/favorites/favorites.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [RouterLink, NgClass],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly moviesService = inject(MoviesService);
  protected readonly favoritesService = inject(FavoritesService);

  private readonly id = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: NaN },
  );

  readonly movie = computed(() => this.moviesService.getById(this.id()));
}