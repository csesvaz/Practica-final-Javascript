console.log("Ejercicio 1 ==>");
//Uso de guía de estilo para comentarios de los diferentes ejercicios//

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 2 ==>");
localStorage.setItem("practica", "Práctica Final ECMACScript");
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
    +" con el codigo postal "+ this.#direccion.codigoPostal);
}
textoModal(){
    let textoModal="Usuario: "+this.#nombre+" Nombre: "
    +this.#nombreUser+" Email: "+this.#email+ " Empresa: "+ this.#empresa+".";
    return textoModal;
}
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
console.log("Ejercicio 12 ==>");
/*Creamos un método estático en la clase usuario llamado getNombre para poder adquirir el valor
privado nombre*/
let variableGlobal=nombre1Mapeado;
variableGlobal.forEach((ele)=>console.log(Usuario.getNombre(ele)));

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 13 ==>");
let ciudadesSinRepetir=variableGlobal.slice();
for (let i = 0; i < ciudadesSinRepetir.length - 1; i++){
    for (let j = i + 1; j < ciudadesSinRepetir.length; j++) {
        if (Usuario.getCiudad(ciudadesSinRepetir[i]) == Usuario.getCiudad(ciudadesSinRepetir[j])) {
            ciudadesSinRepetir.splice(j, 1);
            j--;
        }
    }
}
ciudadesSinRepetir.forEach((ele) => console.log(Usuario.getCiudad(ele)));
//Creo una variable vacia para meterlas como array dado que no sabemos cuantas ciudades diferentes habrá en el futuro
let variableCiudades=[];
for (let i = 0; i < ciudadesSinRepetir.length; i++) {
    let variableUsuariosCiudades=[];
    for (let j = 0; j < variableGlobal.length; j++) {
        if (Usuario.getCiudad(variableGlobal[i]) == Usuario.getCiudad(variableGlobal[j])){
        variableUsuariosCiudades.push(variableGlobal[j]);
        }
    variableCiudades[i]=variableUsuariosCiudades;    
    }
}; 
//Ahora tenemos en el Array variableCiudades Array de Usuarios con las distintas ciudades.
console.log(variableCiudades);

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 14 ==>");
let variableCiudadesOrdenadas=[];
variableGlobal.sort((a, b) => {
    if (Usuario.getNombre(a) < Usuario.getNombre(b)) {
        return -1;
    } else if (Usuario.getNombre(a) > Usuario.getNombre(b)) {
        return 1;
    } else {
        return 0;
    }
}); 
for (let i = 0; i < ciudadesSinRepetir.length; i++) {
    let variableUsuariosCiudades=[];
    for (let j = 0; j < variableGlobal.length; j++) {
        if (Usuario.getCiudad(variableGlobal[i]) == Usuario.getCiudad(variableGlobal[j])){
            variableUsuariosCiudades.push(variableGlobal[j]);
        }
    variableCiudadesOrdenadas[i]=variableUsuariosCiudades;    
    }
}; 
 // Ahora tenemos en el Array variableCiudades Array de Usuarios 
//  con las distintas ciudades ordenados por el nombre del usuario.
console.log(variableCiudadesOrdenadas);

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 15 ==>");
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
//Creamos una funcion en la clase Usuario que nos devuelva el Nombre, Usuario, Email y empresa.

function mostrarUsuarios(){
    let textoModal = "";
    variableGlobal.forEach((ele) => {
        let ciudad = Usuario.getCiudad(ele);
        let color = ciudad == "Gwenborough" ? "blue" : "green";
        textoModal += `<span style="color: ${color}">-${ele.textoModal()}</span>\n`;
    });
return textoModal;
};
//console.log(textoModal);
document.getElementById("listaUsuarios").insertAdjacentHTML("afterbegin",mostrarUsuarios());
document.getElementById("listaUsuarios").insertAdjacentHTML("beforeend",`<p>${calcularDatos(variableGlobal)}</p>`);
    
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 16 ==>");
//Insertamos un select al principio del modal para seleccionar ciudad.
document.getElementById("listaUsuarios").insertAdjacentHTML("afterbegin",`<select class="select" name="ciudad" required >
                        <option>Gwenborough</option>
                        <option>Wisokyburgh</option>
</select>
<p></p>`);

function filtrarCiudad(ciudad){
    let textoFiltro="";
    const i = this.selectedIndex;
    let usuarios=[];
    variableGlobal.forEach((ele)=>{
        if(Usuario.getCiudad(ele)==ciudad){
            let color = ciudad == "Gwenborough" ? "blue" : "green";
            textoFiltro += `<span style="color: ${color}">-${ele.textoModal()}</span>\n`;
            usuarios.push(ele);
        }
    });
    document.getElementById("listaUsuarios").innerHTML=textoFiltro;
    document.getElementById("listaUsuarios").insertAdjacentHTML("beforeend",`<p>${calcularDatos(usuarios)}</p>`);
    document.getElementById("listaUsuarios").insertAdjacentHTML("afterbegin",`<select class="select" name="ciudad" required >
                        <option>Gwenborough</option>
                        <option>Wisokyburgh</option>
</select>
<p></p>`);
document.getElementById("listaUsuarios").insertAdjacentHTML("beforeend",`
    <div>
        <select class="select" id="selectorUsuarios" name="usuarios" required >
        </select>
        <p></p>
    </div>`
);
variableGlobal.forEach(ele=>{
    document.getElementById("selectorUsuarios").insertAdjacentHTML("beforeend",
    `<option style="colum-count:2">${Usuario.getNombre(ele)}
        <p>${ele.filtarDireccion()}</p>
    </option>`)
});
};
let selectorCiudad=document.querySelector(".select");
selectorCiudad.addEventListener("change", (event) => {
    let ciudadSeleccionada = selectorCiudad.value;
    if (ciudadSeleccionada == "Wisokyburgh") {
        filtrarCiudad("Wisokyburgh");
    } else if (ciudadSeleccionada == "Gwenborough") {
        filtrarCiudad("Gwenborough");
    }
});

console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 17 ==>");
/*Se ha implementado directamente en mostrarUsuarios().
let mostrarUsuarios= function(){
    let textoModal = "";
    variableGlobal.forEach((ele) => {
        let ciudad = Usuario.getCiudad(ele);
        let color = ciudad == "Gwenborough" ? "blue" : "green";
        textoModal += `<span style="color: ${color}">-${ele.textoModal()}</span>\n`;
    });
return textoModal;
};*/
console.log("-------------------------------------------------------------------------------------------------------------");
console.log("Ejercicio 18 ==>");
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
    return "El usuario mayor de la lista es "+mayor.name+" y el usuario menor es "+ menor.name+ " hay "+ menoresDeEdad
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
variableGlobal.forEach(ele=>{
    document.getElementById("selectorUsuarios").insertAdjacentHTML("beforeend",
    `<option>${Usuario.getNombre(ele)}</option>`)
});
document.getElementById("selectorUsuarios").addEventListener("change", function() {
    const i = this.selectedIndex;
    const usuarioSeleccionado = variableGlobal[i];
    document.getElementById("direccionUsuario").textContent = usuarioSeleccionado.filtarDireccion();
});
