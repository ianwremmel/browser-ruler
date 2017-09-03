import Overlay from './overlay';

const overlay = new Overlay();
if (overlay.isVisible()) {
  overlay.remove();
}
else {
  overlay.add();
}
