import * as THREE from "three";
import Experience from "../Experience2.js";

export default class Object {
    constructor(experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.cube);
    }

    resize() { }

    update() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}