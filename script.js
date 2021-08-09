        //NOTE : Backgournd will be shown only with a local server (liveserver extension , etc...)
        import * as THREE from 'https://cdn.skypack.dev/three'
        //create Scene
        let scene = new THREE.Scene();

        //Set Image background
        let loader = new THREE.TextureLoader();
        loader.load("./background.jpg", function (texture) {
            scene.background = texture;
        })

        //create camera
        let camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight
        );

        //renderer
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);



        const createAndAnimate = (x,y,z) => {
            let geometry = new THREE.BoxGeometry();
            let material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe : true});
            let cube = new THREE.Mesh(geometry,material);

            scene.add(cube); //Add the cube to the scene

            camera.position.z = z;
            camera.position.x = x;
            camera.position.y = y;

            renderer.render(scene,camera);

             //Create animation
            const animate = function (){
            requestAnimationFrame(animate);
            //Set the rotation of the cube
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            //Update the secene every second
            renderer.render(scene,camera);
            }
            animate()
        }

        createAndAnimate(0,-1,5);