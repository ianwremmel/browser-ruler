export class TypeNarrowingError extends TypeError {
  constructor() {
    super(
      'This error should never throw at runtime and exists only to satisfy the typescript inferrence engine.'
    );
  }
}
