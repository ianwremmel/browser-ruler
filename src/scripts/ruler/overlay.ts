import pc from '../lib/prevent-collision';

import Point from './point';
import Ruler from './ruler';
import {get} from '../lib/get';

const elements: WeakMap<Overlay, HTMLElement> = new WeakMap();
const rulers: WeakMap<Overlay, Ruler> = new WeakMap();

/**
 * Background layer that listens for mouse events to draw the Ruler
 */
export default class Overlay {
  get el(): HTMLElement {
    return get(elements, this);
  }

  set el(value: HTMLElement) {
    elements.set(this, value);
  }

  get ruler(): Ruler {
    return get(rulers, this);
  }

  set ruler(value: Ruler) {
    rulers.set(this, value);
  }

  /**
   * Adds the overlay to the DOM
   * @returns {undefined}
   */
  add() {
    document.body.appendChild(this.el);
  }

  /**
   * Constructor
   */
  constructor() {
    this.onMousedown = this.onMousedown.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.onMouseup = this.onMouseup.bind(this);

    const el = document.getElementById(pc(`ruler-overlay`));
    if (el) {
      this.el = el;
    } else {
      this.el = document.createElement(`div`);
      this.el.id = pc(`ruler-overlay`);
      this.el.classList.add(pc(`ruler-overlay`));

      this.el.addEventListener(`mousedown`, this.onMousedown);
      this.el.addEventListener(`mouseup`, this.onMouseup);
    }

    this.ruler = new Ruler(this.el);
  }

  /**
   * Indicates if the overlay is visible
   * @returns {boolean}
   */
  isVisible() {
    return (
      elements.has(this) &&
      this.el.style.display !== `none` &&
      document.body.contains(this.el)
    );
  }

  onMousedown(event: MouseEvent) {
    const point = new Point(event);

    if (!this.ruler.isDrawing) {
      this.ruler.setOrigin(point);
      this.el.addEventListener(`mousemove`, this.onMousemove);
    }
  }

  onMousemove(event: MouseEvent) {
    const point = new Point(event);

    this.ruler.draw(undefined, point);
  }

  onMouseup(event: MouseEvent) {
    const point = new Point(event);

    if (!point.equals(this.ruler.rect.origin)) {
      this.el.removeEventListener(`mousemove`, this.onMousemove);
      this.ruler.setTerminus(point);
    }
  }

  /**
   * Removes the overlay from the DOM
   */
  remove() {
    if (elements.has(this)) {
      this.el.removeEventListener(`mousedown`, this.onMousedown);
      this.el.removeEventListener(`mousemove`, this.onMousemove);
      this.el.removeEventListener(`mouseup`, this.onMouseup);
      document.body.removeChild(this.el);
    }
  }
}
