var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(155, window.innerWidth/ window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var material = new THREE.MeshBasicMaterial({
	color:0xFF99CC
});

var radius = 5;
var segments = 32;

var circleGeometry = new THREE.CircleGeometry(radius, segments);
var circle = new THREE.Mesh( circleGeometry, material);
scene.add( circle);

camera.position.z = 5;

var render = function () {
				requestAnimationFrame( render );

				circle.rotation.x += 0.1;
				circle.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();




//reference: http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene; 
//reference: http://threejs.org/docs/index.html#Reference/Extras.Geometries/CircleGeometry
