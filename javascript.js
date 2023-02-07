console.log("Ejercicio 1 ==>");
//Uso de guía de estilo para comentarios de los diferentes ejercicios//
console.log("Ejercicio 2 ==>");
let practica = "Práctica final ECMACScript";
//Las variables globales se eliminan cuando se cierra la ventada del navegador//
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
    relojDigital.innerHTML=horaExacta;
    }
setInterval(actualizar,1000); //iniciar temporizador
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
console.log("Ejercicio 6 ==>");
/*Cambiamos la imagen en un click, creamos la variable imagen 1 e imagen 2 fuera de la 
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

