import pc from '../lib/prevent-collision';
import {get} from '../lib/get';

import Overlay from './overlay';
import Point from './point';
import Rect from './rect';

const elements: WeakMap<Ruler, HTMLElement> = new WeakMap();
const labels: WeakMap<Ruler, HTMLSpanElement> = new WeakMap();
const rects: WeakMap<Ruler, Rect> = new WeakMap();
const termini: WeakMap<Ruler, Point> = new WeakMap();
const origins: WeakMap<Ruler, Point> = new WeakMap();
const isDrawings: WeakMap<Ruler, boolean> = new WeakMap();

/**
 * Represents the region being measured.
 */
export default class Ruler {
  get isDrawing() {
    return !!isDrawings.get(this);
  }

  get el(): HTMLElement {
    return get(elements, this);
  }

  set el(value: HTMLElement) {
    elements.set(this, value);
  }

  get label(): HTMLSpanElement {
    return get(labels, this);
  }

  set label(value: HTMLSpanElement) {
    labels.set(this, value);
  }

  get origin(): Point {
    return get(origins, this);
  }

  set origin(value: Point) {
    origins.set(this, value);
  }

  get rect(): Rect {
    return get(rects, this);
  }

  set rect(value: Rect) {
    rects.set(this, value);
  }

  get terminus(): Point {
    return get(termini, this);
  }

  set terminus(value: Point) {
    termini.set(this, value);
  }

  constructor(overlay: HTMLElement) {
    const el = document.getElementById(pc(`ruler-rect`));
    if (el) {
      this.el = el;
    } else {
      this.el = document.createElement(`div`);
      this.el.id = pc(`ruler-rect`);
      this.el.classList.add(pc(`ruler-rect`));

      this.label = document.createElement(`span`);
      this.label.id = pc(`ruler-label`);
      this.label.classList.add(pc(`ruler-label`));

      this.el.appendChild(this.label);

      overlay.appendChild(this.el);
    }

    this.rect = new Rect();
  }

  /**
   * Draws the Ruler
   */
  draw(origin?: Point, terminus?: Point) {
    if (origin) {
      this.rect.origin = origin;
    }

    if (terminus) {
      this.rect.terminus = terminus;
    }

    if (!this.rect.terminus.x || !this.rect.terminus.y) {
      this.rect.terminus = this.rect.origin;
    }

    this.el.style.top = `${this.rect.top}px`;
    this.el.style.right = `${this.rect.right}px`;
    this.el.style.bottom = `${this.rect.bottom}px`;
    this.el.style.left = `${this.rect.left}px`;

    this.el.style.width = `${this.rect.width}px`;
    this.el.style.height = `${this.rect.height}px`;

    const diagonal = Math.sqrt(
      Math.pow(this.rect.width, 2) + Math.pow(this.rect.height, 2)
    );
    this.label.innerHTML = `W:${this.rect.width} H:${
      this.rect.height
    }  D:${diagonal.toFixed(1)}`;
  }

  /**
   * Sets the start point for ruler box
   */
  setOrigin(point: Point) {
    isDrawings.set(this, true);

    this.rect = new Rect(point);
    this.draw();
  }

  /**
   * Sets the end point for ruler box
   */
  setTerminus(point: Point) {
    this.rect.terminus = point;
    this.draw();

    isDrawings.set(this, false);
  }
}
