//  Sin parámetros
const despedir = () => "¡Adiós!";

//  Un solo parámetro (paréntesis opcionales)
const cuadrado = x => x * x;
const cuadradoConParentesis = (x) => x * x;

//  Múltiples parámetros
const dividir = (a, b) => a / b;

//  Cuerpo de función con múltiples líneas
const procesarLista = (lista) => {
  const incrementados = lista.map(item => item + 10);
  const mayores = incrementados.filter(item => item > 20);
  return mayores;
};

//  Retorno de objeto (requiere paréntesis)
const crearLibro = (titulo, autor) => ({
  titulo: titulo,
  autor: autor,
  disponible: true
});

// 👇 Llamadas de prueba
console.log(despedir());
console.log(cuadrado(5));
console.log(cuadradoConParentesis(8));
console.log(dividir(20, 5));
console.log(procesarLista([5, 12, 18, 25]));
console.log(crearLibro("Cien años de soledad", "Gabriel García Márquez"));


//  Ejemplo 2: función tradicional vs flecha
function potencia(base, exponente) {
  return base ** exponente;
}

const potenciaFlecha = (base, exponente) => base ** exponente;

console.log(potencia(2, 3));        // 8
console.log(potenciaFlecha(3, 2));  // 9


//  Ejemplo 3: map, filter, reduce
const edades = [12, 17, 20, 25, 30];

const mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log("Mayores de edad:", mayoresDeEdad);

const edadesAlCuadrado = edades.map(e => e * e);
console.log("Edades al cuadrado:", edadesAlCuadrado);

const sumaEdades = edades.reduce((acc, e) => acc + e, 0);
console.log("Suma de edades:", sumaEdades);


//  Ejemplo 4: hoisting
console.log(funcionClasica()); // "Soy la función clásica"

function funcionClasica() {
  return "Soy la función clásica";
}

const funcionFlechaHoisting = () => "Soy la función flecha";
console.log(funcionFlechaHoisting()); // "Soy la función flecha"


//  Ejemplo 5: this en objetos
const carro = {
  marca: "Toyota",
  mostrarMarca: function() {
    console.log("Marca del carro:", this.marca);
  }
};

carro.mostrarMarca(); // "Marca del carro: Toyota"

const marcaSeparada = carro.mostrarMarca;
marcaSeparada(); // "Marca del carro: undefined" (this se pierde fuera del objeto)
