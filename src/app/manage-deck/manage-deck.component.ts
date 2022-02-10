import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-manage-deck',
  templateUrl: './manage-deck.component.html',
  styleUrls: ['./manage-deck.component.scss'],
})
export class ManageDeckComponent implements OnInit {
  decks: any[] = [];
  decksSub!: Subscription;
  constructor(
    private deckService: DeckService
  ) {}
  ngOnInit(): void {
    this.decks = this.deckService.getAllDeckInfo();
    this.decksSub = this.deckService.decks$.subscribe(
      () => (this.decks = this.deckService.getAllDeckInfo())
    );
  }
  deleteDeck(name: string) {
    this.deckService.removeDeck(name);
  }
}
