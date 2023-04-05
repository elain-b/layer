// import Experience from "./Experience2.js";
import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.wrapper = this.canvas.parentElement;
        this.width = this.wrapper.clientWidth;
        this.height = this.wrapper.clientHeight;
        this.aspect = this.width / this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        window.addEventListener("resize", () => {
            this.width = this.wrapper.clientWidth;
            this.height = this.wrapper.clientHeight;
            this.aspect = this.width / this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        });
    }
}