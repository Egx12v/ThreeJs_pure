import { useEffect } from "react"
import Background from "../components/Background"


//!  experimental obj classes to readme

//* Clase principal

class humano {

    private nombre:String    //!Esto puede ser accesible desde otro lado
    private altura:Number   //! Esto solo puede ser accedido desde la misma clase (Intern-mee)
    private peso:Number     //! Privado para aquí mismo...

    constructor(nombre:String, altura:Number, peso:Number){
        this.nombre=nombre;
        this.altura=altura;
        this.peso=peso;
        this.saludar( nombre);     //! Esto se auto ejecuta por el construcctor
    }

    private saldor() {
        console.log("private accese(): => not permissions;")
    }

    public saludar (name:String){
        console.log("Fn saludar()...", /* name */this.nombre) //!Podemos tener su nombre desde el this o desde params
    }



}

//* class extends => 
class peleador extends humano {

    /* public nombre: String;
    public peso:Number;
    public altura:Number; */

    private poder   =   100
    private defensa =   100


    constructor(nombre:String,/* peso:Number,altura:Number */){ // podemos haecer que tome valores por defecto o no
        //* Super le pasa los params a la clase de donde extiende (humano)
        super(nombre,1.8, 49)
        console.log(this.nombre)
    }

    /**
     * dup_stadistics => Metodo para poder duplicar valores de los datos
     */
    public dup_stadistics() {
        this.poder*=2;
        this.defensa*=2;
        console.log(this.defensa," -- ",this.poder);
    }

    private dubStadistics() {
        this.poder +=2;
        this.defesa *=2;
        console.log(this.poder);
        console.log(this.defensa);

    }

    /**
     * executeFn
     */
    public executeFn(fn) {
        fn();
    }
}


class Scene {

    private score = 0; //! Se infiere que el tipo de dato es de number 

    constructor() {
    console.log("Creando escena...")
      const  P1 = new peleador("juan");
      const hp = new humano("adrian",1.8,120)
      console.log("this this",this)
      P1.executeFn(this.aumentScore.bind(this)); // al pasar una función se pasas sin ();
      //TODO: I M P O R T A N T
      //* para poder pasar una función a otr objeto inicado dentro de this
      //* Usamos esta palabra .bind(this)
      //* permite a una clase u obj prestar "algo()" a alquien más (clase o objeto)
      
    }

    private aumentScore() {
        this.score+=10;
        console.log("Updating score:", this )

    }

}



//! Expermiental obj end




function HomePage(params) {

 /*   useEffect(() => {
   

}, []) */

   const humando = new humano("Pedro",2,55);        //!clase principal
   const peleador1 = new peleador("Lenin");   //!Extension
/* 
   console.log("Peleador:", peleador1.nombre)
   peleador1.dup_stadistics(); */

   new Scene();

   /* humando.saldor();
   humando.saldor();
   humando.saldor(); */


    return /* null */ (
    <div>

        Welcome to Next.js
         <Background />
    </div>
    )
}
export default HomePage