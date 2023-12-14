import {  
    Scene, 
    irectionalLight,
    HemisphereLight,
    AmbientLight,

} from "three"

export default class Lightning {

    constructor(scene:Scene){
         //* Creamos la iluminación
         scene.add(new AmbientLight("white", 1));
         scene.add(new HemisphereLight("white", 1));
    }
}