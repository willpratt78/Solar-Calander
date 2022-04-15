export class Mars {
  constructor(input) {
    this.input = input;
    this.adjustedAge();
  }

  adjustedAge(input) {
    this.fullMarsAge = this.input * (1 / 1.88);
    this.marsAge = Math.round(this.fullMarsAge * 10) / 10;
    return this.marsAge
  }

}