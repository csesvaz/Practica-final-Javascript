console.log("Ejercicio 1 ==>");
//Uso de guía de estilo para comentarios de los diferentes ejercicios//
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 2 ==>");
let practica = "Práctica final ECMACScript";
//Las variables globales se eliminan cuando se cierra la ventada del navegador//
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 3 y 4 ==>");
//El reloj está asociado a la fecha y hora actual y a su id="reloj"//
let reloj = function() {
        fecha=new Date(); 
        hora=fecha.getHours();
        minuto=fecha.getMinutes(); 
        segundo=fecha.getSeconds();
        if (hora<10) {
        hora="0"+hora;
        }
        if (minuto<10) { 
        minuto="0"+minuto;
        }
        if (segundo<10) { 
        segundo="0"+segundo;
        }
        relojDigital = hora+":"+minuto+":"+segundo;	
                return relojDigital ; 
        }
function actualizar() { 
    horaExacta=reloj(); 
    relojDigital=document.getElementById("reloj"); 
    relojDigital1=document.getElementById("relojformulario"); 
    relojDigital.innerHTML=horaExacta;
    }
setInterval(actualizar,1000); //iniciar temporizador
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 5 ==>");
/*Entendiendo que hay que implementarlo en un elemento del header lo he realizado con una consulta por el 
nombre de la clase*/
[...document.querySelectorAll(".navbar-brand")].forEach(el => {
    el.addEventListener("mouseenter", setColor);
    el.addEventListener("mouseleave", removeColor);
});

function setColor() {
    this.style.backgroundColor="#ffff00";
}
function removeColor() {
    this.style.backgroundColor="inherit";
}
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 6 ==>");
/*Cambiamos la imagen en un click, creamos la variable imagen1 e imagen2 fuera de la 
funcion para que existan en el ámbito global y no sólo local*/
let imagen1=1;
function cambiarImagen() {
    let imagen = document.getElementById("base1");
    if (imagen1==1) {
        imagen.src = "./assets/Base2.jpg";
        imagen1=2;
    } else {
        imagen.src = "./assets/Base1.jpg";
        imagen1=1;
    }
}
let imagen2=1;
    function cambiarImagen2() {
        let imagen = document.getElementById("base2");
        
        if (imagen2==1) {
            imagen.src = "./assets/Base1.jpg";
            imagen2=2;
        } else {
            imagen.src = "./assets/Base2.jpg";
            imagen2=1;
        }
}
console.log("Ejercicio 7 ==>");
let nombre1= JSON.parse(nombre);
//Serialización.
nombre1.forEach(ele=>console.log(ele.name));

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 8 ==>");

class Usuario {
#idUser;
#nombre;
#nombreUser;
#email;
#empresa;
#direccion= {calle:"",ciudad:"",codigoPostal:""};
#url;
constructor(idUser,nombre,nombreUser,email,empresa,calle1,ciudad1,codigoPostal1,url){
    this.#idUser=idUser;
    this.#nombre=nombre;
    this.#nombreUser=nombreUser;
    this.#email=email;
    this.#empresa=empresa;
    this.#direccion={calle:calle1,ciudad:ciudad1,codigoPostal:codigoPostal1};
    this.#url=url;
}

static getId(url) {
    return this.#idUser;
}
datosUsuario(){
    console.log("El usuario tiene el id "+this.#idUser+" tiene el nombre"+this.#nombre+", el nombre del usuario es "+ this.#nombreUser
    +", el mail es "+this.#email+ ", pertenece a la empresa "+ this.#empresa+ " situada en "+this.#direccion.ciudad+ " en la calle "
    +this.#direccion.calle+" con el codigo postal "+ this.#direccion.codigoPostal+
    " y tiene la siguiente URL "+this.#url);
}
static mapear(usuario) {
    const direccion = usuario.address;
    const calle = direccion.street;
    const ciudad = direccion.city;
    const codigoPostal = direccion.zipcode;
    const empresa = usuario.company.name;
    const url = usuario.url;
    return new Usuario(null, usuario.name, usuario.username, usuario.email, empresa, calle, ciudad, codigoPostal, url);
}
static getNombre(usuario){
    return usuario.#nombre;
}
static getCiudad(usuario){
    return usuario.#direccion.ciudad;
}
}

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 9 ==>");

let usuarioPrueba= new Usuario("userPrueba","Prueba Practica Final","PruebaPF7","pruebapf7@hotmail.com",
"Leroy Merlin","Gravina 7", "Roma","41449","https://prueba.dev/api/users/102/");
usuarioPrueba.datosUsuario();

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 10 ==>");
/*Creamos una funcion que nos convierta el la variable de json.js en un objeto de la clase Usuario se puede asignar un ID secuencial 
creando una variable e incrementándola cada vez que se ejecute la función en caso necesario.
console.log(nombre1[0]);*/

const usuarioMapeado=Usuario.mapear(nombre1[0]);
usuarioMapeado.datosUsuario();
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 11 ==>");
/*Implementamos una función que nos convierta el la variable de json.js en un array de objetos de la clase Usuario*/
const nombre1Mapeado = nombre1.map((usuario) => Usuario.mapear(usuario));
nombre1Mapeado.forEach((ele) => ele.datosUsuario());

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 11 ==>");
/*Creamos un método estático en la clase usuario llamado getNombre para poder adquirir el valor
privado nombre*/
let variableGlobal=nombre1Mapeado;
variableGlobal.forEach((ele)=>console.log(Usuario.getNombre(ele)));

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 12 ==>");
let ciudadesSinrepetir=variableGlobal.filter(function(item,index){
    return variableGlobal.indexOf(item) === Usuario.getCiudad(index);
})
console.log(ciudadesSinrepetir);


