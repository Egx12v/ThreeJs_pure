import { Scene as SceneThree} from 'three';
import Renderer from '../Renderer';
import Camera from '../Class/Camera';
import Lightning from '../Class/Lightning';
import SkyBox from '../Class/SkyBox';
export default class Scene extends SceneThree {

    private cameralocal : Camera;

    constructor(renderer){
        super()
        this.cameralocal = new Camera(); //? Inicializamos la instancia de la camara  
        new Lightning(this);
        new SkyBox(this);
        this.Update(renderer);
    }

    private Update(renderer) {
        renderer.render(this,this.cameralocal);
        requestAnimationFrame(this.Update.bind(this,renderer));//! recuerda pasar el contexto a elementos que no son internos
    }
}