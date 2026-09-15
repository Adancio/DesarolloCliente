import { Component } from '@angular/core';
import { LeftPanel } from '../left-panel/left-panel';
import { RightPanel } from '../right-panel/right-panel';
import { Game } from '../game';

@Component({
  selector: 'app-parent',
  imports: [LeftPanel, RightPanel],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  selected: Game | null = null;

  onSelect(game: Game): void {
    this.selected = game;
  }

  onClear(): void {
    this.selected = null;
  }
}