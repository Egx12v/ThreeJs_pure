import { WebGL1Renderer } from "three";
import Scene from "./Scenes/Scene";

export default class Renderer extends WebGL1Renderer{

    constructor(){
        /* //! Old recover types
        const render = new WebGL1Renderer({
            antialias:true,                       //? Evita el pixelado
            canvas:document.getElementById("myc") //? Optenenos el canvas por su id en el dom (se recomienda así para no crear duplicidada de canvas)
    
        });
        */
        super({
            antialias:true,                       //? Evita el pixelado
            canvas:document.getElementById("myc") //? Optenenos el canvas por su id en el dom (se recomienda así para no crear duplicidada de canvas)
             })
        
        //! Inicializamos las configuraciones del render
        this.config(); //* Actualmente no tiene paramaetros pero podemos pasarle nuevos para opciones propias
        new Scene(this);

    }

    //Metodo privado para configurara el renderer como agregar redimensión
    // Postprocesados y demás cosas desde aquí
    private config() {
        
        //*TODO Esto debe ser dinamico y tomar el tamño del widget
        this.setSize( 
            window.innerWidth,                      //? Le decimos al render que tome el tamño del window
            window.innerHeight                      //? altura de la pantalla
        ) 
        window.addEventListener("resize", this.onResizeWidow )


    }

    private onResizeWidow() {
        window.location.reload(); //! Esto solo recarga la pantalla al resize, pero
        //* Se intuye que no es optimo xq todo el render crea de nuevo las cosas como elementos y demás...
    }

}