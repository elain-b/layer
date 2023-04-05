import * as THREE from "three";

import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;
    // console.log("Hello World");

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

    // GSAP.registerPlugin(ScrollTrigger);

        // const fadeIns = document.querySelectorAll(".fade_in");

        // fadeIns.forEach((fadeIn) => {
        //     GSAP.fromTo(
        //         fadeIn,
        //         {
        //             y: 10,
        //             autoAlpha: 0,
        //         },
        //         {
        //             y: 0,
        //             autoAlpha: 1,
        //             duration: 2,
        //             scrollTrigger: {
        //                 trigger: fadeIn,
        //                 toggleActions: "play none none reset",
        //                 start: "top center",
        //                 markers: true,
        //             }
        //         }
        //     );
        // });

        // ScrollTrigger.matchMedia({
        //     // Mobile
        //     "(max-width: 768px)": () => {
        //         const fadeInRights = document.querySelectorAll(".fade_in_right");

        //         fadeInRights.forEach((item) => {
        //             GSAP.fromTo(
        //                 item,
        //                 {
        //                     x: 60,
        //                     autoAlpha: 0,
        //                 },
        //                 {
        //                     x: 0,
        //                     autoAlpha: 1,
        //                     duration: 1,
        //                     scrollTrigger: {
        //                         trigger: item,
        //                         toggleActions: "play none none reset",
        //                         start: "top center",
        //                         markers: true,
        //                     }
        //                 }
        //             );
        //         });
        //         const fadeInLefts = document.querySelectorAll(".fade_in_left");

        //         fadeInLefts.forEach((item) => {
        //             GSAP.fromTo(
        //                 item,
        //                 {
        //                     x: -60,
        //                     autoAlpha: 0,
        //                 },
        //                 {
        //                     x: 0,
        //                     autoAlpha: 1,
        //                     duration: 1,
        //                     scrollTrigger: {
        //                         trigger: item,
        //                         toggleActions: "play none none reset",
        //                         start: "top center",
        //                         markers: true,
        //                     }
        //                 }
        //             );
        //         });
        //     },
        // });
  }
}
