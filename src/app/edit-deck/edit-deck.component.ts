import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Card } from '../models/Card.model';
import { Deck } from '../models/Deck.model';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-edit-deck',
  templateUrl: './edit-deck.component.html',
  styleUrls: ['./edit-deck.component.scss'],
})
export class EditDeckComponent implements OnInit {
  card = new FormGroup({
    question: new FormControl(null, Validators.required),
    answer: new FormControl(null, Validators.required),
  });
  form!: FormGroup;
  editMode: boolean = false;
  editID: string | null = null
  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      this.editMode = !!p.deck;
      p.deck
        ? this.initForm(this.deckService.getDeckByName(p.deck))
        : this.initForm();
    });
  }
  initForm(editDeck?: Deck) {
    if(editDeck){
      this.editID = editDeck.id;
    }

    let name = '';
    let description = '';
    let cards = [this.card];
    if (this.editMode && editDeck) {
      name = editDeck.name;
      description = editDeck.description || '';
      cards = editDeck.cards.map(
        (c: Card) =>
          new FormGroup({
            question: new FormControl(c.question, Validators.required),
            answer: new FormControl(c.answer, Validators.required),
          })
      );
    }
    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description),
      cards: new FormArray(cards),
    });
  }

  get cards() {
    return this.form.get('cards') as FormArray;
  }
  addCard() {
    this.cards.push(
      new FormGroup({
        question: new FormControl(null, Validators.required),
        answer: new FormControl(null, Validators.required),
      })
    );
    // Scroll to bottom after new card add
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: window.scrollX,
        behavior: 'smooth',
      });
    });
  }
  removeCard(i: number) {
    if (this.cards.length > 1) {
      this.cards.removeAt(i);
    }
  }
  onSubmit() {
    const { name, description, cards } = this.form.value;
    const newDeck = {
      name,
      description,
      cards: cards.map((c: any) => new Card(c.question, c.answer, [], name)),
    };
    if (this.editMode) {
      // Update Deck
      this.deckService.updateDeck({...newDeck, id: this.editID!});
    } else {
      // Add new
      this.deckService.addDeck({...newDeck, id: ''});
    }
    this.form.reset();
  }
}
