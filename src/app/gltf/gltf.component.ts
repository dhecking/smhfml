import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';

import GLTFLoader from 'three-gltf-loader';

import { AfterContentInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-gltf',
  templateUrl: './gltf.component.html',
  styleUrls: ['./gltf.component.css']
})
export class GltfComponent implements AfterContentInit {

  ngAfterContentInit(): void {

    const background = document.getElementById('background');

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, background.clientWidth / background.clientHeight, 0.1, 1000);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = -280;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.target.set(0, 0, 0);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.50;

    renderer.setClearColor('#000000', 0);

    background.appendChild(renderer.domElement);

    renderer.setSize(background.clientWidth, background.clientHeight);

    window.addEventListener('resize', e => {
      const width = background.clientWidth;
      const height = background.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    const loader = new GLTFLoader();
    let mesh: THREE.Scene | THREE.Object3D;
    loader.load('assets/3d/white3.glb', gltf => {
        mesh = gltf.scene;
        scene.add(mesh);
      }, xhr => {
        console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
      }, error => {
        console.log(error.message);
      }
    );

    const light = new THREE.PointLight('white', 0.5);
    const light2 = new THREE.PointLight('white', 0.5);
    const light3 = new THREE.PointLight('white', 0.5);
    const light4 = new THREE.PointLight('#2e6691', 0.5);
    const light5 = new THREE.PointLight('#2e6691', 1);

    light.position.set(-1500, 0, -200);
    light2.position.set(1500, 0, -200);
    light3.position.set(0, 0, -1500);
    light4.position.set(0, 0, 1500);
    light5.position.set(0, 2000, 0);

    light.lookAt(0, 0, 0);
    light2.lookAt(0, 0, 0);
    light3.lookAt(0, 0, 0);
    light4.lookAt(0, 0, 0);
    light5.lookAt(0, 0, 0);

    scene.add(light);
    scene.add(light2);
    scene.add(light3);
    scene.add(light4);
    scene.add(light5);

    let x = 0;
    let id: number;
    const speed = 0.0055;
    function animate() {
      if (mesh !== undefined) {
        mesh.position.set(0, 0, 0);
        x += speed;
        mesh.rotation.set(0, x, 0);
      }

      controls.update();

      renderer.render(scene, camera);

      id = requestAnimationFrame(animate);
    }

    animate();

  }
}
