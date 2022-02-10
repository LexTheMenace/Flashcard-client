import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],

})
export class CardComponent implements OnInit, OnChanges  {
  showAnswer = false;
  @Input() question!: string;
  @Input() answer!: string;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('keydown', (e) => e.code === 'Space' && this.flipCard())
  }
  ngOnChanges() {
    this.showAnswer = false;
  }
  flipCard(){
    this.showAnswer = !this.showAnswer;
  }
}
