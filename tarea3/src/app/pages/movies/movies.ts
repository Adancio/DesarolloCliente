import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

type Criterion = 'all' | 'title' | 'director' | 'producer' | 'genre' | 'year';

@Component({
  selector: 'app-movies',
  imports: [ReactiveFormsModule, MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  private readonly moviesService = inject(MoviesService);
  private readonly allMovies = this.moviesService.getAll();

  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly criterionControl = new FormControl<Criterion>('all', { nonNullable: true });

  private readonly search = toSignal(this.searchControl.valueChanges, { initialValue: '' });
  private readonly criterion = toSignal(this.criterionControl.valueChanges, {
    initialValue: 'all' as Criterion,
  });

  readonly filteredMovies = computed(() => {
    const term = this.search().trim().toLowerCase();
    if (!term) {
      return this.allMovies;
    }

    const criterion = this.criterion();

    return this.allMovies.filter((movie) => {
      const fields: Record<Exclude<Criterion, 'all'>, string> = {
        title: movie.title,
        director: movie.director,
        producer: movie.producer,
        genre: movie.genre,
        year: String(movie.year),
      };

      if (criterion === 'all') {
        return Object.values(fields).some((value) => value.toLowerCase().includes(term));
      }

      return fields[criterion].toLowerCase().includes(term);
    });
  });
}