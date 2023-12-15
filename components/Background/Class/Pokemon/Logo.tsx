
import { Group, Scene } from "three"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
export default class Logo {
    private object: Group; //* objeto | atributo de tipo  grupo de three js

    constructor(scene:Scene,loader:GLTFLoader){
        loader.load("/logo.glb",(gltf)=>{
            this.object = gltf.scene // a esta propiedad le pasamos lo que recive el callbak desde gltf.scene (mini scene del gltf )
            scene.add(this.object); //! finalmente la agregamos a la escena real del entorno...
        })
    }
}