export class Venus {
  constructor(input) {
    this.input = input;
    this.adjustedAge;
  }

  adjustedAge(input) {
    this.fullVenusAge = this.input * (1 / .62);
    this.venusAge = Math.round(this.fullVenusAge * 10) / 10;
    return this.venusAge;
  }
}