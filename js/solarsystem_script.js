window.addEventListener('DOMContentLoaded', function () {
        var canvas = document.getElementById('renderCanvas');
        var engine = new BABYLON.Engine(canvas, false);
        var createScene = function (){                                        

                // create a basic Scene object
                var scene = new BABYLON.Scene(engine);
                
                /*var assetsManager = new BABYLON.AssetsManager(scene);
                var meshTask = assetsManager.addMeshTask("skull task", "", "scenes/", "Planets.babylon");
                
                assetsManager.onFinish = function(tasks) {
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                };
                assetsManager.load();*/

                // Create camera
                var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", Math.PI, 0, 60, new BABYLON.Vector3(0, 0, 0), scene);

                // Attach the camera to the canvas
                camera.attachControl(canvas, false);

                // Target the camera to scene origin and restrict zoom
                camera.setTarget(new BABYLON.Vector3(0, 0, 0));
                camera.lowerRadiusLimit = 3;

                // Create light for sun
                var light = new BABYLON.PointLight('sun', new BABYLON.Vector3(0, 0 ,0), scene);
                light.diffuse = new BABYLON.Color3(1, 1, 1);
                light.specular = new BABYLON.Color3(1, 1, 1);

                // Create light to see planets clearer
                var light0 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
                light0.diffuse = new BABYLON.Color3(1, 1, 1);
                light0.specular = new BABYLON.Color3(1, 1, 1);
                light0.groundColor = new BABYLON.Color3(0, 0, 0);
                light0.intensity = 0.2;                                   

                // Skybox
                var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
                var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
                skyboxMaterial.backFaceCulling = false;
                skybox.infiniteDistance = true;
                skybox.renderingGroupId = 0;
                skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox/skybox", scene);
                skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
                skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
                skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                skyboxMaterial.disableLighting = true;
                skybox.material = skyboxMaterial;
                
                

                // Sun and planets
                var sun = BABYLON.Mesh.CreateSphere('sun', 16, 3, scene);
                var mercury = BABYLON.Mesh.CreateSphere('mercury', 16, 0.33, scene);
                var venus = BABYLON.Mesh.CreateSphere('venus', 16, 1, scene);
                var earth = BABYLON.Mesh.CreateSphere('earth', 16, 1, scene);
                var mars = BABYLON.Mesh.CreateSphere('mars', 16, 0.5, scene);
                var jupiter = BABYLON.Mesh.CreateSphere('jupiter', 16, 2, scene);
                var saturn = BABYLON.Mesh.CreateSphere('saturn', 16, 1.9, scene);
                var uranus = BABYLON.Mesh.CreateSphere('uranus', 16, 1.33, scene);
                var s_rings = BABYLON.Mesh.CreateDisc("s_rings", 2.2, 60, scene, false, BABYLON.Mesh.DOUBLESIDE);
                var u_rings = BABYLON.Mesh.CreateDisc("u_rings", 1.73, 60, scene, false, BABYLON.Mesh.DOUBLESIDE);
                var neptune = BABYLON.Mesh.CreateSphere('neptune', 16, 1.33, scene);

                // Rendering group ID
                u_rings.renderingGroupId = 1;
                s_rings.renderingGroupId = 1;
                neptune.renderingGroupId = 1;
                uranus.renderingGroupId = 1;
                saturn.renderingGroupId = 1;
                jupiter.renderingGroupId = 1;
                mars.renderingGroupId = 1;
                venus.renderingGroupId = 1;
                mercury.renderingGroupId = 1;
                earth.renderingGroupId = 1;
                sun.renderingGroupId = 1;

                // Hierarchy
                mercury.parent = sun;
                earth.parent = sun;
                venus.parent = sun;
                mars.parent = sun;
                jupiter.parent = sun;
                saturn.parent = sun;
                uranus.parent = sun;
                neptune.parent = sun;
                s_rings.parent = saturn;
                u_rings.parent = uranus;

                // Planet materials
                var sunMaterial = new BABYLON.StandardMaterial("sun", scene);
                var mercuryMaterial = new BABYLON.StandardMaterial("mercury", scene);
                var earthMaterial = new BABYLON.StandardMaterial("earth", scene);
                var venusMaterial = new BABYLON.StandardMaterial("venus", scene);
                var marsMaterial = new BABYLON.StandardMaterial("mars", scene);
                var jupiterMaterial = new BABYLON.StandardMaterial("jupiter", scene);
                var saturnMaterial = new BABYLON.StandardMaterial("saturn", scene);
                var uranusMaterial = new BABYLON.StandardMaterial("uranus", scene);
                var neptuneMaterial = new BABYLON.StandardMaterial("neptune", scene);
                var s_ringsMaterial = new BABYLON.StandardMaterial("s_rings", scene);
                var u_ringsMaterial = new BABYLON.StandardMaterial("u_rings", scene);

                sunMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_sun.jpg", scene);
                sunMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
                sun.material = sunMaterial;
                sunMaterial.freeze();  

                mercuryMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_mercury.jpg", scene);
                mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                mercury.material = mercuryMaterial;
                mercuryMaterial.freeze();   

                venusMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_venus_atmosphere.jpg", scene);
                venusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                venus.material = venusMaterial;
                venusMaterial.freeze();   

                earthMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_earth_clouds.jpg", scene);
                earthMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                earth.material = earthMaterial;
                earthMaterial.freeze();   

                marsMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_mars.jpg", scene);
                marsMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                mars.material = marsMaterial;
                marsMaterial.freeze();   

                jupiterMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_jupiter.jpg", scene);
                jupiterMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                jupiter.material = jupiterMaterial;
                jupiterMaterial.freeze();   

                saturnMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_saturn.jpg", scene);
                saturnMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                saturn.material = saturnMaterial;
                saturnMaterial.freeze();   

                uranusMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_uranus.jpg", scene);
                uranusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                uranus.material = uranusMaterial;
                uranusMaterial.freeze();   

                neptuneMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_neptune.jpg", scene);
                neptuneMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                neptune.material = neptuneMaterial;
                neptuneMaterial.freeze();   

                s_ringsMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_saturn_ring.png", scene);
                s_ringsMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                s_ringsMaterial.useAlphaFromDiffuseTexture = true;
                s_rings.material = s_ringsMaterial;
                s_ringsMaterial.freeze();   

                u_ringsMaterial.diffuseTexture = new BABYLON.Texture("textures/texture_uranus_ring.png", scene);
                u_ringsMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                u_ringsMaterial.useAlphaFromDiffuseTexture = true;
                u_rings.material = u_ringsMaterial;
                u_ringsMaterial.freeze();   


                // LOD
                sun.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function () {});

                mercury.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                venus.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                earth.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                mars.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                jupiter.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                saturn.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                uranus.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                neptune.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});

                // Ring materials

                s_rings.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});


                u_rings.simplify([{ quality: 0.9, distance: 50 }, { quality: 0.5, distance: 80 }, { quality: 0.3, distance: 100 }], true, BABYLON.SimplificationType.QUADRATIC, function() {});                                                                                

                // Planet rotations
                mercury.rotation.x = 0.03682645;
                venus.rotation.x = 0.0523599;
                mars.rotation.x = 0.436332;
                jupiter.rotation.x = 0.0523599;
                saturn.rotation.x = 0.4660029;
                uranus.rotation.x = 1.71042;
                neptune.rotation.x = 0.49427724;
                earth.rotation.z = Math.PI;
                earth.rotation.x = 0.4101524;
                s_rings.rotation.x = Math.PI / 2;
                u_rings.rotation.x = Math.PI / 2;                                               

                // Orbit Angles
                var e_alpha = Math.PI, m_alpha = Math.PI, v_alpha = Math.PI;
                var ma_alpha = Math.PI, j_alpha = Math.PI, s_alpha = Math.PI;
                var u_alpha = Math.PI, n_alpha = Math.PI;

                // Orbits
                var orbit = function () {


                        neptune.position = new BABYLON.Vector3(44.5 * Math.sin(n_alpha), neptune.parent.position.y, 43.5 * Math.cos(n_alpha));
                        neptune.rotate(BABYLON.Axis.Y, -0.96 * Math.PI, BABYLON.Space.LOCAL);
                        uranus.position = new BABYLON.Vector3(33.5 * Math.sin(u_alpha), saturn.parent.position.y, 31.5 * Math.cos(u_alpha));
                        uranus.rotate(BABYLON.Axis.Y, -0.56 * Math.PI, BABYLON.Space.LOCAL);
                        saturn.position = new BABYLON.Vector3(23.5 * Math.sin(s_alpha), saturn.parent.position.y, 22.5 * Math.cos(s_alpha));
                        saturn.rotate(BABYLON.Axis.Y, -0.96 * Math.PI, BABYLON.Space.LOCAL);
                        jupiter.position = new BABYLON.Vector3(19 * Math.sin(j_alpha), jupiter.parent.position.y, 18.5 * Math.cos(j_alpha));
                        jupiter.rotate(BABYLON.Axis.Y, -0.96 * Math.PI, BABYLON.Space.LOCAL);
                        mars.position = new BABYLON.Vector3(16.6 * Math.sin(ma_alpha), mars.parent.position.y, 13.8 * Math.cos(ma_alpha));
                        mars.rotate(BABYLON.Axis.Y, -0.2 * Math.PI, BABYLON.Space.LOCAL);
                        venus.position = new BABYLON.Vector3(7.28 * Math.sin(v_alpha), venus.parent.position.y, 7.18 * Math.cos(v_alpha));
                        venus.rotate(BABYLON.Axis.Y, 0.0016 * Math.PI, BABYLON.Space.LOCAL);
                        mercury.position = new BABYLON.Vector3(4.66 * Math.sin(m_alpha), mercury.parent.position.y, 3.07 * Math.cos(m_alpha));
                        mercury.rotate(BABYLON.Axis.Y, -0.006 * Math.PI, BABYLON.Space.LOCAL);
                        earth.position = new BABYLON.Vector3(10.1 * Math.sin(e_alpha), earth.parent.position.y, 9.8 * Math.cos(e_alpha));
                        earth.rotate(BABYLON.Axis.Y, -  0.4 * Math.PI, BABYLON.Space.LOCAL);

                        e_alpha -= 0.0034;
                        m_alpha -= 0.0142;
                        v_alpha -= 0.0056;
                        ma_alpha -= 0.0018;
                        j_alpha -= 0.00028;
                        s_alpha -= 0.00012;
                        u_alpha -= 0.00004;
                        n_alpha -= 0.00002;

                }

                scene.beforeRender = function () {
                        orbit();
                };
                
                scene.debugLayer.hide();

                // Return the created scene
                return scene;
        }
        var scene = createScene();
        engine.runRenderLoop(function() {
                scene.render();
        });
        window.addEventListener('resize', function() {
                engine.resize();
        });
});