function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

class Progress {
  constructor() {
    this.dom = {
      el: document.querySelector('.js-progress'),
      loader: document.querySelector('.js-progress__loader') };


    this.vars = {
      start: 0.8,
      total: 1,
      random: getRandomFloat(0, 1),
      ease: 1 };


    this.tl = null;

    this.init();
  }

  run() {
    this.number = Math.random(this.vars.start / this.vars.total - 0.2) * 100;
    this.random = Math.random() * (4 - 2) + 2;

    this.tl = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.dom.el.classList.add('is-done');

        TweenMax.from(document.querySelector('h1'), 1, {
          y: 100,
          alpha: 0,
          delay: 0.5,
          ease: Expo.easeOut });

      } });


    this.tl.

    to(this.dom.loader, this.vars.ease, {
      xPercent: this.number / this.random,
      ease: Expo.easeInOut }).

    to(this.dom.loader, this.vars.random * 2, {
      xPercent: this.number,
      ease: Expo.easeInOut }).

    to(this.dom.loader, this.vars.ease, {
      xPercent: 100,
      delay: this.vars.random,
      ease: Expo.easeInOut });


    this.tl.play();
  }

  addEvents() {
    this.run();
  }

  init() {
    this.addEvents();
  }}

const progress = new Progress();