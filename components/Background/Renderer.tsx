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

          //*TODO Esto debe ser dinamico y tomar el tamño del widget
          this.setSize( 
            window.innerWidth,                      //? Le decimos al render que tome el tamño del window
            window.innerHeight                      //? altura de la pantalla
        ) 

        new Scene(this);
    
    }
}