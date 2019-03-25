const xs: WeakMap<Point, number> = new WeakMap();
const ys: WeakMap<Point, number> = new WeakMap();

/**
 * Represents a point in two-demensional space
 */
export default class Point {
  get x(): number | null {
    const value = xs.get(this);
    if (typeof value === 'undefined') {
      return null;
    }
    return value;
  }

  set x(value: number | null) {
    if (value === null) {
      xs.delete(this);
    } else {
      xs.set(this, value);
    }
  }

  get y(): number | null {
    const value = ys.get(this);
    if (typeof value === 'undefined') {
      return null;
    }
    return value;
  }

  set y(value: number | null) {
    if (value === null) {
      ys.delete(this);
    } else {
      ys.set(this, value);
    }
  }

  constructor(point?: PointLiteral) {
    if (point) {
      const {x, y} = point;
      this.x = x;
      this.y = y;
    }
  }

  /**
   * Compares two points for equality
   */
  equals(point: Point): boolean {
    return point && this.x === point.x && this.y === point.y;
  }
}

interface PointLiteral {
  x: number;
  y: number;
}
