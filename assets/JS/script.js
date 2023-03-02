import { Application } from '../3DJS/runtime.js';

const DURATION = 500;

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('./assets/3DJS/scene.3Dcode');

const letterHogwartImg = {
  element: document.getElementById('letterhogwart'),
  isVisible: false,
  show() {
    if (this.isVisible) return;
    this.isVisible = true;
    this.element.style.display = 'block';
    const animation = this.element.animate(
      { transform: ['translateX(-100%)', 'translateX(0%)'], opacity: [0, 1] },
      { duration: DURATION, fill: 'forwards' }
    );
    animation.onfinish = () => {
      document.dispatchEvent(new Event('letterOpen'));
    };
  },
  hide() {
    if (!this.isVisible) return;
    this.isVisible = false;
    const animation = this.element.animate(
      { transform: ['translateX(0%)', 'translateX(-100%)'], opacity: [1, 0] },
      { duration: DURATION, fill: 'forwards' }
    );
    animation.onfinish = () => {
      this.element.style.display = 'none';
      document.dispatchEvent(new Event('letterClose'));
    };
  }
};

function toggleLetterHogwartImg() {
  if (letterHogwartImg.isVisible) {
    letterHogwartImg.hide();
  } else {
    letterHogwartImg.show();
  }
}

document.getElementById('school-img').addEventListener('click', toggleLetterHogwartImg);

document.addEventListener('letterOpen', () => {
  document.getElementById('school-img').classList.add('stop-animation');
});

document.addEventListener('letterClose', () => {
  document.getElementById('school-img').classList.remove('stop-animation');
});

letterHogwartImg.element.addEventListener('click', () => {
  letterHogwartImg.hide();
});
