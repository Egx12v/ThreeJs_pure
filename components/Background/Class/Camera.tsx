import { PerspectiveCamera, Scene } from 'three';
export default class Camera extends PerspectiveCamera{

    constructor(/* scene:Scene */){

        /* //! Old to change type cameras */
        /* 
          const camera = new PerspectiveCamera(
            50,                                     //? Field on view
            window.innerWidth / window.innerHeight, //? Aspect ratio dinamico por cada tipo de pantalla
            0.1,                                    //? que tan cerca y 
            10000                                   //? que tan lejos que ve, si ve poco se cortan partes es decir solo lo que cabe a esa distancia
        );
    
         camera.position.z = 6;
        */
        super(
            50,                                     //? Field on view
            window.innerWidth / window.innerHeight, //? Aspect ratio dinamico por cada tipo de pantalla
            0.1,                                    //? que tan cerca y 
            10000                                   //? que tan lejos que ve, si ve poco se cortan partes es decir solo lo que cabe a esa distancia
        )
        this.position.z = 6;
    }
}