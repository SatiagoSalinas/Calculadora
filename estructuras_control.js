// validando estructura de control if,con ejemplo de temperatura
let temperatura = 20;
 if (temperatura >= 20) 
    { console.log("Hace calor!"); } // Resultado: "Hace calor!

// validando estructura de control if, con ejemplo de edad
 let edad = 18;
  if (edad >= 18) 
    { console.log("Eres mayor de edad"); } // Resultado: "Eres mayor de edad"

  // validando estructura de control if, con ejemplo de precio
  let dinero = 100;
   let precio = 50;
    if (dinero >= precio) 
        { console.log("Puedes comprar el producto"); } // Resultado: "Puedes comprar el producto"

    // validando estructura de control if, con ejemplo de clave
    let password = "123456";
     if (password === "123456")
         { console.log("Acceso concedido"); } // Resultado: "Acceso concedido"

     
// validando estructura de control if, con ejemplo de edad
// validando estructura de control else, con ejemplo de votar
     let edad2 = 12;
      if (edad2 >= 14) 
        { console.log("Puedes votar"); } 
      else { console.log("Aún no puedes votar"); } // Resultado: "Aún no puedes votar"

      // validando estructura de control if, con ejemplo de numeros par he impar
      // validando estructura de control else, con ejemplo de numeros par he impar
      let numero = 6; 
      if (numero % 2 === 0) 
        { console.log("Es par"); } 
      else { console.log("Es impar"); } // Resultado: "Es impar"

      // validando estrucutura de control if else anidado
      let calificacion = 93; 
      if (calificacion >= 90) 
        { console.log("Excelente - A"); } 
      else if (calificacion >= 80) 
        { console.log("Muy bueno - B"); }
       else if (calificacion >= 70) 
        { console.log("Bueno - C"); } 
       else if (calificacion >= 60) 
        { console.log("Suficiente - D"); }
        else { console.log("Insuficiente - F"); } // Resultado: "Muy bueno - B"

for (let i = 7; i <= 10; i++) 
{console.log("Número: " + i); } // Resultado: // Número: 1 // Número: 2 // Número: 3 // Número: 4 // Número: 5

for (let i = 8; i <= 10; i++) 
    { console.log(`1000 x ${i} = ${1000 * i}`); } // Resultado: Tabla del 5

let frutas = ["manzana", "banana", "naranja"]; 
for (let i = 1; i < frutas.length; i++) 
    { console.log(frutas[i]); } // Resultado: manzana, banana, naranja}

for (let i = 10; i >= 3; i--)
     { console.log("Cuenta atrás: " + i); } console.log("¡Despegue!");

let frutas2 = ["manzana", "banana", "naranja"]; 
for (let i = frutas2.length -1; i>=0; i--) 
    { console.log(frutas2[i]); } // Resultado: manzana, banana, naranja}

// FOR...OF (para recorrer valores) 
let colores = ["rojo", "verde", "azul"];
 for (let color of colores) { console.log(color); }
  // FOR...IN (para recorrer propiedades) 
  let persona = {nombre: "Juan", edad: 25, ciudad: "Madrid"}; 
  for (let propiedad in persona) { console.log(propiedad + ": " + persona[propiedad]); }