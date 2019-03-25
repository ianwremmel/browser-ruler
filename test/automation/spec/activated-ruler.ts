import '@wdio/sync';

import assert from 'assert';

const po = {
  label: '.ruler-label-7299d2d29ee0de87bd5e67ed9e6d7a0d',
  overlay: '.ruler-overlay-7299d2d29ee0de87bd5e67ed9e6d7a0d',
  rect: '.ruler-rect-7299d2d29ee0de87bd5e67ed9e6d7a0d',
};

function clickInSpace() {
  try {
    browser.performActions([
      {
        actions: [
          {
            button: 0,
            type: 'pointerDown',
          },
          {
            button: 0,
            type: 'pointerUp',
          },
        ],
        id: 'mouse1',
        parameters: {
          pointerType: 'mouse',
        },
        type: 'pointer',
      },
    ]);
  } catch (err) {
    browser.positionClick(0);
  }
}

function moveTo(x: number, y: number) {
  browser.performActions([
    {
      actions: [
        {
          type: 'pointerMove',
          x,
          y,
        },
      ],
      id: 'mouse1',
      parameters: {
        pointerType: 'mouse',
      },
      type: 'pointer',
    },
  ]);
}

describe('Activated Ruler', () => {
  describe('before any interactions occur', () => {
    it('renders the background overlay', () => {
      browser.url('/automation/fixtures');
      assert($(po.overlay).isExisting());
    });
  });

  describe('after the first click', () => {
    it('places the first point', () => {
      browser.url('/automation/fixtures');
      clickInSpace();
      assert($(po.overlay).isExisting());
      assert.equal($(po.label).getText(), 'W:0 H:0 D:0.0');
    });
  });

  describe('when the mouse moves', () => {
    it('draws the covered region and updates coordinates', () => {
      browser.url('/automation/fixtures');
      clickInSpace();
      assert($(po.overlay).isExisting());
      assert.equal($(po.label).getText(), 'W:0 H:0 D:0.0');
      moveTo(10, 10);
      assert.equal($(po.label).getText(), 'W:10 H:10 D:14.1');
    });
  });

  describe('after the second click', () => {
    it('locks the region and coordinates in place', () => {
      browser.url('/automation/fixtures');
      clickInSpace();
      moveTo(10, 10);
      clickInSpace();
      moveTo(20, 20);
      assert.equal($(po.label).getText(), 'W:10 H:10 D:14.1');
    });
  });

  describe('after the third click', () => {
    it('clears the first region and coordinates and starts a new region', () => {
      browser.url('/automation/fixtures');
      clickInSpace();
      moveTo(10, 10);
      clickInSpace();
      moveTo(20, 20);
      clickInSpace();
      assert.equal($(po.label).getText(), 'W:0 H:0 D:0.0');
    });
  });
});
