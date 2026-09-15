import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-left-panel',
  imports: [],
  templateUrl: './left-panel.html',
  styleUrl: './left-panel.css',
})
export class LeftPanel {
  games: Game[] = [
    { title: 'FIFA 2022', year: 2022, genre: 'Deportes', rating: 8.1 },
    { title: 'Forza Horizon 5', year: 2021, genre: 'Carreras', rating: 9.0 },
    { title: 'Halo Infinite', year: 2021, genre: 'Shooter', rating: 8.7 },
    { title: 'Fortnite', year: 2017, genre: 'Battle Royale', rating: 8.3 },
    { title: 'Call of Duty: Modern Warfare II', year: 2022, genre: 'Shooter', rating: 8.0 },
  ];

  @Input() selected: Game | null = null;
  @Output() select = new EventEmitter<Game>();

  onSelect(game: Game): void {
    this.select.emit(game);
  }
}