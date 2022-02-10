import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private deckService: DeckService){}
  ngOnInit(): void {
    this.deckService.fetchDecks();
  }
}


