class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    //metodos get y set:
    set setNombre(newNombre) {
        this.nombre = newNombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setEdad(newEdad) {
        this.edad = newEdad;
    }
    get getEdad() {
        return this.edad;
    }
    set setDni(newDni) {
        this.dni = newDni;
    }
    get getDni() {
        return this.dni;
    }
    set setSexo(newSex) {
        this.sexo = newSex;
    }
    get getSexo() {
        return this.sexo;
    }
    set setPeso(newPeso) {
        this.peso = newPeso;
    }
    get getPeso() {
        return this.peso;
    }
    set setAltura(newAltura) {
        this.altura = newAltura;
    }
    get getAltura() {
        return this.altura;
    }
    set setNacimiento(newNacimiento) {
        this.nacimiento = newNacimiento;
    }

    //metodos:
    mostrarGeneracion() {
        if (1930 <= this.nacimiento && this.nacimiento <= 1948) {
            alert(`${this.nombre} pertenece a la Silent Generation que se caracteriza por su austeridad`);
        } else if (this.nacimiento <= 1968) {
            alert(`${this.nombre} pertenece a la Generacion Baby Boom que se caracteriza por su ambición`);
        } else if (this.nacimiento <= 1980) {
            alert(`${this.nombre} pertenece a la Generacion X que se caracteriza por su obseción por el éxito`);
        } else if (this.nacimiento <= 1993) {
            alert(`${this.nombre} pertenece a la Generacion Y que se caracteriza por su tendencia a frustrase`);
        } else if (this.nacimiento <= 2010) {
            alert(`${this.nombre} pertenece a la Generacion Z que se caracteriza por su irreverencia`);
        } else {
            alert(`${this.nombre} no está categorizado en ninguna generación`);
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            alert(`${this.nombre} es mayor de edad`);
        } else {
            alert(`${this.nombre} es menor de edad`);
        }
    }

    mostrarDatos() {
        alert(`
Nombre: ${this.nombre}
Edad: ${this.edad}
DNI: ${this.dni}
Sexo: ${this.sexo}
Peso: ${this.peso}
Altura: ${this.altura}
Fecha de nacimiento: ${this.nacimiento}
`);
    }
}

//menajadores de eventos (botones):
const botonGeneracion = document.getElementById("btnGeneracion");
const botonEdad = document.getElementById("btnMayorEdad");

botonGeneracion.addEventListener("click", generacion);
botonEdad.addEventListener("click", mayoria);

//funciones
function generacion(e) {
    e.preventDefault();
    //console.log('desde la funcion generacino del boton Mostrar')
    let nombre = document.getElementById("nya").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let sexo = "H"; //ni idea como tomar el valor H o M.
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let nacimiento = document.getElementById("anio").value;
    let dataPersona = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);
    // console.log(dataPersona);
    dataPersona.mostrarGeneracion();
}

function mayoria(e) {
    e.preventDefault();
    //console.log('desde la funcion generacino del boton Mostrar')
    let nombre = document.getElementById("nya").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let sexo = "H"; //ni idea como tomar el valor H o M.
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let nacimiento = document.getElementById("anio").value;
    let dataPersona = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);
    //console.log(dataPersona);
    dataPersona.esMayorDeEdad();
}
