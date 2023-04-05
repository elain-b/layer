import * as THREE from "three";
import Experience from "../Experience2.js";

import Object from "./Object.js";

export default class World {
    constructor(experience) {
        // super();
        this.experience = experience;
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        
        this.object = new Object(experience);
        // console.log(this.object);
    }

    resize() { }

    update() { 
        if (this.object){
            this.object.update();
        }
    }
}