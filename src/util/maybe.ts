/* eslint-disable max-classes-per-file, no-underscore-dangle */

/**
 * Indicates the absence of a value.
 */
class NotPresent {
  public readonly present: false = false;
}

/**
 * Indicates the presence of a value.
 */
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

/**
 * Indicates the possibility of existence for a field
 * of type T.
 */
export type Maybe <T> = NotPresent | Present<T>;

/**
 * Decisively evaluates whether the field of type T is present or not or not.
 * @param expression 
 */
export function EvalMaybe<T>(expression: T | undefined): Maybe<T> {
  if (typeof expression !== 'undefined') {
    return new Present(expression);
  }
  return new NotPresent();
}
