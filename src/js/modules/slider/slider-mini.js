import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains(this.activeClass)) {
                this.slides[i].classList.remove(this.activeClass);
            }
            if (this.animate) {
                this.slides[i].querySelector(".card__title").style.opacity =
                    "0.4";
                this.slides[i].querySelector(
                    ".card__controls-arrow"
                ).style.opacity = "0";
            }
        }

        if (!this.slides[0].closest("button")) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector(".card__title").style.opacity = "1";
            this.slides[0].querySelector(
                ".card__controls-arrow"
            ).style.opacity = "1";
        }
    }

    nextSlide() {
        if (
            this.slides[1].tagName == "BUTTON" &&
            this.slides[2].tagName == "BUTTON"
        ) {
            this.container.appendChild(this.slides[0]); // slide
            this.container.appendChild(this.slides[0]); // btn
            this.container.appendChild(this.slides[0]); // btn
            this.decorizeSlides();
        } else if (this.slides[1].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]); // slide
            this.container.appendChild(this.slides[0]); // btn
            this.decorizeSlides();
        } else {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides();
        }
    }

    bindTriggers() {
        this.next[0].addEventListener("click", () => {
            this.nextSlide();
        });

        this.prev[0].addEventListener("click", () => {
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }
        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                let intervalId = setInterval(() => this.nextSlide(), 5000);
                setInterval(intervalId);

                for (let i = 0; i < this.slides.length; i++) {
                    this.slides[i].addEventListener("pointerover", () => {
                        clearInterval(intervalId);
                    });

                    this.slides[i].addEventListener("pointerout", () => {
                        intervalId = setInterval(() => this.nextSlide(), 5000);
                    });
                }
            }
        } catch (error) {
            /* empty */
        }
    }
}
