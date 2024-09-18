/* EJERCICIO 1
Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/

function viewAge() {
    let age = document.getElementById("age").value;
    let message = age >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";
    alert(message);
}

/* EJERCICIO 2
Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
•
Examen =20%
•
tareas = 40%
•
asistencia = 10%
•
investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/

function calcFinalNote() {

    let name2 = document.getElementById("name2").value;
    let credential2 = document.getElementById("credential2").value;
    let exam2 = parseFloat(document.getElementById("exam2").value) || 0; //para evitar que tome la letra e y ponga resultado naN y el parseFloat que pueda ocupar decimal
    let homeWork2 = parseFloat(document.getElementById("homeWork2").value) || 0;
    let attendance2 = parseFloat(document.getElementById("attendance2").value) || 0;
    let research2 = parseFloat(document.getElementById("research2").value) || 0;

    let finalNote2 = (exam2 * 0.20) + (homeWork2 * 0.40) + (attendance2 * 0.10) + (research2 * 0.30);

    const final2 = document.getElementById("result2"); //primero tomo el ojeto que voy a manipular

    final2.innerHTML = `<h6 class="mt-3">RESULTADO</h6><br><p class="mt-2"><strong>Nombre:</strong> ${name2}<strong> Carnet:</strong> ${credential2}<strong> Nota Final:</strong> ${finalNote2.toFixed(2)}</p>`;

}

/* EJERCICIO 3*/
/*
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial.

CATEGORIA AUMENTO 
A 15%
B 30%
C 10%
D 20%
*/

function salaryCal() {

    let name3 = document.getElementById("name3").value;
    let salary3 = parseFloat(document.getElementById("salary3").value) || 0;
    let increase3 = document.getElementById("increase3").value;
    let finalIncrease3 = salary3;


    switch (increase3) {
        case "increase3A":

            finalIncrease3 *= 1.15;

            break;

        case "increase3B":

            finalIncrease3 *= 1.30;

            break;

        case "increase3C":

            finalIncrease3 *= 1.10;

            break;

        case "increase3D":

            finalIncrease3 *= 1.20;

            break;

        default:
            finalIncrease3 = salary3;

    }

    const final3 = document.getElementById("result3"); //primero tomo el ojeto que voy a manipular

    final3.innerHTML = `<h6 class="mt-3">RESULTADO</h6><br><p class="mt-2"><strong>Nombre:</strong> ${name3}<strong> Salario:</strong> ${salary3}<strong> Salario con aumento:</strong> ${finalIncrease3.toFixed(2)}</p>`;


}

//EJERCICIO 4
/*
Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo
*/

function calNumEnt() {

    let numberEntero4_1 = parseFloat(document.getElementById("numberEntero4_1").value);
    let numberEntero4_2 = parseFloat(document.getElementById("numberEntero4_2").value);
    let mayorEntero4;

    if (!Number.isInteger(numberEntero4_1) || !Number.isInteger(numberEntero4_2)) {
        alert("Por favor, ingresa solo números enteros.");
        return;
    }

    if (numberEntero4_1 > numberEntero4_2) {
        mayorEntero4 = numberEntero4_1;
    } else if (numberEntero4_2 > numberEntero4_1) {
        mayorEntero4 = numberEntero4_2;
    } else {
        mayorEntero4 = "Ambos números son iguales";
    }

    alert("El número mayor es: " + mayorEntero4);
}

//EJERCICIO 5
/*
Realizar una función para una tienda de coches en donde se deberá calcular: Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario.
*/

function calOff5() {

    let carSelect5 = document.getElementById("carSelect5").value;
    let off5 = 0;
    let imgUrl5 = "";

    switch (carSelect5) {
        case "fordFiesta5":

            off5 = "5%";
            imgUrl5 = "./assets/img/fordFiesta.jpg";
        
            break;

        case "fordFocus5":

            off5 = "10%";
            imgUrl5 = "./assets/img/fordFocus.jpg";

            break;

        case "fordScape5":

            off5 = "20%";
            imgUrl5 = "./assets/img/fordEscape.jpg";

            break;

        default:
            off5 = "No ha seleccionado ningún vehículo";

    }

    document.getElementById("result5").innerHTML = 
    "Descuento aplicado: " + off5;

    document.getElementById("imagenCarro5").innerHTML = 
    "<img src='" + imgUrl5 + "' alt='Imagen de " + carSelect5 + "' style='width:300px;'>";
}

//EJERCICIO 6
/*
Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
        Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.
*/


function travelOff6(){

    let origenSelect6 = document.getElementById("origenSelect6").value;
    let travelSelect6 = document.getElementById("travelSelect6").value;
    let off6 = 0;

    if (origenSelect6 == "laPalma6"){

        switch (travelSelect6) {
            case "costaSol6":
    
                off6 = "5%";
                break;
    
            case "panchimalco6":
    
                off6 = "10%";
                break;
    
            case "puertoTriunfo6":
    
                off6 = "15%";    
                break;
    
            default:
                off6 = "No ha seleccionado ningún destino";
    
        }

    } else {

        off6 = "Este destino no cuenta con descuento";
    }



    document.getElementById("result6").innerHTML = 
    "Descuento aplicado: " + off6;
}


//EJERCICIO 7
/*
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
*/

function calcNumbers7(){

    let values = [];

    for (let i = 1; i <= 10; i++) {
        let valuesNum = parseFloat(document.getElementById("num7_" + i).value);
        
        if (!Number.isInteger(valuesNum)) {
            alert("Por favor, ingresa solo números enteros.");
            return;
        } else{
        values.push(valuesNum);
        }
    }

    let negatives = 0;
    let positives = 0;
    let multiples15 = 0;
    let cumulativePairs = 0;

    values.forEach(function(values) {
        if (values < 0) {
            negatives++;
        }
        if (values > 0) {
            positives++;
        }
        if (values % 15 === 0) {
            multiples15++;
        }
        if (values % 2 === 0) {
            cumulativePairs += values;
        }
    });

    // Mostrar los resultados
    document.getElementById("result7").innerHTML = 
        `<p>Cantidad de valores negativos: ${negatives}</p>
        <p>Cantidad de valores positivos: ${positives}</p>
        <p>Cantidad de múltiplos de 15: ${multiples15}</p>
        <p>Acumulado de números pares: ${cumulativePairs}</p>
        <p>Cadena: ${values}</p>`;
}

//EJERCICIO 8
/*
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
*/

function mulTable8(){

        let numberTable8 = parseFloat(document.getElementById("table8").value)

        if (Number.isInteger(numberTable8) && numberTable8>=1 && numberTable8<=9) {
            
            document.getElementById("tableMult8").innerHTML = "";

            for (let i = 1; i <= 9; i++) {

                let row = document.createElement("tr"); //Creo el elemento <tr>
                let col = document.createElement("td"); //Creo el elemetno <td>
                //acá le agrego el contenido dentro de td
                col.innerHTML = `${numberTable8} x ${i} = ${numberTable8*i}`;
                //acá le meto todo el contenido de la celda y la celda a la fila
                row.append(col);
                //acá tomo el objeto tabla y le meto todo el contenido que tiene la fila
                document.getElementById("tableMult8").append(row);

            }
                        
        } else {
        
            alert("Por favor, ingresa solo números enteros del 1 al 10.");
            return;

        }
};


//EJERCICIO 9
/*
 Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

function converter9() {
    let msj9;
    let celsius = parseFloat(document.getElementById("celcius9").value);
    let fahrenheit = (celsius * 9/5) + 32;

    switch (true) {
        case (fahrenheit >= 14 && fahrenheit <= 32):
            msj9 = "Temperatura baja";
            break;
        case (fahrenheit > 32 && fahrenheit <= 68):
            msj9 = "Temperatura adecuada";
            break;
        case (fahrenheit > 68 && fahrenheit <= 96):
            msj9 = "Temperatura alta";
            break;
        default:
            msj9 = "Temperatura desconocida";
    }

    document.getElementById("result9").innerHTML = 
        `Conversión Fahrenheit: ${fahrenheit}°F <br> ${msj9}`;
}

//EJERCICIO 10


let currentSection = 0;
const sections = document.querySelectorAll('.section');

// Next section
function nextSection(index) {
    sections[currentSection].classList.remove('active');
    currentSection = index;
    sections[currentSection].classList.add('active');
}

// Previus sectoin
function previousSection(index) {
    sections[currentSection].classList.remove('active');
    currentSection = index;
    sections[currentSection].classList.add('active');
}


function calAge(ages) {
    let sumAge = 0;
    ages.forEach(function(age) {
        sumAge += age;
    });
    return sumAge / ages.length;
}

function calcularPromedios() {
    
    let morningAge = [
        parseInt(document.getElementById('morningAge1').value) || 0,
        parseInt(document.getElementById('morningAge2').value) || 0,
        parseInt(document.getElementById('morningAge3').value) || 0,
        parseInt(document.getElementById('morningAge4').value) || 0,
        parseInt(document.getElementById('morningAge5').value) || 0
    ];
    let promMorningAge = calAge(morningAge);


    let afAge = [
        parseInt(document.getElementById('afAge1').value) || 0,
        parseInt(document.getElementById('afAge2').value) || 0,
        parseInt(document.getElementById('afAge3').value) || 0,
        parseInt(document.getElementById('afAge4').value) || 0,
        parseInt(document.getElementById('afAge5').value) || 0,
        parseInt(document.getElementById('afAge6').value) || 0
    ];
    let promAfAge = calAge(afAge);


    let nightAge = [
        parseInt(document.getElementById('nightAge1').value) || 0,
        parseInt(document.getElementById('nightAge2').value) || 0,
        parseInt(document.getElementById('nightAge3').value) || 0,
        parseInt(document.getElementById('nightAge4').value) || 0,
        parseInt(document.getElementById('nightAge5').value) || 0,
        parseInt(document.getElementById('nightAge6').value) || 0,
        parseInt(document.getElementById('nightAge7').value) || 0,
        parseInt(document.getElementById('nightAge8').value) || 0,
        parseInt(document.getElementById('nightAge9').value) || 0,
        parseInt(document.getElementById('nightAge10').value) || 0,
        parseInt(document.getElementById('nightAge11').value) || 0
    ];

    let promNightAge = calAge(nightAge);

//acá asumo que el turno de la mañana es el mayor para poder ir a hacer la comparación
    let mayor10 = "Mañana";
    let promMayor10 = promMorningAge;


    if (promAfAge > promMayor10) {
        promMayor10 = promAfAge;
        mayor10 = "Tarde";
    }
    if (promNightAge  > promMayor10) {
        promMayor10 = promNightAge ;
        mayor10 = "Noche";
    }


    document.getElementById("result10").innerHTML = 
    `   <p>Promedio de edades del turno Mañana: ${promMorningAge.toFixed(2)}</p>
        <p>Promedio de edades del turno Tarde: ${promAfAge.toFixed(2)}</p>
        <p>Promedio de edades del turno Noche: ${promNightAge.toFixed(2)}</p>
        <p><strong>El turno con el mayor promedio es: ${mayor10}</strong></p>
    `;
}


// button up

window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  

  document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };