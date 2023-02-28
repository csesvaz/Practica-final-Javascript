console.log("Ejercicio 1 ==>");
//Uso de guía de estilo para comentarios de los diferentes ejercicios//

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 2 ==>");
//Variable en el almacenamiento local.
localStorage.setItem("practica", "Práctica Final ECMACScript");
//Realiza una función para eliminarla al cerra la página.
addEventListener("beforeunload", function(eliminadoPractica) {
localStorage.removeItem("practica");
});

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
//Función para actualizar el reloj cada segundo.
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
//Cambiamos el color
function setColor() {
    this.style.backgroundColor="#ffff00";
}
//Volvemos al color anterior.
function removeColor() {
    this.style.backgroundColor="inherit";
}

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 6 ==>");
/*Cambiamos la imagen en un click, creamos la variable imagen1 e imagen2 fuera de la 
funcion para que existan en el ámbito global y no sólo local*/
let imagen1=1;
//Funcion de cambiar imagen.
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
//Funcion de cambiar imagen para otra imagen, he utilizado las mismas imágenes aunque se podrían variar 
//si se quisiera.
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
//Serialización.
let nombreParseado= JSON.parse(nombre);
//Muestra por pantalla los nombres de los usuarios.
nombreParseado.forEach(ele=>console.log(ele.name));

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 8 ==>");
//Creamos la clase Usuario con propiedades privadas.
class Usuario {
#idUser;
#nombre;
#nombreUser;
#email;
#empresa;
#direccion= {calle:"",ciudad:"",codigoPostal:""};
#url;
//constructor con todas las propiedades porque es el que usaremos en la serialización del JSON. 
constructor(idUser,nombre,nombreUser,email,empresa,calle1,ciudad1,codigoPostal1,url){
    this.#idUser=idUser;
    this.#nombre=nombre;
    this.#nombreUser=nombreUser;
    this.#email=email;
    this.#empresa=empresa;
    this.#direccion={calle:calle1,ciudad:ciudad1,codigoPostal:codigoPostal1};
    this.#url=url;
}
//Método de clase.
static getId(url) {
    return this.#idUser;
}
//Método para dar formato a los datos de usuario (Similar a toString).
mostrarDatosUsuario(){
    console.log("El usuario tiene el id "+this.#idUser+" tiene el nombre "+this.#nombre+", el nombre del usuario es "+ this.#nombreUser
    +", el mail es "+this.#email+ ", pertenece a la empresa "+ this.#empresa+ " situada en "+this.#direccion.ciudad+ " en la calle "
    +" con el codigo postal "+ this.#direccion.codigoPostal);
}
mostrarUsuarios(){
    let mostrarUsuarios="Usuario: "+this.#nombre+" Nombre: "
    +this.#nombreUser+" Email: "+this.#email+ " Empresa: "+ this.#empresa+".";
    return mostrarUsuarios;
}
//Creamos la función mapear para ser usada en el Ej 10.
static mapear(usuario) {
    const direccion1 = usuario.address;
    const calle = direccion1.street;
    const ciudad = direccion1.city;
    const codigoPostal = direccion1.zipcode;
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
filtarDireccion() {
    return `C/ ${this.#direccion.calle}, ${this.#direccion.ciudad} (${this.#direccion.codigoPostal}).`;
}
}

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 9 ==>");
//Creamos el objeto tipo USuario llamado USerPrueba.
let userPrueba= new Usuario("userPrueba","Prueba Practica Final","PruebaPF7","pruebapf7@hotmail.com",
"Leroy Merlin","Gravina 7", "Roma","41449","https://prueba.dev/api/users/102/");
//Lo mostramos por pantalla usando el método mostrarDatosUSuario.
userPrueba.mostrarDatosUsuario();

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 10 ==>");
/*Creamos una funcion que nos convierta el la variable de json.js en un objeto de la clase Usuario se puede asignar un ID secuencial 
creando una variable e incrementándola cada vez que se ejecute la función en caso necesario.
console.log(nombreParseado[0]);*/

const usuarioMapeado=Usuario.mapear(nombreParseado[0]);
usuarioMapeado.mostrarDatosUsuario();

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 11 ==>");
/*Implementamos una función que nos convierta la variable de json.js en un array de objetos de la clase Usuario*/
const nombreMapeado = nombreParseado.map((usuario) => Usuario.mapear(usuario));
nombreMapeado.forEach((ele) => ele.mostrarDatosUsuario());

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 12 ==>");
/*Creamos un método estático en la clase usuario llamado getNombre para poder adquirir el valor
privado nombre, en caos de quererlo en una línea en vez de el columna
sólo habría que modificar el método.*/
nombreMapeado.forEach((ele)=>console.log(Usuario.getNombre(ele)));

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 13 ==>");
/*En vez de crear dos variables, dado que sólo existen 2 ciududades se ha buscado la manera 
de que el método sirva para cualquier número de ciudades.*/
//Realizamos un acopia dura de nombre nombreMapeado.
let ciudadesSinRepetir=nombreMapeado.slice();
//Buscamos las ciudades sin repetir y las introducimosn en el array creado. 
//Sólo estará un usuario por ciudad.
for (let i = 0; i < ciudadesSinRepetir.length - 1; i++){
    for (let j = i + 1; j < ciudadesSinRepetir.length; j++) {
        if (Usuario.getCiudad(ciudadesSinRepetir[i]) == Usuario.getCiudad(ciudadesSinRepetir[j])) {
            ciudadesSinRepetir.splice(j, 1);
            j--;
        }
    }
}
/* Comprobamos que sólo hay dos usurios con el método de clase 
getCiudad ciudadesSinRepetir.forEach((ele) => console.log(Usuario.getCiudad(ele)));*/
//Creo una variable vacia para meter como array los usuarios de cada ciudad.
let variableCiudades=[];
for (let i = 0; i < ciudadesSinRepetir.length; i++) {
    let variableUsuariosCiudades=[];
    for (let j = 0; j < nombreMapeado.length; j++) {
        if (Usuario.getCiudad(nombreMapeado[i]) == Usuario.getCiudad(nombreMapeado[j])){
//Importante realizamos push si la ciudad coincide con cada usuario único de la ciudad creado en el bucle anterior.
        variableUsuariosCiudades.push(nombreMapeado[j]);
        }
    variableCiudades[i]=variableUsuariosCiudades;    
    }
}; 
//Ahora tenemos en el Array variableCiudades Array de Usuarios con las distintas ciudades.
console.log(variableCiudades);

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 14 ==>");
/*Creamos la variable variable CiudadesOrdenadas por si en un futuro se quisiera trabajar con la 
variableCiudades, aunque se podría modificar directamente esta.*/
let variableCiudadesOrdenadas=[];
//Ordenamos la variable de todos los usuarios por el orden alfabético del nombre.
nombreMapeado.sort((a, b) => {
    if (Usuario.getNombre(a) < Usuario.getNombre(b)) {
        return -1;
    } else if (Usuario.getNombre(a) > Usuario.getNombre(b)) {
        return 1;
    } else {
        return 0;
    }
}); 
//Ordenamos el array conn los array de usuarios por ciudades.
for (let i = 0; i < ciudadesSinRepetir.length; i++) {
    let variableUsuariosCiudades=[];
    for (let j = 0; j < nombreMapeado.length; j++) {
        if (Usuario.getCiudad(nombreMapeado[i]) == Usuario.getCiudad(nombreMapeado[j])){
            variableUsuariosCiudades.push(nombreMapeado[j]);
        }
    variableCiudadesOrdenadas[i]=variableUsuariosCiudades;    
    }
}; 
 /* Ahora tenemos en el Array variableCiudades Array de Usuarios 
con las distintas ciudades ordenados por el nombre del usuario.*/
console.log(variableCiudadesOrdenadas);

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 15 ==>");
//Insertamos opción Usuarios en nuestro HTML.
let creacionModal=document.getElementById("nav-item");
creacionModal.insertAdjacentHTML("beforebegin",`
<button id="abrirModal">Usuarios</button>
<div id="ventanaModal" class="modal1">
    <div class="contenido-modal">
        <span class="cerrar">&times;</span>
        <h4>Lista de los Usuarios</h4>
        <p id="listaUsuarios"></p>
    </div>
</div>`);

let modal = document.getElementById("ventanaModal");

// Botón que abre el modal
let boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function(event) {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function(event) {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
//Creamos una funcion llamada mostrarUsuarios en la clase Usuario que nos devuelva el Nombre, Usuario, Email y empresa.
//Creamos una función para que me los de por colores y muestre en pantalla reutilizando la función mostraUsuarios.
let listaUsuarios=document.getElementById("listaUsuarios");
function mostrarUsuariosPorColores(listaUsuarios){
    let mostrarUsuarios = "";
    listaUsuarios.forEach((ele) => {
        let ciudad = Usuario.getCiudad(ele);
        let color = ciudad == "Gwenborough" ? "blue" : "green";
        mostrarUsuarios += `<span style="color: ${color}">-${ele.mostrarUsuarios()}</span>\n`;
    });
return mostrarUsuarios;
};
//console.log(mostrarUsuarios);
//Insertamos el texto con los colores respectivos
listaUsuarios.insertAdjacentHTML("afterbegin",mostrarUsuariosPorColores(nombreMapeado));
//Insertamos el texto con los datos de los usuarios.
listaUsuarios.insertAdjacentHTML("beforeend",`<p>${calcularDatos(nombreMapeado)}</p>`);
    
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 16 ==>");
//Insertamos un select al principio del modal para seleccionar ciudad.

listaUsuarios.insertAdjacentHTML("afterbegin",`<select class="select" id="selectorCiudad" name="ciudad" required >
                        <option>Gwenborough</option>
                        <option>Wisokyburgh</option>
</select>
<p></p>`);
function filtrarCiudad(ciudad){
    let usuarios=[];
    let textoFiltro="";
    nombreMapeado.forEach((ele)=>{
        if(Usuario.getCiudad(ele)==ciudad){
            let color = ciudad == "Gwenborough" ? "blue" : "green";
            textoFiltro += `<span style="color: ${color}">-${ele.mostrarUsuarios()}</span>\n`;
            usuarios.push(ele);
        }
    listaUsuarios.innerHTML=textoFiltro;
    listaUsuarios.insertAdjacentHTML("beforeend",`<p>${calcularDatos(usuarios)}</p>`);
    listaUsuarios.insertAdjacentHTML("afterbegin",`<select class="select" id ="selectorCiudad" name="ciudad" required >
                        <option>Gwenborough</option>
                        <option>Wisokyburgh</option>
</select>
<p></p>`);
listaUsuarios.insertAdjacentHTML("beforeend",`
    <div>
        <select class="select" id="selectorUsuarios" name="usuarios" required >
        </select>
        <p></p>
    </div>`
);
});
nombreMapeado.forEach(ele=>{
    document.getElementById("selectorUsuarios").insertAdjacentHTML("beforeend",
    `<option style="colum-count:2">${Usuario.getNombre(ele)}
        <p>${ele.filtarDireccion()}</p>
    </option>`)
});
};

let selectorCiudad=document.getElementById("selectorCiudad");
selectorCiudad.addEventListener("change",(event) => {
    let ciudadSeleccionada = event.target.value;
    if (ciudadSeleccionada == "") {
        listaUsuarios.insertAdjacentHTML("afterbegin",mostrarUsuariosPorColores(nombreMapeado));
        listaUsuarios.insertAdjacentHTML("beforeend",`<p>${calcularDatos(nombreMapeado)}</p>`);
        listaUsuarios.insertAdjacentHTML("afterbegin",`<select class="select" id="selectorCiudad" name="ciudad" required >
                        <option>Gwenborough</option>
                        <option>Wisokyburgh</option>
</select>
<p></p>`);
    } else  {
        filtrarCiudad(ciudadSeleccionada);
    }
});

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 17 ==>");
/*Se ha implementado directamente en mostrarUsuariosPorColores().
let mostrarUsuariosPorColores= function(){
    let mostrarUsuarios = "";
    nombreMapeado.forEach((ele) => {
        let ciudad = Usuario.getCiudad(ele);
        let color = ciudad == "Gwenborough" ? "blue" : "green";
        mostrarUsuarios += `<span style="color: ${color}">-${ele.mostrarUsuarios()}</span>\n`;
    });
return mostrarUsuarios;
};*/

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 18 ==>");
//Funcion para calcular los mayores de edad, los menores de edad y devolver texto.
function calcularDatos(listaUsuarios){
        let menoresDeEdad=0;
        let mayoresDeEdad=0;
        listaUsuarios.sort((a, b) => {
            if (b.age < a.age) {
                return -1;
            } else if (a.age < b.age) {
                return 1;
            } else {
                return 0;
            }
        });
        let mayor=listaUsuarios[0];
        let menor=listaUsuarios[listaUsuarios.length-1];
        listaUsuarios.forEach(ele => {
            if(ele.age<18){
                menoresDeEdad+=1;  
            }else{
                mayoresDeEdad+=1;   
        };
    })
    return "El usuario mayor de la lista es "+Usuario.getNombre(mayor)+" y el usuario menor es "+ Usuario.getNombre(menor)+ " hay "+ menoresDeEdad
    +" menores de edad y "+mayoresDeEdad+ " mayores de edad";
    };

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 19 ==>");
//Añadir un evento al pulsar P o p.
function apretarP(event) {
// Obtener la tecla pulsada
    let tecla = event.key;
    if (tecla === 'p' || tecla === 'P') {
        let ventana = open("", "ventana", "width=400,height=200");
// Cerrar automáticamente la ventana después de 3 segundos
        ventana.document.write(localStorage.getItem("practica"));
        setTimeout(function() {
        ventana.close();
        }, 3000);
    }
}  
  // Agregar un evento de teclado en todo el documento.
document.addEventListener('keydown', apretarP);
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 20 ==>");
//Primero insertamos el desplegable de nombres al final del modal.
document.getElementById("listaUsuarios").insertAdjacentHTML("beforeend",`
    <div>
        <select class="select" id="selectorUsuarios" name="usuarios" required >
        </select>
        <p id="direccionUsuario"></p>
    </div>`
);
nombreMapeado.forEach(ele=>{
    document.getElementById("selectorUsuarios").insertAdjacentHTML("beforeend",
    `<option>${Usuario.getNombre(ele)}</option>`)
});
document.getElementById("selectorUsuarios").addEventListener("change", () =>{
    const i = this.selectedIndex;
    const usuarioSeleccionado = nombreMapeado[i];
    document.getElementById("direccionUsuario").textContent = usuarioSeleccionado.filtarDireccion();
});
