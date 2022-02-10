import { Card } from './Card.model';

export class Deck {
  constructor(
    public name: string,
    public cards: Card[],
    public id: string,
    public description?: string
  ) {
    if(!id)[
      this.id = Math.floor(Math.random() * 56455635645).toString()
    ]
  }
}
