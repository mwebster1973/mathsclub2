export enum Operator {
  MULTIPLY = "*",
  DIVIDE = "&divide;",
}

export class Sum {
  public decimails: boolean = false;
  public result: number;
  public blank: number;

  constructor(
    public param1: number,
    public param2: number,
    public operator: Operator = Operator.MULTIPLY
  ) {
    this.result = this.calculateResult();
    this.blank = this.getRandomBlank();
  }

  protected getRandomBlank(): number {
    const min = 1;
    const max = 3;
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  private calculateResult(): number {
    switch (this.operator) {
      case Operator.MULTIPLY:
        return this.param1 * this.param2;
      case Operator.DIVIDE:
        return this.param1 / this.param2;
    }
  }

  public getDisplay(): string {
    return (
      this.displayNumber(this.param1, 1) +
      " " +
      this.operator +
      " " +
      this.displayNumber(this.param2, 2) +
      " = " +
      this.displayNumber(this.result, 3)
    );
  }

  private displayNumber(number: number, pos: number): string {
    if (pos === this.blank) {
      return "__";
    }

    return number.toString();
  }

  protected maybe(): boolean {
    return Math.random() >= 0.5;
  }

  public shuffleParameters() {
    if (this.maybe()) {
      const param = this.param1;
      this.param1 = this.param2;
      this.param2 = param;
    }
  }

  public maybeConvertToDivision() {
    if (this.maybe()) {
      this.operator = Operator.DIVIDE;
      const param = this.param1;
      this.param1 = this.result;
      this.result = param;
    }
  }

  public convertToDecimals() {
    if (this.maybe()) {
      this.param1 = this.param1 / 10;
      this.result = this.result / 10;
    } else {
      this.param2 = this.param2 / 10;
      this.result = this.result / 10;
    }
  }
}
