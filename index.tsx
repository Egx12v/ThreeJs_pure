import Background from "../components/Background"


class Humano {
    public nombre: string
    private altura: number
    private peso: number

    constructor(nombre: string, altura: number, peso: number) {
        this.nombre = nombre
        this.altura = altura
        this.peso = peso
        this.saludar()
    }

    private saludar() {
        console.log("hola soy un humano y mi nombre es: " + this.nombre)
    }
}


class Peleador extends Humano {
    private poder = 100
    private defensa = 100
    
    constructor(nombre, scene: Scene) {
        super(nombre, 1.70, 80)
        console.log(this.nombre)
        console.log(scene)
    }

    public duplicarEstadisticas() {
        this.poder *= 2
        this.defensa *= 2
        console.log(this.poder)
        console.log(this.defensa)
    }

    public ejecutar(fn) {
        fn()
    }
}


class Scene {
    private score = 0

    constructor() {
        const peleador = new Peleador("nombre", this)
        const persona = new Humano("humano", 1.80, 90)

        // peleador.ejecutar(this.aumentarScore.bind(this))
    }

    private aumentarScore() {
        this.score += 100
        console.log(this)
    }
}


function HomePage() {
    new Scene()

    return null
}


export default HomePage