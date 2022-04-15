export class Jupiter {
  constructor(input) {
    this.input = input;
    this.adjustedAge();
  }

  adjustedAge(input) {
  this.fullJupiterAge = this.input * (1 / 11.86);
  this.jupiterAge = Math.round(this.fullJupiterAge * 10) /10;
  return this.jupiterAge
  }
}