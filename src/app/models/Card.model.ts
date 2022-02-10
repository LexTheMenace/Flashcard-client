import { Answer } from './Answer.model';

export class Card {
  constructor(
    public question: string,
    public answer: string,
    public answerOptions: Answer[],
    public subject: string
  ) {}
}
