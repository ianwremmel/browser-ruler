import pc from '../lib/prevent-collision';

import Point from './point';
import Ruler from './ruler';

/**
 * Background layer that listens for mouse events to draw the Ruler
 */
export default class Overlay {
  /**
   * Adds the overlay to the DOM
   * @returns {undefined}
   */
  add() {
    document.body.appendChild(this.el);
  }

  /**
   * Constructor
   * @returns {Overlay}
   */
  constructor() {
    this.onMousedown = this.onMousedown.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.onMouseup = this.onMouseup.bind(this);

    this.el = document.getElementById(pc(`ruler-overlay`));
    if (!this.el) {
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
    return this.el && this.el.style.display !== `none` && document.body.contains(this.el);
  }

  /**
   * Event handler.
   * @param {MouseEvent} event
   * @returns {undefined}
   */
  onMousedown(event) {
    const point = new Point(event);
    console.debug(`onMousedown`, point);

    if (!this.ruler.isDrawing()) {
      this.ruler.setOrigin(point);
      this.el.addEventListener(`mousemove`, this.onMousemove);
    }
  }

  /**
   * Event handler.
   * @param {MouseEvent} event
   * @returns {undefined}
   */
  onMousemove(event) {
    const point = new Point(event);
    console.debug(`onMousemove`, point);

    this.ruler.draw(undefined, point);
  }

  /**
   * Event handler.
   * @param {MouseEvent} event
   * @returns {undefined}
   */
  onMouseup(event) {
    const point = new Point(event);
    console.debug(`onMouseup`, point);

    // FIXME: leaky demeter
    console.log(point, this.ruler.rect.origin, this.ruler.rect.terminus);
    if (!point.equals(this.ruler.rect.origin)) {
      this.el.removeEventListener(`mousemove`, this.onMousemove);
      this.ruler.setTerminus(point);
    }
  }

  /**
   * Removes the overlay from the DOM
   * @returns {undefined}
   */
  remove() {
    if (this.el) {
      this.el.removeEventListener(`mousedown`, this.onMousedown);
      this.el.removeEventListener(`mousemove`, this.onMousemove);
      this.el.removeEventListener(`mouseup`, this.onMouseup);
      document.body.removeChild(this.el);
    }
  }
}
