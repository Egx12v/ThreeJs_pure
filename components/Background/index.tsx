import { Component, ReactNode } from "react";

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
import Renderer from "./Renderer";

/* 
* Scene 
* Camera
* Rederer
 */






//! Aquí definimos la interfaz para las prop que recive desde donde se llama el componente
interface BackgroundProps {
    myprop: string; // Por ejemplo, se espera recibir una prop llamada 'myprop' de tipo string
    //!...  Otras props que el componente espera recibir
  }

export default class Background extends Component<BackgroundProps> {

    //! Experimental cuando no se envían valores desde el component call usar esto
    static defaultProps: Partial<BackgroundProps> = {
        myprop: 'Valor por defecto',
      };
    //! End exp
    
    /*   componentDidMount(): void {
        new Renderer()
    } */
    componentDidMount =()=>{return new Renderer();} //! Podemos migrara el did to arrow

    //* En un componente de clase para retornar cosas se hace de la siguiente manera
    /*  render(): ReactNode {
        return  <canvas id="myc"/>
    } */
    render =()=> <canvas id="myc"/>
    
}