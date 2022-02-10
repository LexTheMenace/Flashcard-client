import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deck-list-item',
  templateUrl: './deck-list-item.component.html',
  styleUrls: ['./deck-list-item.component.scss']
})
export class DeckListItemComponent {
  @Input() name!: string;
  @Input() length!: string;
  @Input() delButton!: boolean;
  @Input() menuButton!: boolean;
  @Input() menuOpen!: boolean;
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  deleteDeck(e:Event){
    e.stopPropagation();
    this.delete.emit();
  }
}
