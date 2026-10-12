import { Routes } from '@angular/router';
import { Movies } from './pages/movies/movies';
import { MovieDetails } from './pages/movie-details/movie-details';
import { Favorites } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: Movies },
  { path: 'movies/:id', component: MovieDetails },
  { path: 'favorites', component: Favorites },
  { path: '**', redirectTo: '' },
];