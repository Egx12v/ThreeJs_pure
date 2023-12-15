
//* Importamos los cargadores de three vanilas
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"

//* Creamos nuestra clase loader para poder caragar modelos 3D a lo desgració'loco
export default class Loader extends GLTFLoader {
    //! Inicializmaos el constructor pero con super ya que extiende de una clase padre y nosotros estamos haciendo herencia
    constructor(){
        super();
        const DracoLoader = new DRACOLoader();
        //DracoLoader.setDecoderPath("www.laruta.com");//! La ruta de donde va a tomar el decode wsam esto recuerdo que antes era eun pex por la intrant (mejor usar un js local)
        DracoLoader.setDecoderPath( './draco/' ); /* draco | rescue */ //! viene desde => node_modules\three\examples\jsm\libs\draco (ahora para public)
        DracoLoader.preload();
        DracoLoader.setDecoderConfig({type:"js"}); //* js | wasm
        this.setDRACOLoader(DracoLoader)
    }
}