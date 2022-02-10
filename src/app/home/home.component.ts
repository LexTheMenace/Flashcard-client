import { Component, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  decks: any[] = [];
  menuOpen: number | null = null;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.decks = this.deckService.getAllDeckInfo();
  }
}
