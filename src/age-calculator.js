export class AgeCalculator {
  constructor(age) {
    this.age = age
  };

  mercuryAge(age) {
    this.fullMercuryAge = this.age * (1 / .24);
    this.mercuryAgeRounded = Math.round(this.fullMercuryAge * 10) / 10;
    return this.mercuryAgeRounded;
  };
}