import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Deck } from '../models/Deck.model';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-study-mode',
  templateUrl: './study-mode.component.html',
  styleUrls: ['./study-mode.component.scss'],
})
export class StudyModeComponent implements OnInit {
  studyMode = true;
  questionNumber = 0;
  touchX: any = null;
  deck!: Deck;
  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(
      (p: Params) => (this.deck = this.deckService.getDeckByName(p.name))
    );

    window.addEventListener('keydown', (e) => this.keyDown(e));
    window.addEventListener('touchstart', (e) => {
      this.touchX = e.changedTouches[0].screenX;
    });
    window.addEventListener('touchend', (e) => {
      const distance = e.changedTouches[0].screenX;
      distance - this.touchX > 30
        ? this.nextQuestion()
        : distance - this.touchX < -30
        ? this.prevQuestion()
        : null;
      this.touchX = null;
    });
  }
  ngOnDestroy() {
    if (window.removeAllListeners) {
      window.removeAllListeners();
    }
  }
  toggleMode() {
    this.studyMode = !this.studyMode;
  }
  nextQuestion() {
    this.questionNumber < this.deck.cards.length - 1
      ? (this.questionNumber += 1)
      : (this.questionNumber = 0);
  }
  prevQuestion() {
    this.questionNumber === 0
      ? (this.questionNumber = this.deck.cards.length - 1)
      : (this.questionNumber -= 1);
  }
  keyDown(e: Event) {
    if ((e as KeyboardEvent).key === 'ArrowLeft') {
      this.prevQuestion();
    }
    if ((e as KeyboardEvent).key === 'ArrowRight') {
      this.nextQuestion();
    }
  }
}
