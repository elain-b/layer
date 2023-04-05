import * as THREE from "three";

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

import World from "./World/World.js";

export default class Experience2 {
    static instance;
    constructor(canvas) {
        this.canvas = canvas;
        if (Experience2.instance) {
            return Experience2.insstance;
        }
        Experience2.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes(this.canvas);
        this.camera = new Camera(this);
        this.renderer = new Renderer(this);
        this.world = new World(this);
        
        this.camera.resize();
        this.renderer.resize();
        console.log(this.canvas);

        this.sizes.on("resize", () => {
            this.resize();
        });
        this.time.on("update", () => {
            this.update();
        });
        window.addEventListener("resize", this.onResize.bind(this));
    }

    onResize() {
        const width = this.canvas.parentElement.clientWidth;
        const height = this.canvas.parentElement.clientHeight;
        this.camera.aspect = width / height;
        this.camera.resize();
        this.renderer.resize();
    }

    resize() {
        this.camera.resize();
        this.world.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.world.update();
        this.camera.perspectiveCamera.updateProjectionMatrix();
        this.renderer.update();
    }
}
