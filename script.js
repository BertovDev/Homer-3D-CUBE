        //NOTE : Backgournd will be shown only with a local server (liveserver extension , etc...)
        import * as THREE from 'https://cdn.skypack.dev/three'
        //create Scene
        let scene = new THREE.Scene();

        //Set Textures
        //Background texture
        let loader = new THREE.TextureLoader();
        loader.load("./textures/background.jpg", function (texture) {
            scene.background = texture;
        })

        //Cube texture
        const cubeLoader = new THREE.TextureLoader();

        //create camera
        let camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight
        );

        //renderer
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //Create and animate the cube

        const createAndAnimate = (x,y,z) => {
            let geometry = new THREE.BoxGeometry();
            let material = new THREE.MeshBasicMaterial({
                map: cubeLoader.load("./textures/duff1.png")
            });
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