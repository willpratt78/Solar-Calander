export class AgeCalculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  };

  mercuryAge(age) {
    this.fullMercuryAge = this.age * (1 / .24);
    this.mercuryAgeRounded = Math.round(this.fullMercuryAge * 10) / 10;
    return this.mercuryAgeRounded;
  };

  venusAge(age) {
    this.fullVenusAge = this.age * (1 / .62);
    this.venusAgeRounded = Math.round(this.fullVenusAge * 10) / 10;
    return this.venusAgeRounded;
  }

  marsAge(age) {
    this.fullMarsAge = this.age * (1 / 1.88);
    this.marsAgeRounded = Math.round(this.fullMarsAge * 10) / 10;
    return this.marsAgeRounded;
  }

  jupiterAge(age) {
    this.fullJupiterAge = this.age * (1 / 11.86);
    this.jupiterAgeRounded = Math.round(this.fullJupiterAge * 10) / 10;
    return this.jupiterAgeRounded;
  }

  lifeExpectancyMercury(age, lifeExpectancy) {

  }
}