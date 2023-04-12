// creo un array vacio, donde voy a ir agregando las propiedades
const propiedades = []

alert ("Bienvenido, Publicá tu propiedad")

//primero declaro el objetos CLASES (Mi plantilla)
class Propiedad {
    constructor (dormitorios, baños, garage, mts2){
        this.dormitorios=dormitorios
        this.baños =baños
        this.garage=garage
        this.mts2=mts2
    }
}
// Despues declaro la funcion de solicitar los datos de la propiedad a agregar
let continuar = true
const  agregarPropiedad = () => {
    let dormitorios
    let baños
    let garage
    let mts2
    
    do {
        dormitorios = parseInt(prompt("Cuantos dormitorios tiene?"))
    } while (isNaN(dormitorios)){
    }
    do {
        baños = parseInt(prompt("Cuantos baños?"))
    }while (isNaN(baños)){}
    do {
        garage = parseInt(prompt("Cuantos garages?"))
    }while (isNaN(garage)){}
    do {
        mts2 = parseFloat(prompt("Cuantos mts2?"))
    }while (isNaN(mts2)){}

// se crea el objeto con los parametros agregados en el contructor
const casa = new Propiedad (dormitorios,baños,garage,mts2)
alert ("Esta propiedad cuenta con:\n" + casa.dormitorios + " " + "dormitorios\n" + casa.baños +" " + "baños\n" + casa.garage + " " + "garage \n"  + casa.mts2 + " " + "mts2 \n" ) 


propiedades.push(casa)
console.log(propiedades)

alert ("vas agregando" + " " + propiedades.length + " " + "propiedades")

}

// hago un ciclo evaluando si se vuelve a ejecutar la funcion o no.
while(continuar){ 

    agregarPropiedad()
    continuar = confirm ("agregamos otra propiedad?")
}


// muestro una alerta cuando no se agregan mas propiedades con el total de propiedades agregadas al array
alert ("hemos agregado" + " "+ propiedades.length + " " +"propiedades correctamente, revisa la consola para ver las propiedades agregadas")
