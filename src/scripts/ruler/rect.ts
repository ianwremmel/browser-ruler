import {get} from '../lib/get';

import Point from './point';

const origins: WeakMap<Rect, Point> = new WeakMap();
const termini: WeakMap<Rect, Point> = new WeakMap();

/**
 * Represents a plane in two-demenional space
 */
export default class Rect {
  get bottom(): number {
    return Math.max(this.origin.y || 0, this.terminus.y || 0);
  }

  get height(): number {
    return Math.abs((this.origin.y || 0) - (this.terminus.y || 0));
  }

  get left(): number {
    return Math.min(this.origin.x || 0, this.terminus.x || 0);
  }

  get origin(): Point {
    return get(origins, this);
  }

  set origin(value: Point) {
    origins.set(this, value);
  }

  get right(): number {
    return Math.max(this.origin.x || 0, this.terminus.x || 0);
  }

  get terminus(): Point {
    return get(termini, this);
  }

  set terminus(value: Point) {
    termini.set(this, value);
  }

  get top(): number {
    return Math.min(this.origin.y || 0, this.terminus.y || 0);
  }

  get width(): number {
    return Math.abs((this.origin.x || 0) - (this.terminus.x || 0));
  }

  constructor(o?: Point, t?: Point) {
    this.origin = o || new Point();
    this.terminus = t || new Point();
  }
}
