export default class Slider {
    // eslint-disable-next-line no-unused-vars
    constructor({ page = "", btns = "", next = "", prev = "" } = {}) {
        this.page = document.querySelector(page);
        this.slides = Array.from(this.page.children);
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
}
