export class Mercury {
  constructor(input) {
    this.input = input;
    this.adjustedAge();
  }

  adjustedAge(input) {
    this.fullMercuryAge = this.input * (1 / .24);
    this.mercuryAge = Math.round(this.fullMercuryAge * 10) / 10;
    return this.mercuryAge;
  }

}