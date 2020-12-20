/* eslint-disable max-classes-per-file, no-underscore-dangle */

class NotPresent {
  public readonly present: false = false;
}

class Present <T> {
  public readonly present: true = true;

  private _value: T;

  public get value() {
    return this._value;
  }

  constructor(value: T) {
    this._value = value;
  }
}

export type Maybe <T> = NotPresent | Present<T>;

export function EvalMaybe<T>(expression: T | undefined): Maybe<T> {
  if (typeof expression !== 'undefined') {
    return new Present(expression);
  }
  return new NotPresent();
}
