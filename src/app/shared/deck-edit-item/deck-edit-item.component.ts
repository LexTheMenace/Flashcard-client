import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deck-edit-item',
  templateUrl: './deck-edit-item.component.html',
  styleUrls: ['./deck-edit-item.component.scss']
})
export class DeckEditItemComponent {
  @Input() card!: any;
  @Input() cardNumber!: any;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  addCard(){
    this.add.emit();
  }
  removeCard(){
    this.remove.emit();
  }
}
