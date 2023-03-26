import * as THREE from "three";

export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;
    console.log("Hello World");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      1,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    const wrapper = canvas.parentElement;
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;
    renderer.setSize(width, height);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    this.onResize = function () {
        const width = wrapper.clientWidth;
        const height = wrapper.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
  
      window.addEventListener("resize", this.onResize);

    animate();
  }
}
