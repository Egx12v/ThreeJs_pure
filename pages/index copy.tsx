import { useEffect } from "react"

import {  
    Scene, 
    WebGL1Renderer,     //! Ver si es necesario usaar otra camara
    PerspectiveCamera,  //! De momento usamos este tipo de camara

    //! Esto para test solo cargamos la malla, el tipo de material y la figura
    Mesh,
    MeshBasicMaterial,
    BoxGeometry,
    //! Para cargar la esfera
    SphereGeometry,     //! Cargamos la esfera donde se pinta las texturas
    TextureLoader,      //! Cargador de textura
    BackSide,
    MeshPhongMaterial,           //! Para ver por dentro? del lado del reverso (a veces solo se ven de un lado)
    DirectionalLight,
    HemisphereLight,
    AmbientLight,

} from "three"

/* 
* Scene 
* Camera
* Rederer
 */

function HomePage(params) {

   useEffect(() => {
    const scene = new Scene();
    const render = new WebGL1Renderer({
        antialias:true,                       //? Evita el pixelado
        canvas:document.getElementById("myc") //? Optenenos el canvas por su id en el dom (se recomienda así para no crear duplicidada de canvas)

    });
    const camera = new PerspectiveCamera(
        50,                                     //? Field on view
        window.innerWidth / window.innerHeight, //? Aspect ratio dinamico por cada tipo de pantalla
        0.1,                                    //? que tan cerca y 
        10000                                   //? que tan lejos que ve, si ve poco se cortan partes es decir solo lo que cabe a esa distancia
    );

    camera.position.z = 6;

    /* //! DEV MODE */

    //* Creammos la geometría cubo
    const geometria = new BoxGeometry(1,1,1);   //? alto ancho y profundidad
    const material = new MeshBasicMaterial({    //? Tipo de material que no necesita luz
          color : 'rgba(212,35,134)'             //? deinidmos el color
        }
    )
    const cubo = new Mesh(geometria,material);
    scene.add(cubo)                             //? Agregamos el cubo a la scene


    //* Creamos el cielo loader
    const SkyGeometri = new SphereGeometry(
          360,                                  //? Tamaño de la esfera
          25,                                   //? Cantidad de segmetos (Imagino que es la cantidad de gajos)
          25                                    //? Tamaño de segmetos
    ); 

    const loader = new TextureLoader();

    const Textura = loader.load("./custom-sky.png");
    const materialS = new MeshPhongMaterial({
        map:Textura,                            //? Mapeamos la textura al material
    })

    const skyboxs = new Mesh(SkyGeometri, materialS);

    scene.add(skyboxs);                         //? Agregamos el sky a la scene
    skyboxs.material.side = BackSide;

    //* Creamos la iluminación
    scene.add(new AmbientLight("white", 1))
    scene.add(new HemisphereLight("white", 1))








    /* //! DEV MODE */

    //*TODO Esto debe ser dinamico y tomar el tamño del widget
    render.setSize( 
        window.innerWidth,                      //? Le decimos al render que tome el tamño del window
        window.innerHeight                      //? altura de la pantalla
    )                            

    function animation() {
        cubo.rotation.x += 0.05;
        cubo.rotation.y += 0.005;

        render.render(scene,camera);
        requestAnimationFrame(animation);
    }

    animation();

}, [])
    
    return (
    <div>

        Welcome to Next.js
         <canvas id="myc"></canvas>
    </div>
    )
}
export default HomePage