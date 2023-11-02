export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = "assets/img/mainbg.jpg";
    }

    download(path) {
        const link = document.createElement("a");

        link.setAttribute("href", path);
        link.setAttribute("download", "nice_picture");

        link.style.display = "none";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    init() {
        this.btns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                this.download(this.path);
            });
        });
    }
}
