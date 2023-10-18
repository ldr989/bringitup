export default class Slider {
    // eslint-disable-next-line no-unused-vars
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = "",
        animate,
        autoplay,
    } = {}) {
        this.container = document.querySelector(container);
        try {
            this.slides = this.container.children;
        } catch (e) {
            /* empty */
        }
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelectorAll(prev);
        this.next = document.querySelectorAll(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}
