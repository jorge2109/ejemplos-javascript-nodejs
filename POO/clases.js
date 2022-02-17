class Animal{
    constructor(especie,edad,color){
        this.especie = especie
        this.edad = edad
        this.color = color
        this.informacion = "Soy " + especie + " Tengo "  + edad + " y soy de color " + color
    }

    verInformacion() {
        console.log(this.informacion)
    }
}

//HERENCIA
class Perro extends Animal{

    constructor(especie, edad,color,raza){
        super(especie,edad,color)
        this.raza = raza
    }
}

let objPerro = new Perro("perro",5, "rojo", "CHIHUAHA")
let objGato = new Animal("gato",5,"amarillo")
let objPajaro = new Animal("pajaro",2, "rojo")

//.log(perro.informacion)
objPerro.verInformacion()
objGato.verInformacion
objPajaro.verInformacion

objPerro.verInformacion()
objGato.ladrar()
objPajaro.ladrar()



