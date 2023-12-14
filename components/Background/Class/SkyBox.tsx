import { Component } from 'react';
import {  
    Scene, 
    //! Esto para test solo cargamos la malla, el tipo de material y la figura
    Mesh,
    //! Para cargar la esfera
    SphereGeometry,     //! Cargamos la esfera donde se pinta las texturas
    TextureLoader,      //! Cargador de textura
    BackSide,
    MeshPhongMaterial,           //! Para ver por dentro? del lado del reverso (a veces solo se ven de un lado)
} from "three"

export default class SkyBox /* extends Component  */ {
    constructor(scene:Scene){
        //const madeSky=(scene)=>{}
        console.log("Creando cielo")
        
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
        
        
    }
   
}