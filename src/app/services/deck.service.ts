import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Deck } from '../models/Deck.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  decks: Deck[] = [];
  deckSubject: BehaviorSubject<Deck[]> = new BehaviorSubject([] as Deck[]);
  decks$: Observable<Deck[]> = this.deckSubject.asObservable();

  constructor(private storageService: StorageService) {}

  getDeckByName(name: string) {
    return this.decks.filter((d) => d.name === name)[0];
  }
  getAllDeckInfo() {
    return this.decks.map((d) => ({ name: d.name, length: d.cards.length }));
  }
  addDeck(newDeck: Deck) {
    this.decks.push(new Deck(newDeck.name, newDeck.cards, ''));
    this.saveDecks();
  }
  updateDeck(updatedDeck: Deck) {
    const deckIndex = this.decks.findIndex((d) => d.id === updatedDeck.id);
    console.log(updatedDeck);

    if (deckIndex > -1) {
      Object.assign(this.decks[deckIndex], updatedDeck);
      this.saveDecks();
    }
  }
  removeDeck(name: string) {
    const deckIndex = this.decks.findIndex((d) => d.name === name);
    if (deckIndex > -1) {
      this.decks.splice(deckIndex, 1);
      this.saveDecks();
    }
  }

  saveDecks() {
    this.storageService.set('flashcards', this.decks);
    this.deckSubject.next(this.decks);
  }
  fetchDecks() {
    const cards = this.storageService.get('flashcards');
    if (cards) {
      this.decks = JSON.parse(cards).map(
        (d: Deck) => new Deck(d.name, d.cards, d.id)
      );
    } else {
      this.decks = [];
    }
    this.deckSubject.next(this.decks);
  }
}
