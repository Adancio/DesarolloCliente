import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-right-panel',
  imports: [],
  templateUrl: './right-panel.html',
  styleUrl: './right-panel.css',
})
export class RightPanel {
  @Input() selected: Game | null = null;
  @Output() clear = new EventEmitter<void>();

  onClear(): void {
    this.clear.emit();
  }
}