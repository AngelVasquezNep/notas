FUNDAMENTOS DE JAVA SCRIPT

ECMAScript6 {
	Se paso de usar var a:

	const

	solo puede asignarse en su declaracion, y no puede ser modificada.

	let

	no puede ser accesible más alla de su scope.
}

Uso de variable dentro de string{
	console.log(`el area de un triangulo es: ${5*7/2}`)

	el area de un triangulo es: 17.5
}

// Si se introduce "alt gr + }" da:
// Si usamos esas comillas podemos introducir script dentro de un texto, en este caso con ayuda de ${}

let base = 7;
let height = 3;

console.log(`el área de un triangulo de ${base} y altura ${height} es: ${base * height / 2}`);

Uso de function

let base = 7;
let height = 3;

function triangleArea(base, height){
	return base * height / 2
}

console.log(`el área de un triangulo de ${base} y altura ${height} es: ${triangleArea(base, height)}`);



// Uso de funcion ECMA6, (arrow function);{
	A una variable le podemos asignar una funcion

	Adicional, si es solo un comando de funcion la que vamos a ejecutar, podemos escribirlo todo en una sola linea, y quitar el "return".

	let base = 7;
	let height = 3;

	let triangleArea = (base, height) => base * height / 2;

	console.log(`el area de un triangulo de ${base} y altura ${height} es: ${triangleArea(base, height)}`);

	Podemos cambiar let por const en la funcion ya que SIEMPRE sera una funcion:

	const triangleArea = (base, height) => base * height / 2;
}
 
let radio = 5;
let areaCirc = (radio) => Math.PI*Math.pow(radio,2);


CLASE 2 	¿Quienes pueden pasar a ver una pelicula?

const starWars7 = "Star Wars: El despertar de la fuerza";
const pgStarWars7 = 13;

const nameAngel = "Ángel";
const ageAngel = 24;

const nameDani = "Dani";
const ageDani = 12;

function canWatchStarWars7(name, age, isWithAdult){
	if (age>=pgStarWars7){
		console.log(`${name} puede pasar a ver ${starWars7}`);
	}
  else if (isWithAdult){
	  console.log(`${name} puede pasar a ver ${starWars7}.
    Aunque su edad es ${age}, se encuentra en compañia de un adulto.`)
	}
  else {
		console.log(`${name} no puede pasar a ver ${starWars7}.
		Tiene ${age} años y necesita ${pgStarWars7} de edad`);
	}
}

canWatchStarWars7(nameAngel, ageAngel);
canWatchStarWars7(nameDani, ageDani);


CLASE 3 INVERTAR UN IDIOMA MANIPULANDO STRING - CONDICIONALES


 Cuando usamos un function que va a manipular texto y que ese texto no nos importa mucho su significado, se usa str dentro de function

 Cuando manipulamos string estos no se modifican, por ello se tienen que agregar a otra variable para que esa nueva variable sea la que guarde los cambios


              METODOS DE LA CLASE


 El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada. {}

 El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.

 The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

 El método slice() extrae una sección de una cadena y devuelve una cadena nueva.

 La propiedad length representa la longitud de una cadena.

 The Math.round() function returns the value of a number rounded to the nearest integer. (nearest integer = el entero más cercano)

 Pega las funciones en la consola y recordaras que es el split y el join...{
}
"sacha".split("");
(5) ["s", "a", "c", "h", "a"]
"sacha".split("").reverse();
(5) ["a", "h", "c", "a", "s"]
"sacha".split("").reverse().join("");
"ahcas"

 El método charAt() de String devuelve el carácter especificado de una cadena.


 REGLAS DE PLATZO

 REGLA 1: Si la palabra termina en "ar", se le quitan esos dos caracteres
 REGLA 2: Si la palabra inicia con Z, se le añade "pe" al final
 REGLA 3: Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
 REGLA 4: Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas




function platzom(str){
	let translation = str;

	if(str.toLowerCase().endsWith("ar")){
		translation = str.slice(0, -2); // Devuelveme desde la primera letra hasta dos antes de la ultima.
	}
	if (str.toLowerCase().startsWith("z")){
		translation = translation + "pe";
	}
		const length = translation.length; // La propiedad length representa la longitud de una cadena.
	if (length >= 10){
		const firstHalf = translation.slice(0, Math.round(length/2));
		const secondHalf = translation.slice(Math.round(length/2)); //si no le ponemos hasta donde, lo entiende que debe ser hasta el final
		translation = firstHalf + "-" + secondHalf;
	}
	const reverse = (str) => str.split("").reverse().join("");

	function minMay(str) {
		const length = str.length;
		let translation = "";
		let capitalize = true;
		for (let i = 0; i < length; i++){
			const char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str.toLowerCase() == reverse(str.toLowerCase())){
		return minMay(str);
	}

	return translation;
}

console.log(platzom("Programar"));
console.log(platzom("Zorro"));
console.log(platzom("Zarpar"));
console.log(platzom("Abecedarios"));





CLASE 4 CUANTOS KMS CORRE UNA PERSONA EN PROMEDIO - CICLOS FOR



NOTAS
En el array, para evaluar el total de sus elementos, usamos length

Metodos usados en CLASE
variable.toFixed(2); con esto hacemos que el resultado de algo se imprima con solo 2 decimales. (redondear a (2) decimales)


const nombre = "Angel";
const dias = [
	"lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo"
];

const totalDias = dias.length;
// Sacha dice que el tamaño de un array se suele poner como "const l = array.length"
function correr(){
	const min = 5;
	const max = 15;
	return Math.round(Math.random() * (max-min)) + min;
}

let totalKms = 0;
for (let i = 0; i < totalDias; i++){
	// const kms = correr();
	totalKms += correr();
	console.log(`El día ${dias[i]} ${nombre} corrió ${correr()}kms`)
}
const promedioKms = (totalKms/totalDias).toFixed(2);
console.log(`En esta semana ${nombre} corrió un total de ${totalKms}kms, siendo en promedio de ${promedioKms}kms por día`);





CLASE 5 GOKU VS SUPERMAN - CICLOS WHILE//(MIENTRAS QUE ALGO SEA VERDADERO)


let vidaGoku = 100;
let vidaSuperman = 100;

const minPower = 5;
const maxPower = 12;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;

const calcularGolpe =  () => Math.round(Math.random() * (maxPower - minPower)) + minPower;

let round = 0;

white(ambosSiguenVivos){
	round++;
	console.log(`Round ${round}`)
	const golpeGoku = calcularGolpe();
	const golpeSuperman = calcularGolpe();

	if (golpeGoku > golpeSuperman){
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
		vidaSuperman -= golpeGoku;
		console.log(`Superman queda en ${vidaSuperman} de vida`);
	} else {
		console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
		vidaGoku -= golpeSuperman
		console.log(`Goku queda en ${vidaGoku} de vida`);
	}
}

if (vidaGoku>0){
	console.log(`Gana Goku con una vida de ${vidaGoku}`);
} else {
	console.log(`Gana Superman con una vida de ${vidaSuperman}`);
}




CLASE 6 CUANTO TIEMPO PASO DESDE QUE NACI - FECHAS



 const nacimiento = new Date (año, mes -1, dia);
 const hoy = new Date; Java lo entiende como hoy

 METODOS
 El método getDay() devuelve el día de la semana de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día.



const nacimiento = new Date (1993, 02, 18);
const hoy = new Date;
const tiempoDeVida = hoy - nacimiento; // el resultado lo da en milisegundo. (1s = 1000mls)

const seg = tiempoDeVida/1000;
const min = seg / 60;
const horas = min / 60;
const dias = horas / 24;
const semanas = dias / 7;
const meses = semanas / 4.33;
const years = meses / 12;


const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

console.log(proximoCumple);

//para ver el resultado en español, contruimos un array



const diasSemana = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
]

console.log(diasSemana[proximoCumple.getDay()]);




CLASE 7 CALCULAR LA DISTANCIA ENTRE DOS PUNTOS - OBJETOS JS

 Metodos en clase
 The Math.pow() function returns the base to the exponent power, that is, base exponent.
 The Math.sqrt() function returns the square root of a number




const p1 = {
	x:0,
	y:4
}

const p2 = {
	x: 3,
	y: 0
}

function distancia(p1, p2){
	const distX = p1.x - p2.x;
	const distY = p1.y - p2.y;
	return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
}

console.log(distancia(p1, p2));
console.log(distancia(p1, {x:20, y:-7}));

 Podemos agregar otro pundo siempre y cuando pongamos los elementos necesarios dentro del mismo, como {x:20, y:-7}





CLASE 8 AGREGAR METODOS PARA MOVER PUNTOS - OBJETOS AVANZADO EN JS



 Para usar un function dentro de un objeto, se tiene que hacer de la siguiente forma=> p1.moverEnX(10);

const p1 = {
	x:0,
	y:4,
	moverEnX(x) {this.x += x}, //Esto es una funcion
	moverEnY(y) {this.y += y}
}


const p2 = {
	x: 3,
	y: 0,
	moverEnX(x) {this.x += x},
	moverEnY(y) {this.y += y}
}

function distancia(p1, p2){
	const distX = p1.x - p2.x;
	const distY = p1.y - p2.y;
	return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)).toFixed(2);
}

console.log(distancia(p1, p2));




CLASE 9 DEFINIENDO CLASES - PROTOTIPOS EN JAVASCRIPT



 Cuando escribimos "new" "nombre de la funcion" se crea un nuevo objeto/clase/prototipo con propiedades(variables) y metodos(funciones).


function Punto(x, y){
	this.x = x
	this.y = y
}

Punto.prototype.moverEnX = function moverEnX(x) {
	this.x += x
};
Punto.prototype.moverEnY = function moverEnY(y) {
	this.y += y
};
Punto.prototype.distancia = function distancia(p) {
	const distX = this.x - p.x
	const distY = this.y - p.y
	return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)).toFixed(2);
}

const p1 = new Punto (0, 4);
const p2 = new Punto (3, 0);
const p3 = new Punto (5, -1);

console.log(p1.distancia(p2));
console.log(p2.distancia(p3));
console.log(p3.distancia(p1));







CLASE 10 DEFINIENDO LA CLASE PUNTO - OBJECT.CREATE EN JS



const Punto = {
	init: function (x, y){
		this.x = x
		this.y = y
	},
	moverEnX: function moverEnX(x){
		this.x += x
	},
	moverEnY: function moverEnY(y){
		this.y += y
	},
	distancia: function distancia(p){
		const distX = this.x - p.x
		const distY = this.y - p.y
		return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)).toFixed(2);
	}
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto)
const p3 = Object.create(Punto)

p1.init(0, 4)
p2.init(3, 0)
p3.init(5, -1)

console.log(p1.distancia(p2));
console.log(p2.distancia(p3));
console.log(p3.distancia(p1));




CLASE 11 DEFINIENDO LA CLASE PUNTO - CLASS EN JS SINTAXIS SUGAR


class Punto {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	moverEnX(x){
		this.x += x
	}
	moverEnY(y){
		this.y += y
	}
	distancia(p){
		const distX = this.x - p.x
		const distY = this.y - p.y
		return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)).toFixed(2);
	}
}


const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);


console.log(p1.distancia(p2));
console.log(p2.distancia(p1));




CLASE 12 SCOPE DE LAS VARIABLES



Scope global: Son variables o funciones que se declaran en el cuerpo del codigo y que pueden ser accesibles desde cualquier parte

Scope Local: estan declaradas dentro de una funcion o propiedad.



En el ejemplo, nombre = "Angel", sin embargo cuando la pasamos como parametro en saludar(nombre) y la llamamos con saludar("Luis"), ese nombre "Luis" esta en un scope local.


var nombre = "Angel";

function saludar(nombre){
	console.log(`Hola ${nombre}`);
}

saludar("Luis");


 El scope de la funcion siguiente se "contamina" si usamos "var i = 0" ya que aunque la iteracion acaba, aun tenemos acceso al valor de i:

function saludar10(nombre){
	for (let i = 0; i < 10; i++){
		console.log(`Hola ${nombre}`)
	}
	console.log(`El valor de i es: ${i}`)
}

saludar10("Angel")


 Para evitarlo, en vez de var, usaremos let, esa variable funciona solo en el bloque de codigo donde fue declarada, nada.

 Si un valor se va a mantener fijo, debemos usar const, por ejemplo
 const nombre = "Angel"






CLASE 13 OPERACIONES CON ARRAYS



 Supongamos que queremos sumar distintos numeros, usariamos una funcion como la siguiente... pero seria incorrecto por que solo funcionaria para 5 elementos, pero si deseamos 8, 10 o 2, seria un caos...

function suma(n1, n2, n3, n4, n5){
	return n1 + n2 + n3 + n4 + n5
}
suma(2, 3, 4, 3, 1);

spread operator
 para tener parametros variables (cantidad) usamos (...nombreQueQuerramos) 
 dentro del parametro de la funciona
 Esto hara que ...numeros nos regrese un array

 The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.{}

function suma(...numeros){
	console.log(numeros)
	let acumulador = 0
	for (let i = 0; i < numeros.length; i++){
		acumulador += numeros[i]
	}
	return acumulador
}

console.log(suma(2, 3, 4, 5, 6))

// Usando metodo reduce()

function suma(...numeros){
	return numeros.reduce(function(acumulador, numero){
		acumulador += numero
		return acumulador
	}, 0)
}

console.log(suma(2, 3, 4, 5, 6))



array.reduce recibe 3 paremetros: 1. acumulador 2. itera con cada campo del array 3. un indice

const suma = (...numeros) => numeros.reduce((acum, indi) => acum + indi);
const resta = (...numeros) => numeros.reduce((acum, indi) => acum - indi);
const multimplicacion = (...numeros) => numeros.reduce((acum, indi) => acum * indi);

array.map recibe una funcion que se va a ejecutar por cada uno de los elementos:

const sumarCons = (...numeros) => numeros.map(numero => numero + 2);
const dobles = (...numeros) => numeros.map(numero => numero*2);

array.filter ejecuta una condicional, evalua si la sentencia es falsa o verdadera y retorna solo los elementos verdaderos

const mayor = (...numeros) => numeros.filter( numero => numero < 5)
const menor = (...numeros) => numeros.filter( numero => numero > 5)
const iguales = (...numeros) => numeros.filter( numero =>  numero == 5)
const pares = (...numeros) => numeros.filter( numero => numero % 2 == 0)

[1,2,3,4,5,6].filter(a=>a%2 == 0)


 ["lunes", "martes", "miercoles"].forEach(function(dia){
	console.log(dia)
})
Por cada uno de los elementos hará una funcion.



{* NOTA agregada posterior al curso *}

Uso de forEach

const $elementosDelDom = Array.from( document.querySelectorAll('.claseQueQuieroObtener') )

$elementosDelDom.forEach((elemento)=>{
  elemento.addEventListener('click', ()=>{
    console.log("UNA ACCION X")
  })
})










CLASE 14 ENTIENDE LOS CLOSURES DE JS



function saludarFamilia(apellido){
	return function saludarMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")

saludarPerez("Dario")
saludarPerez("Marco")
saludarPerez("Julieta")



function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}

let suma5 = creaSumador(5);
let suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12




En este ejemplo, hemos definido una función creaSumador(x) que toma un argumento único x y devuelve una nueva función. Esa nueva función toma un único argumento y, devolviendo la suma de x + y.

En esencia, creaSumador es una fábrica de función: crea funciones que pueden sumar un valor específico a su argumento. En el ejemplo anterior utilizamos nuestra fábrica de función para crear dos nuevas funciones: una que agrega 5 a su argumento y otra que agrega 10.

suma5 y suma10 son ambos closures. Comparten la misma definición de cuerpo de función, pero almacenan diferentes entornos. En el entorno suma5, x es 5. En lo que respecta a suma10, x es 10.



function makePrefixer(pre){
	return function (palabra){
		console.log(`${pre}${palabra}`)
	}
}

const prefijoRe = makePrefixer("re")
const prefijoPro = makePrefixer("pro")


prefijoPro("Bueno")
prefijoRe("Malo")


// Para que un array le pongamos prefijos
let pala = ["a","b","c"]
let sopa = ["s", "o","p","a"]

const makePref = (...palabras) => palabras.map(palabra =>
  `re${palabra}`)

console.log(makePref(...pala))
console.log(makePref(...sopa))



----------------------------
Una funcion que retorna un objeto con metodos


function algo(){
  return {
    algoMas(){
      console.log("Ango más")
    },
    algoMenos(){
      console.log("Ango menos")
    }
  }
}

const algito = algo()
algito.algoMas()
algito.algoMenos()







CLASE 15 ESTRUCTURA DEL LENGUAJE

A una variale le podemos asignar valores, strings, FECHAS

let sacha = "Sacha"
let sacha = 26
let sacha = new Date()

O agregarles funciones

let sacha = function saludar("nombre"){
	console.log("hola ${nombre}")
}

U OBJETOS

let angel = {
  nombre: "Angel",
  apellido: "Vasquez",
  edad: 26,
  saludar: function saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
  }
}


 Palabras reservadas que no se pueden usar para declarar variables: break, delete, do, function(){}, return, var, with, etc.





CLASE 16 THIS, _THIS Y FUNCTIONS

 En el primer intento nos aparece error de "nombre" se debe a que "this.nombre" esta dentro de otra funcion que se llama .forEach, para arreglarlo, colocamos const _this = this y a nombre le ponemos "_this.nombre"
 O podemos usar una arrow function, por defecto usan el this que esta fuera de su scope


O podemos usar arrow functions
listarAmigos(){
	this.amigos.forEach((amigo) => {
		console.log("...")
	})
}


class Persona {
	constructor(nombre, amigos = []){
    this.nombre = nombre
    this.amigos = amigos
	}
	listarAmigos(){
		const _this = this
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
		})
	}
}

const dani = new Persona("Dani", ["Yare", "Luisito"])
const angel = new Persona("Angel", ["dani", "Cesar"])









Otro ejemplo que use para entender this

--------------------------BIND--------------------------------

function arroz(){
  console.log(this)
	let camisa = () => {
		console.log(`El otro costo ${this.costo}`)
	}
	camisa()
}

let papas = {
  costo: "12",
  sabor: "jalapeño"
}
let jamon = {
  costo: "20",
  sabor: "cerdito"
}
// arroz.call(papas)

let arrozPapas = arroz.bind(papas)
let arrozJamon = arroz.bind(jamon)

arrozPapas()
arrozJamon()

--------------------------CALL--------------------------------


function algo(){
	console.log(this)
	return {
		algoMas: () => {
			console.log(this.arroz)
			console.log("Algo más")
		},
		algoMenos: () => {
			console.log("Ango menos")
			console.log(this.papas)
		}
	}
}

const objetito = {
	arroz: "arrocito",
	papas: "papitas"
}

const alguito = algo()
alguito.algoMas()
alguito.algoMenos()

algo.call(objetito).algoMas()
algo.call(objetito).algoMenos()












CLASE 17 FUNCTION BIND


Bind nos va a retornar otra funcion con el CONTEXTO cambiado de acuerdo al primer parametro que le pasemos a bind, y tambien sirve para dejar "pegados" a la funcion nueva que nos recibe, nuevos parametros


class Toggable {
	constructor(el){
			this.el = el
			this.el.innerHTML = "Off"
			this.activated = false
			this.el.addEventListener("click", this.onClick.bind(this))
		}
	onClick(){
			this.activated = !this.activated
			this.toggleText()
		}
	toggleText(){
			this.el.innerHTML = this.activated ? "On" : "Off"
		}
}


const button = document.getElementById("boton")
const miBoton = new Toggable(button)




function saludar(nombre, apellido){
	console.log(`Hola ${nombre} ${apellido}`)
}

saludar("Angel", "Vasquez")

let saludarVasquez = saludar.bind(null, "Angel")
saludarVasquez("Gomez")
saludarVasquez("Perez")







CLASE 18 CALL Y APPLY

Con call asignamos el this que necesitamos o queremos que tome, ya que si no lo especificamos y lo llamamos como en this.nombre, se ira a buscarla en el DOM, y tendriamos que asignarlo ahi con windows.nombre = "Angel", para evitar este problema, usamos nombredelafunction.call(contextodethis, parametros de la funcion)

function saludar(veces){
	for (let i=0; i<veces; i++){
		console.log(`hola ${this.nombre} ${this.apellido}`)
	}
}

const angel = {
	nombre: "Angel",
	apellido: "Vasquez"
}
const dani = {
	nombre: "Daniel",
	apellido: "Vasquez"
}

saludar(3) // nos dara como resultado "hola undefined undefined"

saludar.call(angel, 3)
saludar.call(dani, 3)

// si usamos apply, los parametros de la funcion los debemos escribir como si fueran un ARRAYS

saludar.apply(angel, [3,])






CLASE 19 ECMASCRIPT EL ESTANDAR EN EL QUE SE BASA JS


https://tc39.github.io/ecma262/


CLASE 20 BABEL

Nos ayuda a hacer compatible nuestro codigo escrito en ECMAScript 5 o 6 para que puedan correr en TODOS los navegdores

https://babeljs.io

Tenemos que tener instalado node.js



CLASE 21 DISTINTAS FORMAS DE ESCRIBIR UN MODULO



-Un modulo es un paquete de codigo, que tiene un poco de codigo fuente. Como Angular, jquery, etc. o algo más pequeño que pueda ayudar a cumplir alguna caracteristica en especifico.
-Encapsulamiento
-Dependencias

-Con una funcion = no sirve, es complejo y obsoleto
-CommonJS = lo empaqueta y es funcional pero la carga no es asincrona.
-AMD
-Modulos de ECMAScript 2015: asincrono
-System.js: puede ser asincrono o sincrono


1. SCOPE: Es un callback que se hace dentro del mismo documento, es obsoleto por que no podriamos llamarlo desde otro archivo, o lo haría muy complicado.

2. COMMONJS: Podemos exportar una función, algún objeto o lo que querramos. Por ejemplo:

	//triangle.js

		module.exports = function area(base=0, height=0){
			return base*height/2
	}

	//otroAcrhivo.js

		const triangle = require('./triangle.js')

		const base = 5
		const height = 7
		console.log(`El área de un triagulo de base ${base} y altura ${height} es ${triangle(base, height)}`)

3. AMD

Pueden ser asincrono

// triangle.js
define('triangle', function (){
	return function triangle(base =0, height=0){
		return base * height / 2
	}
})

//otroAcrhivo.js
require('./triangle.js', function(triangle){
	const base = 5
	const height = 7
	console.log(`El área de un triagulo de base ${base} y altura ${height} es ${triangle(base, height)}`)
})


4. ES 2015

	//square.js

		import triangle from 'triangle'

		export function area(x){
			return x * x
		}

		export function perimeter(x){
			return 4*x
		}

		export function diagonal(x){
			return triangle.hypotenuse(x,x)
		}

	//otroAcrhivo.js

		import square from 'square'

		const side = 7
		console.log(`La diagonal de un cuadrado de ${side}x${side} mide ${square.diagonal(side)}`)



5. SYSTEM.JS

	Lo utiliza Angular
	Es uniersal, puede requerirse todo tipo de modulos, puede ser sincronos o asincronos, para usarlo en el navegador debemos requerir un archivo para poder utilizar la palabra system

	<script type="text/javascript" src="system.config.js"></script>

	<script>
		//...
		System.config({
			paths: paths,
			map: map,
			packages: packages,
			transpiler: "ts",
			typescroptOptions:{
				tsconfig: true
			},
			meta: {
				typescript:{
					exports: "ts"
				}
			}
		})

		System
			.import('app')
			.then(()=>{/*code*/})
			.catch((err)=>{/*code*/})





CLASE 22 NO GENERES UN CUELLO DE BOTELLA EN LOOP



Video: What the heck is the event loop anyway?
https://www.youtube.com/watch?v=8aGhZQkoFbQ


JS ejecuta una sola linea de codigo a la vez, por ello es importante que las tareas que asignamos esten bien organizadas para que no tarden tanto.

Las funciones time out reciben dos paremetros, la funcion que queremos ejecutar y el tiempo en milisegundo que queremos que pase antes de que se ejecute.

Recuerda que el navegador tiene una pila de ejecusion y que los procesos que delega con setTimeout se van a la cola de tareas, pila de ejecision se vacia, se va a la cola de tareas y trae los procesos que haga falta ejecutar.

setTimeout(function () {
	//codigo a ejecutar
}, 1000);

En este ejemplo puedo ver que aunque "mitad" esta a la mitad, la funcion setTimeout hace que la funcion mitad pase a la lista de tareas del navegador y por eso aparece al final.
En el console.log("mitad") debemos meter la funcion que más pese, la que sea algun request, libreria, etc. que quite demasiado tiempo.

console.log("Hola")
setTimeout(function () {
  console.log("mitad")
}, 0);
console.log("Bye")
console.log("Bye")
console.log("Bye")
console.log("Bye")




Este ejemplo es de setInterval, pero es divertido:

const angel = "Angel Vasquez".split("")
//const angel = prompt("Hola, cúal es tu nombre?")

let i = 0
const interval = setInterval(()=>{
	if(i<angel.length){
		console.log(angel[i])
		i++
	}else{
		console.log("Hola")
		clearInterval(interval)
	}
},1000)






CLASE 23 CALLBACKS DE JS


Las operaciones que son sincronas se deben delegar en lo más que nos sean posibles para no trabar la cola de ejecucion de JS

La funcion setTimeout recibe dos parametros, 1) la funcion a la que se llamará (callback) y el tiempo que pasará antes de que sea llamada:
setTimeout(callback, time).

let time = 5000
setTimeout(function callback(){
	console.log(time/1000)
}, time)

Hay que delegar lectura de archivos, request externos.



CLASE 24 CALLBACK A UN SERVIDOR EXTERNO

Hiciste un ejercicio de Game of Trones




De forma didactica se usara la pagina swapi.co
Tambien se uso codepen.io

function get(URL, callback){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		const DONE = 4 // Solicitud terminada y respuesta lista
		const OK = 200 // The request is OK (this is the standard response for successful HTTP requests)
		if (this.readyState === DONE) {
			if(this.status === OK){
				//Todo OK
				callback(null, JSON.parse(this.responseText))
			}else {
				//Hubo un error
				callback(new Error(`Se produjo un error al realizar el request ${this.status}`))
			}
		}
	}
	xhr.open('GET', URL);
	xhr.send(null);
}
/* Funcion para tratar el error */
function handleError(err){
	console.log(`Request failed: ${err}`)
}
/*llamada al metodo */
get('https://www.swapi.co/api/people/1/', function onResponse(err, luke){
	if(err) return handleError(err)
	/* Para traer el mundo */
	get(luke.homeworld, function onHomeworldResponse(err, homeworld){
		if(err) return handleError(err)
		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})
	console.log(`Request succeded`)
	console.log('luke', luke)
})

(){
Este ejemplo nos llevará a un problema del CALLBACK HELL ya que dentro de cada request haríamos otro request, por ejemplo, hicimos otro request para conocer el planeta donde vivia Luke, pero si tambien queremos saber su especie, sus vehiculos o lo que sea, seran muchas llamadas anidadas.





Luego aplicamos estos dos metodos:

xhr.open('GET', URL);
xhr.send(null);

Ambos son métodos del objeto XMLHttpRequest(), usamos estos métodos para enviar la solicitud al servidor. con open() especificamos la solicitud. Este método recibe tres parametros que son el método de envío (GET o POST) , la URL y un tercer parametro que sera true o false dependiendo de si queremos que la solicitud sea asincrona o sincrona respectivamente.

En el caso del ejercicio solo le pasamos dos parametros, el primero, GET, y el segundo sera la URL, (valor que le pasaremos cuando llamemos a la funcion get())

en cuanto a send(), este método se usa para enviar la solicitud al servidor, si la solicitud se hace por “GET” entonces este método no llevara argumentos.





OTRO EJEMPLO:

En la API que tengo por default, obtengo a todos los personajes de GOT, en particular, "Daenerys Targaryen" es el got[387]

let got
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		got = JSON.parse(xhttp.responseText)
		console.log(got)
	}
};

xhttp.open("GET", "https://api.got.show/api/characters/", true);
xhttp.send();



EXAMPLE EXPLAIDED

The first line in the example above creates an XMLHttpRequest object:

const xhttp = new XMLHttpRequest();

The onreadystatechange property specifies a function(){...} to be executed every time the status of the XMLHttpRequest object changes

xhttp.onreadystatechange = function(){...}

When readyState property is 4 and the status property is 200, the response is ready:

if (this.readyState == 4 && this.status == 200)
The responseText property returns the server response as a text string.

The text string can be used to update a web page:

document.getElementById("demo").innerHTML = xhttp.responseText;




VALORES:

0: Solicitud iniciada
1: Conexión al servidor establecida
2: Solicitud recibida
3: Solicitud de procesamiento
4: Solicitud terminada y respuesta lista




HTTP STATUS MESSAGES


1xx: Information
Message:	Description:
100 Continue	- The server has received the request headers, and the client should proceed to send the request body
101 Switching Protocols - The requester has asked the server to switch protocols              {}
103 Checkpoint	- Used in the resumable requests proposal to resume aborted PUT or POST requests

2xx: Successful
Message:	Description:
200 OK	- The request is OK (this is the standard response for successful HTTP requests)
201 Created	- The request has been fulfilled, and a new resource is created
202 Accepted	- The request has been accepted for processing, but the processing has not been completed
203 Non-Authoritative Information	- The request has been successfully processed, but is returning information that may be from another source
204 No Content	- The request has been successfully processed, but is not returning any content
205 Reset Content	- The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view
206 Partial Content	- The server is delivering only part of the resource due to a range header sent by the client

3xx: Redirection
Message:	Description:
300 Multiple Choices	- A link list. The user can select a link and go to that location. Maximum five addresses
301 Moved Permanently	- The requested page has moved to a new URL
302 Found	- The requested page has moved temporarily to a new URL
303 See Other	- The requested page can be found under a different URL
304 Not Modified	- Indicates the requested page has not been modified since last requested
306 Switch - Proxy	No longer used
307 Temporary Redirect	- The requested page has moved temporarily to a new URL
308 Resume Incomplete	- Used in the resumable requests proposal to resume aborted PUT or POST requests

4xx: Client Error
Message:	Description:
400 Bad Request	- The request cannot be fulfilled due to bad syntax
401 Unauthorized	- The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided
402 Payment Required	- Reserved for future use
403 Forbidden	- The request was a legal request, but the server is refusing to respond to it
404 Not Found	- The requested page could not be found but may be available again in the future
405 Method Not Allowed	- A request was made of a page using a request method not supported by that page
406 Not Acceptable	- The server can only generate a response that is not accepted by the client
407 Proxy Authentication Required	- The client must first authenticate itself with the proxy
408 Request Timeout	- The server timed out waiting for the request
409 Conflict	- The request could not be completed because of a conflict in the request
410 Gone	- The requested page is no longer available
411 Length Required	- The "Content-Length" is not defined. The server will not accept the request without it
412 Precondition Failed	- The precondition given in the request evaluated to false by the server
413 Request Entity Too Large	- The server will not accept the request, because the request entity is too large
414 Request-URI Too Long	- The server will not accept the request, because the URL is too long. Occurs when you convert a POST request to a GET request with a long query information
415 Unsupported Media Type	- The server will not accept the request, because the media type is not supported
416 Requested Range Not Satisfiable	- The client has asked for a portion of the file, but the server cannot supply that portion
417 Expectation Failed	- The server cannot meet the requirements of the Expect request-header field

5xx: Server Error
Message:	Description:
500 Internal Server Error	- A generic error message, given when no more specific message is suitable
501 Not Implemented	- The server either does not recognize the request method, or it lacks the ability to fulfill the request
502 Bad Gateway	- The server was acting as a gateway or proxy and received an invalid response from the upstream server
503 Service Unavailable	- The server is currently unavailable (overloaded or down)
504 Gateway Timeout	- The server was acting as a gateway or proxy and did not receive a timely response from the upstream server
505 HTTP Version Not Supported	- The server does not support the HTTP protocol version used in the request
511 Network Authentication Required	- The client needs to authenticate to gain network access












CLASE 25 PROMESAS

El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

Las promesas ya están soportadas nativamente.
Una Promesa se encuentra en uno de los siguientes estados:

- pendiente (pending): estado inicial, no cumplida o rechazada.
- cumplida (fulfilled): significa que la operación se completó satisfactoriamente.
- rechazada (rejected): significa que la operación falló.

Las promesas reciben como parametro una funcion que a su vez recibe dos parametros, resolve y reject, ambas son funciones, .then y .catch respectivamente.



const promise = new Promise(function(resolve, reject){
	setTimeout(resolve, 1000)
	//En caso de que querramos llamar a reject, recordad ponerlo en una funcion, para que no se llame de inmediato
	setTimeout(()=>reject(new Error(`Todo mal`)), 4000)
})

promise
	.then(function(){
		console.log("lo logramos")
		//Si la ejecion se cumplio con exito
	})
	.then(()=>{
		console.log("Lo logramos, por segunda vez"))
		//Si tenemos otro .then, también se ejecutara
	}
	.catch(err => {
		console.log(err)
		//si la ejecion no se pudo cumplir
	})

	Si dentro de un .then("new Promese") retornamos una promesa, podemos encadenarle otro .then:

promise2
	.then(()=>new Promise)
	.then(()=>console.log("Yo soy el then del then"))

El objeto promesa (en nuestro caso "promise") debe tener dos metodos más que son .then y .catch los cuales reciben como parametro la funcion que deben ejecutar. Adicional, catch recibe como parametro el nuevo error (obviamente hay que crearla dentro de la nueva promesa por que si no se hace así, no recibira nada)



CON EL EJEMPLO DE LUKE SKYWALKER


function get(URL){
	//New Promise recibe una funcion
	return new Promise((resolve, reject)=>{
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			const DONE = 4
			const OK = 200
			if (this.readyState === DONE) {
				if(this.status === OK){
					//Todo OK
					resolve(JSON.parse(this.responseText))
				}else {
					//Hubo un error
					reject(newError(`Se produjo un error al realizar el request ${this.status}`))
				}
			}
		}

		xhr.open('GET', URL);
		xhr.send(null);
	})
}

/* Funcion para tratar el error */
function handleError(err){
	console.log(`Request failed: ${err}`)
}

let luke

// get ahora es un objeto de tipo promesa
get('http://www.swapi.co/api/people/1/')
	.then(function (response){
		// Lo que llega por parametro a response es el objeto JSON que obtuvimos del request
		luke = response
		return get(luke.homeworld)
	})
	.then((homeworld)=>{
		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})
	.catch((err)=> handleError(err))








CLASE 26 ASYNC-AWAIT



Metodo asincrono para hacer solicitudes
La funcion que querramos usar con este metedo le anteponemos async, tiene la siguiente estructura:


También usaremos fetch

El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar. Devuelve una Promise que resuelve en Response a esa petición, sea o no correcta.

let myObjeto
fetch("la URL")
	.then(el objeto que nos retorna la funcion fetch => elObjeto.json())
	.then(elObjetoRetornado)=>{
		myObjeto = elObjetoRetornado
	}
	.catch(err => {...})


El response.json() devuelve otra promesa



------------Con estas unicas lineas obtenemos en request----------------

let luke
fetch("https://swapi.co/api/people")
	.then(response=> response.json())
	.then(json=> luke = json)
	.then(()=> console.log(luke.results))
console.log(`Primer log ${luke}`)


Puse un log como resultado de una promesa para que cuando se completara el request se imprimiera, ya que el primer log aparece como undefined

------------------------------------------------------------------------




async function asincrona(){
	try{
		//Este es el codigo que se intenta ejecutar
		// los requerimientos que hagamos los tenemos que poner dentro de una variable y a su vez esos requerimientos les anteponemos un await para que sean ejecutados de forma asincrona
		const variable = await function quieroSerAsincrona()
	} catch (err){
		//Si sale mal
		handleError(err)
	}
}




function handleError (err){
	console.log(err)
	console.log("Request failed: ${err}")
}

async function getLuke(){
	try {
		const response = await fetch("https://swapi.co/api/people/1")
		const luke = await response.json()
		// console.log(luke)
		const responseHomeWorld = await fetch(luke.homeworld)
		luke.homeworld = await responseHomeWorld.json()
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)

	} catch (err) {
		handleError(err)
	}
}

getLuke()


NOTA DE INTERNET JavaScript permite asignar una función a cada uno de los eventos. De esta forma, cuando se produce cualquier evento, JavaScript ejecuta su función asociada. Este tipo de funciones se denominan "event handlers" en inglés y suelen traducirse por "manejadores de eventos"






CLASE 27 IMPLEMENTACION DE SET TIMEOUT

La funcion setTimeout recibe dos parametros, la funcion que queremos ejecutar y el tiempo en que queremos que se ejecute.



Clase JS con Leonidas

MODAL / Un mensaje que aparece como alert pero más bonito

Para crear mensajes que aparezcan y desaparezcan en nuestro innerHTML

setTimeout(function(){
  // Aqui podemos poner lo que nosotros querramos
	console.log("Hola")
}, 5000)





CLASE 28 IMPLEMENTACION DE SET INTERVAL EN JS





setInterval(que voy a hacer, cada cuanto tiempo debo hacerlo)



let x = 0
setInterval(function(){
	x++
	console.log(`Han pasado ${x} segundo`)
}, 1000)

Si queremos modificar parte del texto de (por ejemplo) un titulo h1, lo que debemos hacer es:

<h1 id="titulo">Han pasado 0 segundo<h1>

const timer = document.getElementById("titulo")
let contador = 0
//asignamos todo el setInterval a una variable
let tiempo = setInterval(function(){
	contador++
	timer.textContent = (contador == 1) ? `Ha pasado ${contador} segundo` : `Han pasado ${contador} segundos`
	//Si queremos detener el intervalo
	if(contador==5){
		clearInterval(tiempo)
	}
},1000)






----------------------------------------------------------------------------
---------------SUPER RELOJ CON PAUSA, PLAY Y RESET--------------------------
----------------------------------------------------------------------------

const object = {
  timer: 0,
  pausa: false,
  stop(){
    this.pausa = true
  },
  play(){
    this.pausa = false
  },
  reset(){
    this.timer = 0
    this.pausa = false
  }
}

const avanzar = setInterval(function(){
  if(this.pausa == false) {
    this.timer++
    console.log(this.timer)
  }
}.bind(object), 1000)

object.stop()
object.play()
object.reset()

----------------------------------------------------------------------------
----------------------------------------------------------------------------









CLASE 29 CANCELANDO EL TIMEOUT Y TIMEINTERVAL


clearTimeout y clearInterval reciben como parametro un timeout y un setInterval (respectivamente), por ello es que guardamos ambos en una variable y esa variable es la que pasamos por parametro


let timeOut = setTimeout(function(){
	console.log("Hola")
}, 5000)

clearTimeout(timeOut)

let timeInterval = setInterval(function(){
	console.log("Hola")
}, 1000)

clearInterval(timeInterval)





CLASE 30 CALLBACKS EN JS



Pasarle una funcion como parametro o argumento a otra funcion y que esa funcion se ejecute, eso es un CALLBACK, la cual se puede ejecutar de forma sincrona o asincrona

Aqui tenemos un ejemplo hecho por Leonidas donde nos explica como se usan los callbaks, él pone su agenda de la mañana y el tiempo que le toma cada actividad, en ese sentido, el setTimeout llama a una funcion despues de cierto tiempo (tiempo que Leonidas tarda en despertar, tomar la ducha, vestirse, etc.) despues de ese tiempo ejecuta una nueva actividad que es la actividad que sigue en su agenda...
El problema de anidar asi los callbacks es que son muy dificiles de leer y se genera algo que se llama callback Hell



<h1 id="agenda">Estoy despertando</h1>

const DESPERTAR = 3000;
const DUCHA = 2000;
const VESTIRSE = 2000;
const DESAYUNAR = 3000;
const PLATZI = 5000;
const $agenda = document.getElementById('agenda');
setTimeout(()=> {
	$agenda.textContent = 'Ahora me estoy duchando...';
	setTimeout(()=> {
		$agenda.textContent = 'Me estoy vistiendo...';
		setTimeout(() => {
			$agenda.textContent = 'Ahora estoy desayunando...';
			setTimeout(()=> {
				$agenda.textContent = 'Que lindo es estudiar en Platzi...';
				setTimeout(()=> {
					$agenda.textContent = 'Y javascript es mi lenguaje favorito <3';
				}, PLATZI)
			}, DESAYUNAR)
		}, VESTIRSE);
	}, DUCHA)
}, DESPERTAR)




CLASE 31 ELIMINANDO EL CALLBACK HELL USANDO PROMESAS EN JS


Son una forma de ejecutar codigo que puede ser sincrono o asincrono, que devuelve una respuesta si se ejecuto o no se ejecuto.





<h1 id="agenda">Estoy despertando</h1>

const DESPERTAR = 3000;
const DUCHA = 2000;
const VESTIRSE = 2000;
const DESAYUNAR = 3000;
const PLATZI = 5000;
const $agenda = document.getElementById('agenda');

// NOTA para Angel del futuro: Por si te confundes al ver las "mismas" variables (en const "despertar" = new Promise) te comento que vamos a usar las "mismas" variables pero en minusculas, ya que js detecta si son mayusculas o minusculas, por lo tanto son variables DIFERENTES

Se construye una nueva instancia de Promise, promise lleva como parametro una funcion, esa funcion lleva dos parametros que en este caso, son dos function:
-todo esta OK() // resolve // resolver
-todo esta mal() // rejec // rechazar

La nueva promesa va a llamar o a resolve o a reject dependiendo de alguna condicion (en nuestro ejemplo usaremos una condicion favorable). De igual forma la promesa puede ser sincrona o asincrona.

const despertar = new Promise(function (resolve, reject){
	setTimeout(()=>{
		resolve("Ahora me estoy duchando")
	}, DESPERTAR)
	// setTimeout(()=>{
	// 	reject("Ahora me estoy duchando")
	// }, DESPERTAR)
	console.log(resolve)
})


Para evitar el call back hell se usan dos metodos de las promesas, esos metodos para recibir la respuesta de si la promesa salio bien o si la promesa salio mal, si la promesa salio bien (resolve) usamos nombredelapromesa.then() y si salio mal (reject) usamos nombredelapromesa.catch()

then reciben un parametro/function y es la indicacion de que queremos hacer si salio bien o mal
En este caso el parametro que le llega viene desde resolve(parametro de resolve) o reject(parametro de reject) y se les pasa directamente a then(parametro de resolve) y catch(parametro de reject)


despertar.then((message)=>{
	console.log(message)
})
despertar.catch((message)=>{
	console.log(message)
})

La notacion de arriba puede sustituirse por:

despertar
.then((message)=>{
	console.log(message)
})
.catch((message)=>{
	console.log(message)
})

Todo lo que hemos hecho hasta ahorita es para una sola promesa, pero lo transformaremos a funciones (me parece que es por temas didacticos)


function despertar(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(`Ahora me estoy duchando`)
			// reject(`Lo siento, todo mal`)
		}, DESPERTAR)
	})
}

function ducha(message){
	$agenda.textContent = message
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(`Ahora me estoy vistiendo`)
			// reject(`Lo siento, todo mal`)
		}, DUCHA)
	})
}

function vestirme(message){
	$agenda.textContent = message
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(`Ahora me estoy desayunando`)
			// reject(`Lo siento, todo mal`)
		}, VESTIRSE)
	})
}

function desayunar(message){
	$agenda.textContent = message
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(`Estoy estudiando`)
			// reject(`Lo siento, todo mal`)
		}, DESAYUNAR)
	})
}

function platzi(message){
	$agenda.textContent = message
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(`Estoy REFLLEXIONANDO`)
			// reject(`Lo siento, todo mal`)
		}, PLATZI)
	})
}

function err(message){
	$agenda.textContent = message
	console.log(message)
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(`Promesa del error`)
			// reject(`Lo siento, todo mal`)
		}, 0)
	})
}


 Angel del futuro, recuerda que .then recibe como parametro una FUNCION que a su vez tiene un parametro (el de resolve o reject) es por eso que cuando usamos ducha() ducha lleva un parametro, como el message y lo podemos usar.(de todos modos ve el ejemplo anterior, está más arriba)

despertar()  //Ahora despertar como funcion es una promesa
.then(ducha)
.then(vestirme)
.then(desayunar)
.then(platzi)
.then((message) => $agenda.textContent = message)
.catch(err)

a la funcion err le agregue una nueva promesa, esto con la intencion de que cuando .catch no estuviera al final sino en medio, se siguiera teniendo un parametro para resolve y reject



function promesa1(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("Promesa1")
		},1000)
	})
}
function promesa2(message){
	console.log(message)
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("Promesa2")
		},2000)
	})
}
function promesa3(message){
	console.log(message)
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("Promesa3")
		},1000)
	})
}

promesa1()
	// .then((message)=>console.log(message))
	.then(promesa2)
	// .then((message)=>console.log(message))
	.then(promesa3)
	.then(message=>console.log(message))
	// .then((message)=>console.log(message))








32 FUNCIONES RECURSIVAS


Una funcion recursiva debe tener un caso base que detenga la recursividad.

function fibonacci (num){
	if (num == 1) return 0
	if (num == 2) return 1
	// console.log(`numero del parametro: ${num}`)
	let a = fibonacci(num - 1) + fibonacci(num -2)
	// console.log(`suma: ${a}`)
	return a
}

console.log(fibonacci(1)) // 0
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 1
console.log(fibonacci(4)) // 2
console.log(fibonacci(5)) // 3
console.log(fibonacci(6)) // 5
console.log(fibonacci(7)) // 8

function fibo(num){
	let data = [0,0,1,1]

	let interna = function (num){
		if(data.length<=num){
			let suma = interna(num-1) + interna(num-2)
			console.log(suma)
			data[num]=suma
			return data[num]
		}else{
			return data[num]
		}
	}
	console.log(data)
	return interna(num)

}
console.log(fibo(8))




33 MEMOIZACION




Para empezar, usaremos la forumla de fibonacci de la clase pasada y le agregaremos un contador para saber cuantas veces se esta ejecutando, lo obvio es que se llama demaciadas veces.

let contador = 0
function fibonacci (num){
	if (num == 1) return 0
	if (num == 2) return 1
	contador ++
	console.log(contador)
	return fibonacci(num - 1) + fibonacci(num -2)
}

console.log(fibonacci(10)) // son 6764 llamadas

Esto se debe a que cada vez que llamamos a la funcion fibonacci /ahora fibo/ se ejecuta asi:

fibo(8) = fibo(7) 					+ fibo(6)
fibo(8) = fibo(6) + fibo(5) + fibo(6)
fibo(8) = fibo(6) + fibo(5) + fibo(5) + fibo(4) ...

En esencia cada llamada se ejecuta el numero de veces que sea necesario hasta llegar a los puntos base de la funcion recursiva, cuando llega ahi y retorna el valor, empieza la otra llamada sin tomar en cuenta si esos calculos ya se hicieron.

Para ello a la funcion le vamos a agregar un objeto (como parametro)

El objeto memoria guardara los calculos realizados y con esto se optimiza muchisimo el codigo.

Recuerda que cada vez que llamamos a la función, debemos agregar la memoria, por que de otra forma, la memoria estará vacia. En este caso la agregamos en la linea:
return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num -2, memoria)




let memoria = {}
function fibonacci (num, memo){
	if (memo[num]) return memo[num]
	if (num == 1) return 0
	if (num == 2) return 1
	// console.log(memo)
	return memo[num] = fibonacci(num - 1, memo) + fibonacci(num -2, memo)
}
fibonacci(20, memoria)


function fibonacci (num, memoria = {}){
	if (memoria[num]) return memoria[num]
	if (num == 1) return 0
	if (num == 2) return 1
	// console.log(memoria)
	return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num -2, memoria)
}
console.log(fibonacci(4))






34 ITERADORES EN JS

Sirve para hacer listas infinitas


Esto es un closure ya que recuerda las variables de su entorno donde fue creada, hay que darle un repaso a esa clase.
Next devuelve dos valores, un valor y nos va a decir si la funcion ya termino o no.
{
	value: ,
	done: false/true
}
done lo tendremos en false para indicar que la funcion no ha acabado y así poder pedir números.




function fibonacci(){
	let a = 0, b = 1
	return {
		next: function(){
			let f = a
			a = b
			b = f + a
			return {value: f, done: false}
		}
	}
}

const fibo = fibonacci() //fibo ahora es un objeto que tiene un metodo next.
fibo.next().value // cada vez que llamamos al metodo next, las variables recuerdan sus valores
fibo.next().value
fibo.next().value
fibo.next().value
fibo.next().value
fibo.next().value
fibo.next().value








36  GENERADORES

Pasamos por parametro a la funcion next una propiedad que permitira recetear los valores.

function fibonacci(){
	let a = 0, b = 1
	return {
		next: function(reset){
			if(reset) a = 0, b = 1
			let f = a
			a = b
			b = f + a
			return {value: f, done: false}
		}
	}
}

Para recetear solo tendriamos que pasar true como parametro de next. next(true)


const fibo = fibonacci() //fibo ahora es un objeto que tiene un metodo next.
fibo.next().value
fibo.next().value
fibo.next().value
fibo.next(true).value







Para usar un generador, en la funcion le escribimos un *
podemos usar la palabra yield y es como un return que servira mucho ya que la siguiente vez que sea llamada esa misma funcion, se ejecutara desde esa linea de codigo (con los valores de la misma). Es como ponerle pausa pero nos retorna un valor usable

Por ejemplo, usaremos una funcion con un white que SIEMPRE se ejecutará, por ello es infinito, pero con ayuda de yield, se detendra.

El generador nos retorna un objeto, por ello hay que introducirlo en una variable. De igual forma este objeto tiene el metodo next y es con él con quien obtendremos los números siguientes.

function* infinity(){
	let a = 0
	while(true){
		a++
		// console.log(a)
		yield a
	}
}

const infy = infinity()
infy.next()


function* fibonacci(){
	let a = 0, b = 1
	return {
		next: function(reset){
			if(reset) a = 0, b = 1
			let f = a
			a = b
			b = f + a
			return {value: f, done: false}
		}
	}
}






37 ESTRUCTURAS DE DATOS INMMUTABLES -----> PROGRAMACION FUNCIONAL


Lo podemos encontrar en google como immutability

=== el triple igual sirve para comparar objetos

let angel = {nombre: "Angel", apellido: "Vasquez", edad: 24}
let otroAngel = angel

otroAngel === angel ?
La respuesta es TRUE, obviamente.

El problema es que si hacemos un cambio en otroAngel, ese cambio se vera reflejado tambien en angel

otroAngel.edad = 25

angel.edad nos dara 25 tambien

Lo que sucede es que ambas variables apuntan al mismo objeto en memoria


El efecto de lado hace que una funcion modifique propiedades de otras variables que no son locales a la funcion.
Como programadores queremos evitar hacer eso.

Por ejemplo, si queremos hacer una funcion para cumpleaños, hariamos esto:
function cumple(persona){
	persona.edad++
}

Sin embargo, eso afecta al objeto que se le pasa por parametro, si ese no es exactamente nuestro propisito, podemos usar clone.
El Object.assing() recibe dos parametros, 1°objeto y 2°objeto, y lo que hace es asignarle al primero todas las propiedades del segundo

function cumple(persona){
	const clone = Object.assign({}, persona)
	clone.edad++
	return clone
}




38 NPM REQUISITOS TECNICOS

npmjs.com

Necesitamos git

Para configurar npm usamos

npm set init.author.name "Angel Vasquez"
npm set init.author.email "angel.vasquez.unam@gmail.com"
npm set init.author.url "mi página personal"
npm login
Username: mi usario de npm
Passworld:
Email:


Despues nos situamos en nuestra carpeta principal donde tengamos todos nuestros archivos.


39 CREANDO NUESTRO PAQUETE

Una vez ahi ejecutamos el comando
npm init

name: (platzom)`
version: (1.0.0) 0.1.0` //semver
description: Traductor de idioma
entry point: (archivoprincipal.js)
text command:
git repository:
keywords: platzom platzi js
license: (ISC) MIT

Todo esto nos crea un package.json


Dentro de la carpeta principal creamos el archivo LICENCE y pegamos la licencia dentro de él.

También el README.md // MarkDown

------------------------------------------------------------
# Titulo

Descripción general [Texto link](https://platzi.com/js)

##  Descripción del idioma

- Regla 1 ...
- Regla 2 ...

## Instalación
//npm install <nombre del paquete>
```
npm install platzom
```

## Uso

```
import platzom from '<nombre del paquete>'
```

## Créditos

- [Angel Vasquez](www.mypage.com)

## Licencia

- [MIT](www.licencemit.com)
------------------------------------------------------------




40 ESCRIBIENDO EL CÓDIGO DE NUESTRO PAQUETE

No podemos distribuir codigo en ECMA Script 2015 por que no sabemos quien lo va a utilizar, por ello usaremos babel para transpilar el codigo.

Debemos crear una nueva carpeta llamada src y ahí va a ir el código fuente

Ahí metemos platzom.js tal cual lo habiamos escrito, es el archivo original.

Dentro del archivo hacemos lo siguiente para asignar la funcion que se exportara por defecto:

------------------------------------------------
export default function platzom(src){
	...
}
------------------------------------------------


En caso de que querramos exportar más cosas usamos:
------------------------------------------------
import { platzom } from 'platzom'
export function platzom(src){
	...
}


Despues usamos Babel











---------------------------------------------------------------------------
Para actualizar el paquete, usamos:
npm version <version>
npm publish
---------------------------------------------------------------------------








JUEGO DE SIMON DICE



Para obtener varios elementos del DOM podemos asignarles un
data-key="1"
data-key="2"
data-key="3"
...

Y para obtenerlos tenemos la funcion:
function getElementByKeyCode(keyCode){
	return document.querySelector(`[data-key="${keyCode}"]`)
}

IMPORTANTE: Para recetear las clases que le vayamos agregando a un elemento del DOM tenemos que hacer algo muy sencillo:

function deactivate(el){
	el.className = "clase que queremos dejar"
}






AÑADIR UNA LIBRERIA

sweetAlert
https://limonte.github.io/sweetalert2/




2


Tengo la siguiente función que me indica si una persona se encuentra dentro de un array. Por ejemplo: buscarPersona("Sacha", ["Sacha", "Juan"]); me devuelve true, pero buscarPersona("Sacha", ["Juan"]); me devuelve false.

function buscarPersona(nombre, personas) {
  if (!personas) {
    return false
  }
  for (let i = 0; i < personas.length; i++) {
    if (nombre === personas[i]) {
      return true
    }
  }
}
buscarPersona("Sacha", ["Sacha"])
Si la llamo de la siguiente manera buscarPersona("Sacha", []); me devuelve:

RESPUESTA UNDEFINED


5


Después de la ejecución del siguiente código...

let personas = [ "Sacha", "Darío", "Alan", "Martin" ]
let resultado = 1
if (personas) {
  resultado++
	console.log(resultado)
}
if (personas.length) {
  resultado++
	console.log(resultado)
}
if (personas[1] == "Sacha") {
	console.log(resultado)
  resultado++
} else if (personas[2] == "Dario") {
  resultado += 2
	console.log(resultado)
} else {
  resultado--
	console.log(resultado)
}
console.log(resultado)
El valor de la variable resultado es:
RESULTADO: 2


14 -------------

El `string` "Hola!"...
setTimeout(() => console.log("Hola!"), 2000)



17

Para correr los tests de un módulo de NPM puedo ejecutar el comando:

NPM TEST

it('', function(){

})


19 ----------------



24  Creo que puse la opcion de que el nombre estaba indefinido --------

En el siguiente ejemplo:
let nombre = "Sacha"
function saludar() {
  alert(`Hola ${nombre}`)
}

puse b



25 Al invocar una función en JavaScript… ------------

A si no le psao todos los parametros que la funcion puede recibir, me dara error
puedo omitir parametros
puedo omitir parametros solo si la funcion les asigna un valor por defecto
puedo omitir parametros si se trata de un callback




29

En el siguiente ejemplo, se imprime en la consola el número…

if (null) {
  console.log(1)
} else if (undefined) {
  console.log(2)
} else if ( {} ) {
  console.log(3)
} else {
  console.log(4)
}

RESPUESTA 3

30
R: min 2:40 Definiendo la Clase Punto-Prototipos en JS
Cuando se llama a una función anteponiendo la palabra clave new:
Crear un nuevo objeto y le va a asignar como prototipo la funcion que va despues del new

c






















Súper frontend developer
https://github.com/dbritobcn
www.rafaelerasmo.com








-----------------------------------------------------------
      			NOTAS GENERALES DE JS
-----------------------------------------------------------


-Como poner un input range

<input type="range" name="" id="rango">

<script>
  const rango = document.getElementById('rango')
  rango.addEventListener("change", ()=>console.log(rango.value))
</script>




-Input con opciones

"select+"

<select name="" id="opciones" value="">
  <option value="opti1">Opti1</option>
  <option value="opti2">Opti2</option>
  <option value="opti3">Opti3</option>
</select>




const opciones = document.getElementById('opciones')
opciones.addEventListener("change", ()=>console.log(opciones.value))





-STRINGS

let cadena = "Cadena"

charAt()

cadena.charAt(indice)
cadena.charAt(0)
R: C


charCodeAt()

"abc".charCodeAt(0)
R: 65 // Valor código de la letra a
"@".charAt()
R: 64


concat()

const cadena1="Oh "
const cadena2="qué maravillosa "
const cadena3="mañana'."
const cadena4=cadena1.concat(cadena2,cadena3) // devuelve "Oh qué maravillosa mañana'."


-includes // Busca una cadena dentro de otra

'Ballena azul'.includes('Ballena'); // devuelve true


-indexOf("string a buscar")

Busca un string dentro de otro y devuelve la posición

"Blue Whale".indexOf("Blue")  // returns 0
"Blue Whale".indexOf("Blute") // returns -1
"Blue Whale".indexOf("Whale") // returns 5


-slice(desde donde se corta, hasta donde se corta)

"Hola amigos".slice(1, -1)
R: "ola amigo"


-split("caracter por el cual los quiero separar")

"Hola Mundo. Cómo estás hoy?".split(".")
(2) ["Hola Mundo", " Cómo estás hoy?"]
















------------------------------------------------------------
API


MARVEL DEVELOPER


MY DEVELOPER ACCOUNT

Hi AD Plat8943!

Here is your personal Marvel Comics API information:

Your public key

"19b1de27a98ebce61a476c2479362d1c"

Your private key
"ac91f7ce4140da148677697caac3714e85724ee7"

developer.marvel.com




NASA DEVELOPER




My key "li9XIyEGDAn1wWucHxGucqgUATJEg0Pf3yTzv7Cj"

Imagen del día:
GET https://api.nasa.gov/planetary/apod?api_key=li9XIyEGDAn1wWucHxGucqgUATJEg0Pf3yTzv7Cj
-Seleccionar una fecha especifica... agregar al la petición &date=YYYY-MM-DD
GET https://api.nasa.gov/planetary/apod?api_key=li9XIyEGDAn1wWucHxGucqgUATJEg0Pf3yTzv7Cj&date=YYYY-MM-DD


Asteroides:
GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
date=YYYY-MM-DD











===============================================================================
===============================================================================
===============================================================================
					 \\\\\			  ////// 		||||	  |||| 		  ||||||||||||
						\\\\\	     //////			||||	  ||||			||||
						 \\\\\    //////	  	||||	  ||||			||||
						  \\\\\  //////				||||	  ||||			||||||||
							 \\\\\////// 				||||	  ||||			||||
							  \\\\\////					\\\\\  /////			||||
							 	 \\\\\//		  	   \\\\\/////			  ||||||||||||
===============================================================================
===============================================================================
===============================================================================
===============================================================================


Curso de Vue.js



<script src="https://cdn.jsdelivr.net/npm/vue"></script>


Caracteristicas

-Framework progresivo
-Escalable, sirve para proyectos pequeños y grandes.
-MV Está orientado a modelos y vistas
-Reactivo
-Vue.js core --> UI
-Componentes reutilizables
-Fácil de aprender
-Vue.js + herramientas + librerias = SPA (Single page aplication)
-Vue renderiza un modelo a la vista, si cambia el modelo la vista se modifica.


Vue.js React

Similitudes
-Virtual DOM
-Componentes
-Librerias core sólo para la UI

Performance
-Minimizar las interacciones con el DOM
-Minimizar los cálculos de JS para saber qué modificar

Update Performance
-ShouldComponentUpdate y estructuras de datos INMMUTABLES
-Dependencias auto-trackeadas

Developer Experience

Vue solo se encarga de las vistas, los requerimientos de otras cosas se pueden hacer con otros elementos



-----------------------------------------------
HELLOG WORL


En HTML colocamos un id y en su contenido la expresion {{}}, dentro de la misma asignamos una variable que queremos que Vue

--html--
<div id="app">
  Hola {{ nombre }}
  <a v-bind:href="url" target="_blank">{{pagina}}</a>
</div>

--js--
const app = new Vue({
  el: '#app',
  data:{
    nombre: "Angel",
    url:"https:/google.com",
    pagina: "Google"
  }
})

Ahora ese elemento es REACTIVO ! si queremos cambiar el valor de nombre lo podemos hacer incluso desde la consola de desarrollo.

v-bind: Sirve para que podamos poner variables dentro de los atributos



--------------------------
CONDICIONALES VUE

Mostrar u ocultar elementos

Al elemento que queremos que se muestre (o no ) le colocamos el atributo v-if="variable" y la variable que tendra el condicional:
<div id="app">
  <a v-if="mostrar" href=""></a>
</div>

const app = new Vue({
  el: "#app",
  data:{
    mostrar: true
  }
})

Si queremos quitar o mostrar varios elementos usaremos una bolsa para enmarcarlos, en este caso seria

<template v-if="mostrar">
  <a v-if="mostrar" href=""></a>
  <a v-if="mostrar" href=""></a>
  <a v-if="mostrar" href=""></a>
</template>


Tambien podemos usar v-show="variable"
Si esta en false se pondra display:none

<div v-show="mostrar">Me muestro</div>
<div v-show="!mostrar">Me oculto</div>


v-if vs v-show
Si vamos a usar algo por largo tiempo, algo que al cargar se va a quedar siempre, usamos v-if
Si tenemos un elemento que se va a quitar y poner de forma constante, usamos v-show



---------------------------------------
FILTROS


Antes de que algo se ponga en la pantalla, podemos pasarlo por un filtro para que, por ejemplo, se aparezca todo en mayuscula.

<h1>{{titulo | uppercase | addLetter}}</h1>

const app = new Vue({
  el: '#app',
  data:{
    titulo: "Estás en Platzi",
    subtitulo: "Curso Vue.js"
  },
  filters:{
    uppercase: function(str){
      return str.toUpperCase()
    },
    lowercase: function(str){
      return str.toLowerCase()
    },
    addLetter: function(str){
      return str + " más texto"
    },
    capitalize: function(str){
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }
  }
})

Los filtros basicamente son funciones que aplicamos a las variables que presentaremos en el DOM.
Podemos concatenar filtros para que se ejecuten juntos.



---------------------------
CONTROLAR EVENTOS


v-on:evento a escuchar="nombre del metodo"
v-on:click="sumar"
@click="sumar"

<button v-on:click="sumar">Sumar 1</button>
<button v-on:click="restar">Restar 1</button>
<div>El contador está en {{contador}}</div>

const app = new Vue({
  el:"#app",
  data:{
    contador: 0
  },
  methods:{
    sumar: function(){
      this.contador++
    },
    restar: function(){
      this.contador--
    }
  }
})



------------------------------
FORMULARIOS


Para obtener el valor de un formulario, al input le agregamos v-model="variable donde queremos que se guarde el dato"
=> v-model="nombre" u
=> v-model="objeto.name" Si es que queremos agregar el atributo a un objeto

<div id="app">
  <input type="text" name="nombre" placeholder="Ingresa tu nombre" v-model="nombre"/>
  <p>Tu nombre en mayúscula es: {{nombre | uppercase}}</p>
</div>

const app = new Vue({
  el:"#app",
  data:{
    nombre:""
  },
  filters:{
    uppercase: function(str){
      return str.toUpperCase()
    }
  }
})

Con v-model obtenemos lo que el usuario escriba y lo guardamos en la variable que le coloquemos, que a su vez podremos usar de inmediato


<form v-on:submit.prevent="submit">
  <h2>¿Cuáles son tus cursos favoritos</h2>
  <input v-model="cursos" type="checkbox" id="vue" value="vue"/>
  <label for="vue">Curso de Vue.js</label>
  <input v-model="cursos" type="checkbox" id="seo" value="seo"/>
  <label for="vue">Curso de SEO</label>
  <input v-model="cursos" type="checkbox" id="react" value="react"/>
  <label for="react">Curso de React</label>
  <button type="submit">Enviar</button>
</form>

con @submit.prevent impedimos que el formulario se envie de inmediato y le agregamos un metodo
@submit.prevent="metodo a ejecutar"

data:{
  ...,
  cursos: []
},
methods:{
  submit: function(){
    console.log(this.cursos)
  }
}





------------------------
CICLOS


El v-for="" es para hacer la iteracion
Luego tenemos que hacer bind a los elementos

<form v-on:submit.prevent="submit" action="">
  <h2>¿Cuáles son tus cursos favoritos</h2>
  <template v-for="curso in cursos">
    <input v-model="cursosSeleccionados" type="checkbox" v-bind:id="curso.value" v-bind:value="curso.value"/>
    <label v-bind:for="curso.value">{{curso.nombre}}</label>
  </template>
  <button type="submit">Enviar</button>
</form>

const app = new Vue({
  el:"#app",
  data:{
    nombre:"",
    cursos:[
      {nombre:"Curso de Vue.js", value:"vue"},
      {nombre:"Curso de React", value:"react"},
      {nombre:"Curso de JS", value:"js"},
      {nombre:"Curso de SEO", value:"seo"}
    ],
    cursosSeleccionados: []
  },
  methods:{
    submit: function(){
      console.log(this.cursosSeleccionados)
    }
  }
})




---------------------------
COMPONENTES


<form v-on:submit.prevent="submit" action="">

  <h2>¿Cuáles son tus cursos favoritos?</h2>

  <template v-for="curso in cursos">

    <curso v-bind:curso="curso" @checked="selectCurso" ></curso> //Aquie la funcion @checked es la que definimos en nuestro componente y el ="selectCurso" es lo que queremos que haga cuando se ejecute la accion
    // <input v-model="cursosSeleccionados" type="checkbox" v-bind:id="curso.value" v-bind:value="curso.value"/>
    // <label v-bind:for="curso.value">{{curso.nombre}}</label>

  </template>

	<button type="submit">Enviar</button>

</form>

Vue.component(nombre de etiqueta, {
  props:[], // Propiedades que el elemento necesita para dibujarse
  template: `Lo que se va a dibujar dentro de la etiqueta`
})

Vue.component(`curso`, {
  props:["curso", "cursosSeleccionados"],
  methods:{
    onchage: function(ev){
      // Para emitir un evento
			// this.$emit("nombre del evento a emitir", parametros del mismo)
			// Esa funcion se escribe dentro del componenente principal y recibira como parametro los parametro que aquí hayamos definido.
      this.$emit("checked", this.curso.value, ev.target.checked)
    }
  },
  template: `
  <div>
    <input v-model="cursosSeleccionados" type="checkbox" v-bind:id="curso.value" v-bind:value="curso.value" v-on:change="onchage"/>
    <label v-bind:for="curso.value">{{curso.nombre}}</label>
  </div>
  `
})

const app = new Vue({
  el:"#app",
  data:{
    nombre:"",
    cursos:[
      {nombre:"Curso de Vue.js", value:"vue"},
      {nombre:"Curso de React", value:"react"},
      {nombre:"Curso de JS", value:"js"},
      {nombre:"Curso de SEO", value:"seo"}
    ],
    cursosSeleccionados: []
  },
  methods:{
    submit: function(){
      console.log(this.cursosSeleccionados)
    },
    selectCurso: function(curso, checked){
      if(checked){
        this.cursosSeleccionados.push(curso)
      }else{
        let index = this.cursosSeleccionados.indexOf(curso)
        this.cursosSeleccionados.splice(index,1)
      }
    }
  }
})





--------------------------
AGREGAR CLASES DINAMICAMENTE

En el componente ponemos
<div :class="{clase1: variable, clase2: variable}"></div>
<div :class="{clase1: true, clase2: false}"></div>
<div :class="{clase1: clicked > 5, clase2: clicked == 2}"></div>







---------------------------------------------
AGREGAR ELEMENTOS COMPUTADOS

En DOM
	<label>Tu nombre: </label>
	<input type="text" v-model="nombre">
	<p>Eres aceptado: {{aceptado_coputed}}</p>

En Vue
	const app = new Vue({
		...,
		computed:{
			aceptado_computed()
			if(this.nombre=="Angel"){
				return "Por supuesto"
			}else{
				return "NO"
			}
		}
	})



















--------------------------------------------------------
----------------------PLATZIMUSIC-----------------------
--------------------------------------------------------

Curso Profesional Vue.js


Usaremos un template: webpack-simple

Single page aplication tiene 1 solo html, css y js


cli: comand line interface


Para instalarlo:

npm install -g vue-cli //

vue init webpack-simple my-proyect
// vue init webpack-simple platzimusic
//Para empezar a usarlo
  cd platzimusic
  npm install
  npm run dev

Cuando corremos el comando dev (buscalo en package.json) se abre el servidor y se muestra en localhost:8080.
En App.vue está el template que se mostrará en pantalla. Ese es el pedazo de codigo que es reactivo.


NOTA: tuve problemas cuando estuve en Linux, node me marcaba algo raro, solo lo actualice a la ultima version.
"https://nodejs.org/es/download/package-manager/"



------- Sumando Stylus y Pug ----------------

npm install --save-dev pug pug-loader

npm install sass-loader node-sass webpack --save-dev

npm i -D pug pug-loader
npm i -D sass-loader node-sass 



----------------------------------------------
CONFIGURAR API

last.fm/api
Creamos cuenta y creamos proyect API


Application name	       platzimusic
API key	                 dbb07da9fa46417bcc64f2fb72830a6b
Shared secret	           53ae91a072e2dcc164578d4ba8970698
Registered to	           AngelVasquezNep







----------------------------

Escuchar eventos de windows

created () {
	this.resized = window.innerWidth
	window.addEventListener('resize', (el) => this.resize() )
}



























---------------------------------------------
PLATZIMUSIC A PRODUCCION

Dentro de las cosas que tenemos que hacer es:
1. En el documento webpack.config.js cambiar los valores de name
		{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]?[hash]'
			}
		}

		Por name: '[name].[ext]'

		Por último corremos el comando

						=>	npm run build  <=

		y actualizamos los cambios en la rama master












---------------------------------------------------------
VIDEO EXTERNO


<div id="app">
  <ul>
    <li v-for="product in products">
      {{product}}
    </li>
  </ul>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
  const app = new Vue({
    el:#app,
    data:{
      product:[]
    },
    created(){
      fetch("https://api.myjson.com/bins/74l63")
        .then(response=>response.json())
        .then(json=>{
          this.products = json.products
        })
    }
  })
</script>





--------------------------------------------------------------
PRACTICA


<div id="app">
  <label for="rango">Rango</label>
  <input type="range" name="" v-model="rango" id="rango">
  <p>El rango es: {{rango}}</p>
  <p v-show="rango>=75"            >Ya casi soy 100</p>
  <p v-show="rango>50 & rango<75"  >El rango es mayor que 50</p>
  <p v-show="rango==50"            >El rango es 50</p>
  <p v-show="rango<50 & rango>25"  >Ya no</p>
  <p v-show="rango<=25"            >Está bajando</p>
  <br/>
  <input type="text" name="nombre" placeholder="Ingresa tu nombre" v-model="nombre"/>
  <p title="">Tu nombre en mayúscula es: {{nombre | uppercase}}</p>
  <br/>
  <p v-on:mouseover="mouseArriba">Coloca el mouse sobre mi<p>
  <br/>
  <ul v-for="name in nombres">
    <li>El nombres es: {{name}}</li>
  </ul>
  <select class="" name="" v-model="opcionSelect" v-on:change="cambioDeOpcion">
    <option v-for="opcion in opciones" :value="opcion">{{opcion}}</option>
  </select>
</div>



<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script type="text/javascript">

  const app = new Vue({
    el: "#app",
    data: {
      nombre: "",
      texto:"",
      rango:"50",
      nombres: {
        uno: "Angel",
        dos: "Danie",
        tres: "Yare"
      },
      opcionSelect: "Angel",
      opciones:["Angel", "Dani", "Yare"]
    },
    methods:{
      mouseArriba() {
        console.log("Estoy arriba")
      },
      cambioDeOpcion(opt){
        if(opt != this.opcionSelect){
          console.log(this.opcionSelect)
        }
      }
    },
    filters: {
      uppercase(str){
        return str.toUpperCase()
      }
    }
  })





--------------------------------------------------
PRACTICA CON CONPONENTES


<div id="app">
  <h1>Selecciona al osito que quieres ver</h1>
  <select name="" id="" v-model="ositoSelected" @change="cambioOso">
    <option v-for="osito in ositos" :value="osito.nombre" >{{osito.nombre}}</option>
  </select>
  <osos v-for="osito in ositos" :nombre="osito.nombre" :url="osito.url" :ositoSelected="ositoSelected">
  </osos>

</div>



Vue.component(`osos`, {
  props:["nombre", "url", "ositoSelected"],
  methods:{
    tocar: function(){
      console.log("Me tocaste")
    }
  },
  template: `
  <div>
      <h2 >{{nombre}}</h2>
      <img :src="url" alt="" v-on:click="tocar" />
  </div>
  `
})

const app = new Vue({
  el:"#app",
  data:{
    nombre:"",
    ositos:[
      {nombre:"Osito Kawai de fiesta", url:"https://pm1.narvii.com/6386/74dfb610f680fb78a55e7644cfe266ce42660981_128.jpg"},
      {nombre:"Gatito Pastelito", url:"https://pa1.narvii.com/6370/e2126afc3286b148675f27c3d3622a5942d9e3d1_128.gif"},
      {nombre:"Osito comiendo", url:"https://a.wattpad.com/useravatar/OsitoKawaiiJarcor09.128.654770.jpg"}
    ],
    ositoSelected: "Osito Kawai de fiesta"
  },
  methods:{
    cambioOso: function(ev){
      if(ev != this.ositoSelected){
        console.log(this.ositoSelected)
      }
    }
  }
})




-----------------------------------
AGREGAR UN NUEVO USUARIO

----HTML---

<form class="" @submit.prevent="agregarUser">

      <label for="username">Tu nombre: </label>
          <input v-model="newUserSubmit.name"  required type="text" id="username" name="" value="">

      <label for="userage">Tu edad: </label>
          <input v-model="newUserSubmit.age"   required min="10" type="number" id="userage" name="" value="">


      <input type="submit" name="" value="Nuevo usuario">

</form>


<ul v-for="user in users">
      <newuser :user="user" @eliminarComponent="eliminarComponent"></newuser>
</ul>


----VUE----
import User from '...'

methods:{
    agregarUser(){
      // Hacemos push al objeto de usuarios
      this.users.push(this.newUserSubmit)
      // Seteamos el objeto nuevamente para que nos aparezca limpia la pantalla
      this.newUserSubmit = {clicked:false, status:true}
      console.log(this.newUserSubmit)
    },
		eliminarComponent(user){
      // Le agregamos lo necesario para que se elimine
      setTimeout(()=>user.status=false, 1000)
      user.clicked=true
    }
}




























=======================================================
=======================================================
=======================================================

	 \\\\			/// |||	 ||   ||||||
		\\\\   ///  |||  ||		|||
		 \\\\ ///		|||	 ||		||||||
		  \\\\//		|||  ||		|||
			 \\\\			|||||||  	||||||

=======================================================
=======================================================
=======================================================


Como escribir un indice


También cuando utilizamos el v-for podemos obtener el indice de cada elemento:

<ul>
	<li v-for="( i, index) in items">{{index}}{{ i }}</li>
</ul>


----------------------
Condicionales

<p v-show="variable"></p>
<p v-if="variable"></p>
<p v-else-if="!variable"></p>
<p v-else="otraVariable"></p>



----------------------
DATA BINDING

<input type="text" v-model="algoDentroDeMiData" />
<a :href="url" >Está es una URL de mi data y me lleva a los cursos de Platzi</a>
data(){
	return{
		algoDentroDeMiData:'',
		url: 'https://platzi.com/cursos'
	}
}


----------------------
COMPUTED PROPERTIES

Es para computar propiedades, de tal forma que podemos pasar una funcion a algo antes de mostrarlo en pantalla

Las propiedades computadas nos sirven para generar/RETORNAR valores o variables con base en otras propiedades o valores que ya tenemos en el v-model.



<input type="text" v-model="name" />
<input v-model="lastname"/>
<p>{{fullName}}</p>

computed:{
	fullName(){
		return "`${this.name} ${this.lastname}`"
	}
}




--------------------------------
WATCHERS

Nos permiten ejecutar codigo a partir de que una propiedad de nuestro v-model, sin embargo estás no retornan un valor.
Se enlazan directamente con una propiedad del v-model y por ello se tienen que llamar de la misma manera.

Los watch reciben dos valores, el nuevo valor que se esta ingresando y guardan el valor anterior.


data(){
	return {
		name:''
	}
}

watch:{
	name(newVal, oldVal){
		console.log(newVal, oldVal)
	}
}



----------------------------------------
EVENTOS

<input type="button" value="accion" @click="algo">

methods:{
	algo(){
		console.log("Se activo algo")
	}
}








-----------------------------------------
SERVICIOS


Consumo de API

Los servicios son archivos con logica de negocios









--------------
CONSUMO DE APIs REST

const url = 'https://platzi-music-api.now.sh/'
fetch('https://platzi-music-api.now.sh/search?query=muchacha&type=track&limit=20')


fetch('https://platzi-music-api.now.sh/search?query=muchacha&type=track')
.then(res=>res.json())
.then(json=>console.log(json))


Con una aplicacion de escritorio llamada Postman podemos hacer prueba de llamadas HTTP y ver los resultados JSON





----------------------------
NOTA: Buscar bulma css



----------------------------
REACTIVIDAD E INMUTABILIDAD


Data => Watcher => Render => Virtual DOM => ... Data

"VUE NO PERMITE AGREGAR PROPIEDADES DINAMICAS A LOS OBJETOS"

Cuando iniciamos un proyecto debemos declarar todas nuestras variables dentro de la funcion DATA() esto por que se renderizaran.

Si las propiedades mutan, en esencia que pasen de:

data(){
	return {
		person:{
			name:'Angel'
		}
	}
},
methods:{
	addProp(){
		this.person.lastname ="Vasquez"
	}
}

person es un objeto, sin embargo al aplicar addProp se agrega otra propiedad que al inicio del render no estaba contemplada y por ello no se mostraria en pantalla.
<p>{{person}}</p> => Esto muestra el objeto persona pero solo mostraria el name y no el lastname


Para arreglarlo tenemos varias opciones, una es usar la propiedad this.$set()
Recibe varios parametros:
		=> this.$set(objeto al que le quiero agregar una propiedad, 'nombre de la propiedad', "Valor de la propiedad")
====>
methods:{
	addProp(){
		this.$set(this.person, "lastname", "Vasquez")
	}
}


Pero si queremos agregar varias propiedades lo correcto es aplicar:

this.objetoAcambiar = Object.assign({}, this.objetoAcambiar, {prop1: valor1, prop2: valor2, ...})

this.person = Object.assign({}, this.person, {prop1: 1, prop2: 2, lastname: "Vasquez"})



--------------------------
CICLO DE VIDA DE COMPONENTES

Estos son Hooks=>

new Vue()
	-> beforeCreate: function(){}
Observe Data
Init Events
	-> created: function(){}
Compile template into render function
	-> beforeMount: function(){}
Create vm.$el and replace "el" whit ir
	-> mounted: function() {}
Mounted
	-> updated: function() {} Cambio reflejado en pantalla
	-> beforeUpdate: function() {} Cuando hay un cambio en la data
		--- when data changes ---> Mounted
	-> beforeDestroy: function() {}
Teardown whatchers, child components and events listeners.

Destroy
 	->destroyed: function(){}



----------------------
COMUNICACION ENTRE COMPONENTES PADRES E HIJOS

Al crear un componente debemos (por buena practica) colocarle algun tipo de prefijo, si nuestra aplicacion es platzimusic y queremos hacer un componente para las canciones, podemos usar como nombre del componente:
	name: 'PmTracks'

Padre a hijo => funciona a traves de propiedades
De hijo a padre => funciona a traves de eventos

Cuando hacemos un componente hijo, él no deberia poder cambiarse asi mismo "sus" propiedades ya que éstas se las pasamos por parametro del componente padre y recordando la clase anterior, no podemos cambiar las propiedades de la data por cuestiones de mutabilidad.
Por ello trabajamos con eventos.


export default {
		name:'component',
		props:{
			propiedad: type (ejemplo: String),
			propiedad: {type: Obkect, required: true}
		}

}

==================================
Una buena practica para las direcciones de los componentes es generar un alias:
En webpack.config=>
 	dentro de resolve => alias =>
	'@': path.resolve(__dirname, './src')

'./components/Artist.vue'
'@/components/Artist.vue'

Ayuda mucho para cuando estamos muy abajo en carpetas, para no escribir
'../../components/Artist.vue'
'@/components/Artist.vue'

==================================

Con la siguiente linea le pasamos los elementos de las canciones al componente que acabamos de crear, asi es como se comunica el padre con el hijo

v-for="t in tracks"
	pmtracks(:track="t")



------------------------------
COMUNICACION DE HIJOS HACIA PADRES

Dentro del componente
	<p @click="pulsado">Pulsar</p>


methods:{
	pulsado(){
		this.$emit('pulsed', this.track.id)
	}
}


Dentro del padre

	<pmtracks @pulsed="escuchadordelhijo"></pmtracks>

data(){
	return {
		idquemandaelhijo:''
	}
},
methods:{
	escuchadordelhijo(id){
		console.log(id)
		this.idquemandaelhijo = id
	}
}

Para aplicar un CSS dinamico

:class=" 'clase': logica"
:class=" 'clase': valor1 == valor2 "
:class=" var1 ? 'clase1' : 'clase2' "

<pmtracks :class="{'is-active': track.id === idquemandaelhijo}" @pulsed="escuchadordelhijo"></pmtracks>





-----------------------------------------
SLOTS

Inyectar desde el componente padre HTML con elementos en los componentes hijos

Con esto hacemos HTML dinamico, de tal forma que en vez de pasarle al componente hijo los valores por data, lo hacemos directamente en el HTML y con ello logramos que sea un trabajo personalizado, se usa en modales, mensajes personales, etc.

En componente hijo => Se llamará child
	<template>
		slot(name="title")
		  h1 Titulo
		slot(name="body")
		  p Cuerpo
	</template>

En el padre
	<child>
		<h1 slot="title">Este es el mensaje que se mostrará en pantalla con todas las propiedades del elemento clild</h1>
	</clild>








---------------------------------------------

TRANSICIONES Y ANIMACIONES 

v-enter: 					=> Estirar cuando está entrando la transicion
v-enter-active: 	=> Mientras está activa 
v-enter-to: 			=> Mientras se está yendo
v-leave: 					=> Empezando a irse 
v-leave-active: 	=> Ya se fue y está activo
v-leave-to: 			=> Cuando ya finalizó todo 

crear una clase 

.move-enter-active, .move-leave-active{
	transform: translateX(0);
	transition: all .5s linear; 
}

.move-enter, .move-leave-to{
	transform: translateX(100%);
	
}


En el modulo que querramos aplicarlo

transition(name="move")
	elemento a aplicar




DEPLOY VUE.JS

Para hacer deploy en now de la carpeta dist: 

  1. Borrar el archivo build.js.map
  2. En el index de la carpta dist borrar la referencia de /dist/ (esto es por que cuando el index busque en la carpeta dist no hallará nada, pues nos encontramos parados sobre ella, sin embargo, si busca los archivos a su mismo nivel del arbol los podrá usar) 
  3. En el build.js buscar la referencia "/dist/" y dejar solamente "/"
  4. Sobre la misma carpeta dist correr el comando now
  5. Cambiar el alias de tu-pagina-idhorribledenow.now.sh por tu-pagina.now.sh

DEPLOY NUXT.js

  1. npm run generate
  2. cd dist
  3. now


=====================================
                 NUXT.js
=====================================

=== Instalar eventBus

en plugins/eventBus.js

	import Vue from 'vue'

	const eventBus = {}

	eventBus.install = function (Vue) {
		Vue.prototype.$bus = new Vue()
	}

	Vue.use(eventBus)

en nuxt.config.js

	plugins: [
    '~/plugins/eventBus.js'
  ]

	build: {
			vendor: [ 'vue-lazyload' ],
			...
	}



=== Agregar user-scalable=no

meta: [
	{ charset: 'utf-8' },
	{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
	{ hid: 'description', name: 'description', content: 'Web site for Asomas' }
]


=== Agregar title y description dinamico 

export default {

	data() {
		return {
			title: "Asomas ",
			description: "Home de Asomas"
		}
	},

	head () {
		return {
			title: this.title,
			meta: [
				{ hid: 'description', name: 'description', content: this.description }
			]
		}
	}

}






















=======================================================
              CURSO WEB PACK (webpack) marzo 15
=======================================================


------------------------
Super importante! ==> Public Path => Para que todo se direccione a DIST.

entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/'
  },
------------------------



Hacemos un nuevo proyecto (carpeta)

npm init 

npm i -D webpack

=> Para ver que versión se instalo, usamos npm list webpack

Crear entry point => index.js en la raiz del proyecto

En la package.json agregamos un script  => 
"build": "webpack <nombre del entry point> <nombre de output>"
"build": "webpack index.js bundle.js"


------------
WEBPACK.CONFIG.JS

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
}

------------
Cambiar la ruta por defecto de webpack.config.js --config

"scripts": {
  ...,
  "build:otrowebpack" : "webpack --config ./ruta-del-nuevo-webpack.config.js"
}

El path.resolve sirve para las rutas relativas, dentro de sus parametros el "__dirname" es el directorio donde estoy parado y el nombre del archivo es el archivo que quiero trabajar.

path.resolve(__dirname, 'nombre de archivo')




------------
LOADERS 

CSS-Loader

npm i -D style-loader css-loader

En el index.js se debe importar la hoja de estilos =>  import './hoja-de-estilos.css'


const path = require('path');

module.exports = {
  // entry: './index.js',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: "expresion regular", use: "loader"}, // Si es más de un loader, usamos un array ['loader1', 'loader2'] => Se ejecutan de derecha a izquierda
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};


css-loader =>	Entender archivos CSS | Cargar archivos css e interpretarlos (import 'style.css')
css-style  =>	Imprimir archivos CSS en el navegador


--------------
PLUGINS

Para que el css no se inyecte directamente en la cabecera, lo podemos colocar en un archivo aparte, para ello usamos =>

npm i -D extract-text-webpack-plugin

  const path = require('path')
  const ExtractTextPlugin = required('extract-text-webpack-plugin') 

  module.exports = {
    ...
    module: { 
      rules[
        { 
          text: /\.css$/, use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:'css-loader'
          }) 
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('lugar dodne quiero que queden'), si le agregamos [name].css el output se llamará igual que el input.
      new ExtractTextPlugin('css/style.css')
    ]
  }



-----------------------
MULTIPLES ENTRY POINTS

  module.exports = {
    entry: {
      nombre-del-entry-point: path.resolve(__dirname, 'index.js'),
      main: path.resolve(__dirname, 'index.js'),
      home: path.resolve(__dirname, 'home.js'),
      contact: path.resolve(__dirname, 'contact.js')
    },
    output: {
      filename: 'js/[name].js', => [name] Para que cada uno tenga un nombre dinamico. le agregamos /js para que cree una nueva carpeta y ahí guarde todo
      path: path.resolve(__dirname, 'dist') 
    }
  }



-------------------------
SERVIDOR DE DESARROLLO CON WEBPACK

En los scripts de package.json le agregamos --watch 

"build": "webpack --mode development --watch"

Además para agregar el servidor instalamos 

npm i -D webpack-dev-server 

Y cambiamos el script 

"build": "webpack-dev-server --mode development "



---------------------
BABEL

El preset es el que indica que babel queremos soportar, desde el 2015, 2016, etc.

npm i -D babel-loader babel-core babel-preset-es2015 babel-preset-es2016 babel-preset-es2017

{ 
  test: /\.js$/, 
  use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015'] => Aquí podemos agregar varios presets 
      }
    }
}


---------------------
JS moderno 

export defaul => import algo from 'path';
module.exports => import { algo } from 'path';




---------------------
SOPORTAR IMAGENES 

npm i -D url-loader

url-loader va a transformar las imagenes en código de 64 bits para que estén dentro del código.


Para insentarla en el DOM usamos algo como lo siguiente => 

En el index.js importamos la imagen 
import platziImg from 'path'
const img = document.createElement('img')
img.setAtribute('src', platziImg)


O en el CSS solo se pone como background-image: url('path') y listo, NO se tiene que hacer nada en el index.js

En las rules 

{
  test: /\.(jpg|png|gif)$/,
  use: {
    loader: 'url-loader',
    options: {
      // Se coloca el limite en bytes de las imagenes que queremos que se conviertan
      limit: 100000
    }
  }
},

--------------------
SOPORTAR VIDEOS 

npm i -D file-loader

import video from 'path'

video.setAtribute('src', video)
...


En las rules 

{
  test: /\.(mp4|webm)$/,
  use: {
    loader: 'url-loader',
    options: {
      // Se coloca el limite en bytes de los videos que queremos que se conviertan
      limit: 1000000,
      name: 'videos/[name].[hash].[ext]'
    }
  }
},


-------------------
SOPORTAR JSON 

npm i -D json-loader 

test: /\.json$/,
use: 'json-loader'


import data from 'path/data.json'
console.log(data)





------------------
WEBPACK REACT

npm i -S react react-dom
npm i -D babel-preset-react



{
  test: /\.js$/,
  use: {
    loader: 'babel-preset',
    options: ['es2015', 'react']
  }
}

import React, { Component } from 'react'
import {render} from 'react-dom'

------------------
Webpack SASS 
npm i -D sass-loader node-sass

abajo de css

{
	test: /\.scss$/,
	use: [ 'css-loader', 'sass-loader' ]
}


------------------
Webpack STYLUS 
npm i -D stylus-loader stylus

...abajo de css
{
	test: /\.styl$/,
	use: [ 'css-loader', {
		loader: 'stylus-loader',
		options: {
			// Modulos externos
			use: [
				required('nib'),
				required('rupture')
			],
			import: [
				'~nib/lib/nib/index.styl',
				'~rupture/rupture/index.styl'
			]
		}
	}]
}


------------------
Webpack LESS 
npm i -D less-loader less

...abajo de css
{
	test: /\.less$/,
	use: [ 'css-loader', {
		loader: 'less-loader',
		options: [
			noIeCompat: true
		]
	}]
}


------------------
Webpack PostCSS
npm i -D postcss postcss-loader 

...abajo de css
{
	test: /\.css$/,
	use: [
		{
			loader: 'css-loader',
			options: {
				modules: true,
				importLoaders: 1
			},
		}
		'postcss-loader'
	]
}

Dentro de la carpeta donde estén nuestros CSS (css/postcss.config.js) =>

module.exports = {
	plugins: {
		'postcss-css-next': {}
	}
}




------------------------
Prevenir código duplicado

Siempre hazlo! Ya que si en varios archivos usas una libreria (React), el bundle.js duplicará la libreria. 

En webpack.config.js

const path = require('path')
const webpack = require('webpack')

module.exports = {
  // entry: './index.js',
  entry: {
		vendor: [
			// Librerias que queremos que se empaqueten (common / vendor) a parte
			'react',
			'react-dom'
		],
		index: path.resolve(__dirname, 'src/js/index.js'),
		home: path.resolve(__dirname, 'src/js/home.js')
	}
  output: {
		path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: "expresion regular", use: "loader"}, 
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor", // Nombre del archivo final
			// VENDORS
			minChunks: Infinity, // Para que se generen los vendors sin importar si solo es uno

		})
	]
};

En el index.html llamaremos a dos scripts 

<script src="dist/vendor.js"><script>
<script src="dist/index.js"><script>

En el home.html
<script src="dist/vendor.js"><script>
<script src="dist/home.js"><script>


------------------
Webpack DLL 

Para que las librerias pesadas (lo que pusimos en vendors) no se compilen a cada rato, podemos dejarlos compilados en un lugar.

build:dll : "webpack --config ./webpack.dll.config.js",
build:dll:src : "webpack --config ./webpack.config.js"

=> webpack.dll.config.js

	const path = require('path')
	const webpack = require('webpack')

	module.exports = {
		entry: {
			modules: [
				'react',
				'react-dom'
			]
		}
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			library: '[name]'
		},
		plugins: [
			new webpack.DLLPlugin({
				name: "[name]",
				path: path.join(__dirname, '[name]-manifest.json')
			})
		]
	}


=> webpack.config.js

	const path = require('path')
	const ExtractTextPlugin = required('extract-text-webpack-plugin')
	const webpack = require('webpack') 

	module.exports = {
		entry: {
			home: path.resolve(__dirname, 'src/js/index.js'),
			contact: path.resolve(__dirname, 'src/js/contact.js')
		}
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
		},
		modules: {...},
		plugins: [
			new ExtractTextPlugin('css/index.css'),

			new webpack.DLLReferencePlugin({
				manifest: require('./modules-manifests.json')
			})
		]
	}


----------------------
Cargar modulos Asincronamente 

Es cuando queremos cargar alguna libreria o modulo solamente si es necesario.

npm i -D babel-plugin-syntax-dynamic-import 

test: /\.js$/,
use: {
	loader: 'babel-loader',
	options: {
		presets: ['es2015', 'react'],
		plugins: [ 'syntax-dynamic-import' ]
	}
}


EL módulo se puede cargar asincronamente con un evento (en este caso un boton)

$button.addEventListener('click', async () => {
	const { default: funcionModulo } = await import('/path')
	funcionModulo()
})

















































======================================================
======================================================

                      REACT JS 

======================================================
======================================================


Create React App es de Facebook  


npm install -g create-react-app

create-react-app my-app


El método render recibe dos parametros 

render(componente de react, lugar donde lo voy a colocar)
render(<App />, document.getElementById('root'))


---------------
COMPONENTE

import React, { Component } from 'react'

class Media extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="" alt="" width={ 260 } height={ 160 } />
        </div>
        <h3>Titulo</h3>
        <p>Autor</p>
      </div>
    )
  }
}

export default Media 

----------------
Estilos inline 

import React, { Component } from 'react'

class Media extends Component {
  render() {
		const styles = {
			container: {
				fontSize: 14,
				color: "red"
			}
		}
    return (
      <div style = { styles.container }>
        <div>
          <img src="" alt="" width={ 260 } height={ 160 } />
        </div>
        <h3>Titulo</h3>
        <p>Autor</p>
      </div>
    )
  }
}

export default Media 


-----------------
Clases en archivos externos

import './media.css'

...
return(
	<div className = "Media"
)

-----------------
Propiedades dinamicas 


	=> En index.js
	
	render(<Elemento propiedad1="Propiedad 1"
	 								 propiedad2="Propiedad 2"
									 title="Title Dinamico"	 />, document.getElementById('root'))

	=> En Elemento.js

	class Elemento extends Component {
		render() {
			return (
				<div>
					<div title={this.props.title } ></div>
					<p>{ this.props.propiedad1 }</p>
					<p>{ this.props.propiedad2 }</p>
				</div>
			)
		}
	}


----------------------
VALIDAR DATOS 

npm i -S prop-types

Dentro del componente (en este ejemplo usaremos el componente Media)

import PropTypes from 'prop-types' 
...

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired, // Para que un valor sea requerido
	author:	PropTypes.string,
	funct: PropTypes.func,
	boleano: PropTypes.,
	number: PropTypes.number,
	object: PropTypes.object,
	array: PropTypes.array,
	type: PropTypes.oneOf(['video', 'audio'])// Para validar el string que llega y decirle si queremos video, audio, una imagen, etc.
}

export defaul Media



--------------------------
Event handlers

Para nombrar los eventos usamos camelCase

on + nombre del evento = { this.nombreDeLaFuncion }

Si dentro del handleClick queremos imprimir en pantalla alguna propiedad que nos llega por parametro ( ej. <Media title= "Un titulo dinamido"> ) no podemos hacerlo pues en handleClick no forma parte del DOM, para instanciarlo lo hacemos desde el constructor.
O el handleClick lo ponemos como un arrow function ( Recuerda que heredan el contexto de su padre )


class Media extends Component {
	constructor (props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

			ó

	handleClick(event) {
		console.log(event)
	}
	
	render(){
		return (
			<div onClick= { this.handleClick } > ... </div>
		)
	}
}


---------------------
Estado de los componentes 

En el constructor alojamos el estado
Y para cambiarlo usamos la propiedad this.setState y dentro colocamos los valores que queremos cambiar

class Media extends Component {
	// constructor (props) {
	// 	super(props)
	// 	this.state = {
	// 		author: props.author
	// 	}
	// }
	
	O Borramos el constructor y colocamos 

	state = {
		title: this.props.title
	}

	// Metodo para cambiar el estado => setState({ propiedades: nueva propiedad })
	
	handleClick = (event) => {
		this.setState({
			author: "Otro autor"
		})
	}
	
	render(){
		return (
			<button onClick= { this.handleClick } > { this.state.author } </button>
		)
	}
}


-------------------------------
Ciclo de vida de un componente 

1. Constructor (El componente no se ve) 
		- 1. Podemos iniciar el estado 
		- 2. Enlazar (bind) de eventos
		- 3. Primer metodo que se llama al instanciar el componente 
2. componentWillMount (Aún no se ve)
		- Método llamado inmediatamente antes de que el componente se vaya a montar  
		- Puedes hacer un setState 
		- No hagas llamados a un API o suscripción a eventos
3. render
		- Contiene todos los eventos a renderizar ( estructura del componente )
		- Contiene JSX en el return 
		- Puedes calcular propiedades nCompleto = primerNombre + segundoNombre 
4. componentDidMount 
		- Método llamado luego de montarse el componente (el componente ya está en pantalla)
		- Solo se lanza una vez 
		- Enlazar (bind) de otros datos 
		- Es el primer método que se llama al instanciar un componente 
5. Actualización
		componentWillReceiveProps 
			- Método llamado al recibir nuevas propiedades
			- Sirve para actualizar el estado con base a las nuevas propiedades 
		shouldComponentUpdate
			- {/* Las propiedades que tenia son iguales que las que tengo ? Si, entonces no necesito renderizar nuevamente mi elemento. */}
			- Método que condiciona si el componente se debe volver a renderizar 
			- Utilizado para optimizar el rendimiento 
		componentWillUpdate
			- Método llamado antes de re-renderizar un componente 
			- Utilizado para optimizar el rendimiento 
		render 
			- re-render 
		componentDidUpdate
			- Método llamado luego del re-render
6. Desmontado 
		componentWillUnmount
			- Método llamado antes de que el componente sea retirado de la aplicación.

7. Manejo de errores 
		componentDidCatch
			- Si ocurre un error al renderizar el componente este método es invocado 
			- El manejo de errores solo ocurre en componentes hijos 




---------------------
Listas ( for )

Se ingresan dos llaves { Aqui adentro puedo escribir código js } y se itera sobre los 

const items = this.props.data.categories[0].playlist // Info que nos llega desde el padre
return (
      <div className="Playlist ">
        {
          items.map( ( item ) =>{
            return <Media {...item} key={item.title} />
          })
        }
      </div>
    )



---------------
Componentes Puros vs Funciones 

class ComponentePuro extends PureComponent {
	No se re-renderiza si le llegan los mismos valores
}

function CompFuncional (props) {
	return (
		<div> {props.data} </div>
	)
}

Los componentes funcionales no tienen ciclo de vida, se usan principalmente cuando sólamente albergaran un elemento de la UI que no hará nada. Algo como un template.


----------------------------
Smart Components & Dumb Components
Statefull 		vs 	Puro
Fat 					vs 	Skinny
Container 		vs 	Presentacional Component 


Qué hace => Smart Component (Componente Inteligente)
Cómo se ve => Dub Component (Componente Tonto)


	Presentacional (Dumb)
	- Puede contener smart components u otros componentes de UI
	- Permiten compocisión con { props.children }
	- No dependen del resto de la aplicación 
	- No especifica cómo los datos son cargados o como mutan
	- Recibe datos y callbacks solo con propiedades 
	- Rara vez tiene su propio estado
	- EStán escritos como componentes funcionales a menos que necesiten mejoras de performance

	Container (Smart)
	- Concentrado en el funcionamiento de la aplicación 
	- Contienen componentes de UI u otros componentes 
	- No tienen estilos 
	- Proveen de datos a componentes de UI u otros componentes 
	- Proveen de callbacks a la UI
	- Normalmente tienen estado 
	- Llaman a acciones 
	- Generados por higher order components

---------------------------
Composición de Componentes 

Podemos pasar un componente dentro de otro con props-children

=== en icon.jsx

import React from 'react'

function Icon (props) {  
  return (
    <svg>
      { props.children }
    </svg>
  )
}

=== en otro componente

import Icon from './icon.jsx'

export function Play (props) {
  return (
    <Icon {...props} >
        <path d="M6 4l20 12-20 12z"></path>
    </Icon>
  )
}



Aquí Icon recibiría como props.children a <path ...></path>


===============
Manejo de Errores 






===============
Video API

this.video.duration








limit css loader => a 
webpack index.js bundle.js => c bundñe
lts => long term support 
npm list => b sistema de archivos 
que sistema de modulos => COMMONJS
CommonJS => a sistema de modulos AMD 




/* Paleta Colores #3b8070  #3b8070  #3b8070  #35495e  #FF003C*/

//
Cruz | crucecita &times;