import * as THREE from 'three';

let camera, scene, renderer;

init();
animate();

function init() {
    // Configurar la escena, la cámara y el renderizador
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Agregar luces, objetos y controles aquí

    // Ejemplo: Agregar un cubo
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Posicionar la cámara
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);

    // Animaciones y actualizaciones de la escena van aquí

    renderer.render(scene, camera);
}
