import { Card } from './Card.model';

export class Deck {
  constructor(
    public name: string,
    public cards: Card[],
    public description?: string
  ) {}
}
