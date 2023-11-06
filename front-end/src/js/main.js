import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

/*	variables basicas de THREE */
const	renderer		= new THREE.WebGLRenderer();
const	scene			= new THREE.Scene();
const	camera			= new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

/* creacion de axes y objetos, planos, etc */
const	AxesHelper		= new THREE.AxesHelper();
const	gridHelper		= new THREE.GridHelper();

const	boxGeometry		= new THREE.BoxGeometry();
const	boxMaterial		= new THREE.MeshBasicMaterial({color: 'blue'});
const	box				= new THREE.Mesh(boxGeometry, boxMaterial);

const	planeGeometry	= new THREE.PlaneGeometry(30, 30);
const	planeMaterial	= new THREE.MeshBasicMaterial({color: 'green'});
const	plane			= new THREE.Mesh(planeGeometry, planeMaterial);

/*	funcion de orbit */
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const	orbit			= new OrbitControls(camera, renderer.domElement);

/*	codigo puesta en marcha */
camera.position.set(0, 2, 5);
orbit.update();

scene.add(AxesHelper);
scene.add(gridHelper);
scene.add(box);
scene.add(plane);

function animate(time) {
	box.rotation.x = time / 2000;
	box.rotation.y = time / 1000;
	renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
