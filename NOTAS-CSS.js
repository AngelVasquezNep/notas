<meta name="viewport" content="width=device-width, initial-scale=1" />


DESARROLLO WEB ONLINE


DESARROLLO WEB ONLINE
Etiqueta		Función
<header></header>	Cabecera de la página

<section></section>	Dividir secciones

<figure>
  <img src/>
</figure>		“Encierra” una sección de imagen

<nav>		           Menú

    <ul>           Lista desordenada

      <li></li>	   Elementos de la lista

    </ul>
    <ol>           Lista ordenada

      <li></li>	   Elementos de la lista ordenada

    </ol>

</nav>

<articule> </articulo>	Cada articulo tiene varios elementos, imágenes, títulos, descripción, etc.

href=””	Son para los link’s. Si ponemos un id dentro del a página, podemos ponerlo “#[nombreID]” y el navegador ira a esa parte del documento.

<link rel=”stylesheet” href=”estilos.css” />	para agregar un archivo CSS que tenga todos los estilos de la página.

Navegar dentro de la pagina
<a href="index.html#guitarras"></a>

Iconos
https://dev.w3.org/html5/html-author/charref
enlace para simbolos de html
Iconos chidos
icomoon





font-size:		     tamaño de fuente
background:		     color de fonto
color: 			       color de las letras
text-decoration:   none; 	sin sobrayado los enlaces
text-decoration:   underline; subrayado
border-radius: 8px radio de las esquinas

background: linear-gradient(to left/right, white, black) para DEGRADAR COLOR DENTRO DE UN ELEMENTO

list-style: none; (para quitar los cheklist del menu)

font-weigth: 600; (negritas): 300; (normal)

--------
SOMBRAS

box-shadow: inset x y difuminado tamaño -->
box-shadow: inset 10px 10px 10px red;
box-shadow: inset  0px  5px  0px red;


EFECTO A BOTON

CLICK =
.button:active{
  transform: scale(.9);
}

FOCO =
.button:focus{
  transform: scale(.9);
}


vertical-align: middle; alinear verticalmente

heredado: inherit;


hacer que un link abra en otra ventana _blank
target="_blank"






FOCALIZAR ELEMENTO

.botoncito{
  cursor: pointer; (Para que un elemento se focalice y le aparezca una manita como si fuera boton)
}


.textarea{
  outline:none; (se pone para que cuando se haga focus sobre el espacio de texto No se ponga azul su caja)
}

input:focus, textarea:focus{
  background: lightgray; (con esto el textarea cambia de color cuando hacemos foco sobre él)
}







//////////////////////////////////////////////////

Tablas

<table>
  <thead>

    <tr>
      <th>Titulo 1</th>
      <th>Titulo 2</th>
      <th>Titulo 3</th>
    </tr>

  </thead>

  <tbody>

    <tr> FILA 1
    	<td>Contenido 1</td>
    	<td>Contenido 2</td>
    	<td>Contenido 3</td>
    </tr>

    <tr> FILA 2
    	<td>Contenido 1</td>
    	<td>Contenido 2</td>
    	<td>Contenido 3</td>
    </tr>

  </tbody>

</table>


table{
  width: 100%;
  background: #00A896;
  color: white;
}

table, th, td{
 border: 1px solid black;
 border-collapse: collapse; (para que no haya lineas dobleas entre los elementos)
}



//////////////////////////////////////////////////




SELECTORES



/Selector universal/
*  {
  border: 1px;
}

/Selector de etiqueta/
body{
  background: #ffba54;
}

/Selector descendente/
article h3 {
  color: #15876a;
}
.guitarras h2{
  font-size: 30px;
}

Selectores de clase: para ello se deben agregar clases en el HTML, siendo específicos, por ejemplo, a SOLO UN h3 ponerle class = "title-a"

.title-a{
   background: #1f5f60;
}

.title-b{
  background: #b4e7e8;
}


/Selector de id/
#header{
  background: orange;
}



//////////////////////////////////////////////////

PROPIEDADES DE LA CAJA

margin
border
padding

content

padding
border
margin


*  {
/Propiedades de las cajas/
  width: tamaño;
  height: tamaño;
  padding: 10px; /Espacio entre el contenido y el borde/
  Para ser más especificos
  padding-top: ;
  padding-right: ;
  padding-bottom: ;
  padding-left: ;
  border: 2px solid black;
  margin: 10px;
  margin-top: ;
  margin-right: ;
  margin-bottom: ;
  margin-left: ;
}




//////////////////////////////////////////////////


BORDES REDONDEADOS

border-radius: 50% (hacerlo un circulo)
border-radius: 100px (un circulo de 100px en cada esquina)
border-radius: 10px 20px 30px 40px (hacerle radio en cada esquina de forma diferente)


//////////////////////////////////////////////////


FOOTER  <footer></footer>

<a href="tel:+5510203040">5510203040</a>

Al colocar el href="rel:" el enlace llamara a la aplicación encargada de realizar llamadas telefonicas que crea más pertinente.

<a href="mailto:contacto@correo.com">E-mail: contacto@correo.com </a>

Al agregar el href"mailto:" junto con el correo, el sistema automaticamente presenta la pagina de correo electronico que tengamos activada.


//////////////////////////////////////////////////


FORMULARIOS

Van dentro de una etiqueta que se llama <form></form>


<label for="text1"></label> (Es lo que acompaña al espacio del formulario, como "nombre", "edad", "escribe algo chido", etc.)

Eso sirve para vincular el label con el input y que cuando lo seleccionemos se haga focus sobre el área de escritura

<input id="text1"  type"text" required value="hola"/> (el required es para que el formulario no se envie si no se llena ese espacio) (El atributo value es para que sea el valor mostrado por defecto)

<input type"email" required />

atributo -placeholder="pon tu nombre" (Es para colocer el valor por defecto del input pero es un valor NO seleccionable) RECOMENDADO

<label for="seleccion">
    <input type="radio" id="seleccion" name="opciones"/>
</label>
Con el name forzamos a que solo se pueda elegir una opcion de las disponibles.


/Opcion multiple/
<label for="intereses">
 <input type="checkbox" id="intereses"  name="intereses" />
</label>


/Caja grande de comentarios/
<label for="comentarios">Comentarios
  <textarea name="comentarios" id="comentarios" cols="30" rows="5" />
</label>

/Boton enviar/
<input type="submit" value="lo que quiero que diga el boton" />

NOTA: A TODOS HAY QUE PONERLES VALUE





Para darle tamaño input text | NO SE PUEDE es a una etiqueta textarea
<textarea cols="30" rows="5" ></textarea>








//////////////////////////////////////////////////

PSEUDOELEMENTOS


Para agregar otro elemento al contenido de HTML, algo como un simbolo especial, se usa:

.menu li: after{
	content: "|";
}

En este ejemplo el elemento | aparecera despues de lo que tenga el li de menu.



//////////////////////////////////////////////////

PORTADA

.portada{
  background-image: url("images/backgrund.png");
  background-size: 100% o cover;
}

cvander
.container{
  height: 100vh;
  width: 100vw;
  background-image: url("images/backgrund.png");
  (background-position: alineado horizontalmente + alineado verticalmente)
  background-position: center bottom;
  background-repeat: no-repeat;

}


//////////////////////////////////////////////////

STICKY FOOTER

Para que el footer quede hasta abajo aun cuando el contenido no sea el suficiente.


colocarle a body{
  min-height: 100vh;
}


flex: 1; (colocado a la seccion que queremos ocupe el espacio sobrande)






POSITIONS


-Position: relative; se mueve dentro de su “caja”
top: ; (Podemos moverlo a mano con pixels)
left: ; …


-Positions: absolute; No respeta su caja sino que se va al próximo elemento RELATIVO (que su padre tenga position: relative; y margin: 0px auto) (Tambien podemos moverlo a mano con pixels)


-Position: fixed; (Sirve para FIJAR un elemento al scroll, como si
quisiéramos fijar el



FLOAT


Para que flote dentro de su “caja” a la izquierda, derecha, etc.

	Float: rigt; …







//////////////////////////////////////////////////





DISPLAY (Al final de esta nota viene un ejercicio para practicar en codepen.io)



-Display: (hay muchos display)
 Block;
 Inline-block;
 Flex;

-  justify-content: space-around, space-between, center, flex-end, flex-start, inherit, initial, left, normal, right, space-evenly, start, stretch,
-  flex-wrap: wrap, nowrap, wrap-reverse,
-  flex-direction: row, column, row-reverse, column-reverse,
-  align-items: center, end, flex-end, flex-start, inherit, initial, left, normal, right, safe, self-end, self-start, start, stretch, unsafe, unset,


vertical-align: middle; alinear verticalmente



Notas

.padre{

  -display:flex;
(hace que los hijos se coloquen uno a lado del otro y que se redimensionen conforme se hace más pequeña o grande la pantalla)


  -justify-content: flex-start, flex-end, CENTER, space-around, space-between,
    Distribucion del contenido


  -flex-wrap: wrap; (para que no se redimensione, sino que se coloquen por debajo)

  -flex-direction: column, wrap, (la direccion de los elementos, en fila o columna)

  -align-items: center;
    Alineado de los elementos.
}



CODEPEN.IO

<div class="padre">
  <div class="hijo1"><p>LOGO</p></div>
  <div class="hijo">
    <div class="nieto"></div>
    <div class="nieto"></div>
  </div>
  <div class="hijo">
  </div>

</div>


.padre {
  border: 5px solid red;
  display: flex;
  justify-content: center;
  position: relative;
  /*PARA CENTRAR CONTENIDO*/
  margin: 0 auto; 
  flex-wrap: wrap;
}

.hijo1{
  width:100px;
  height: 100px;
  background:red;
  border: 3px solid blue;
  left: 40px;
  top: 2%;

  /*Alineacion*/
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}

.hijo{
  width:200px;
  height: 200px;
  background:green;
  border: 3px solid blue;
  margin: 0px 10px;

  display: flex;
  justify-content: center;
  flex-direction: wrap;
  align-items: center;

}

.nieto{
  width:50px;
  height: 50px;
  background: skyblue;
  border: 3px solid blue;
}


//////////////////////////////////////////////////












//////////////////////////////////////////////////



/Transiciones y transformaciones con CSS/


Propiedades que podemos cambiar
-background-color
-background-position
-background-size
-border-color
-border-width
-color
-border-radius
-font-size
-font-weight
-font-width
-left right bottom top
-padding
-opacity


TRANSICIONES


.transicion{
 transition: 3s opacity ease
	ó
 transition-duration:;
 transition-property:;
 transition-timing-function:; (aceleración) 				linear, ease…

}

Para que funcione, damos un valor inicial a las propiedades


.opacity{
  opacity: 0; (para que no aparezca en la pantalla)
  opacity: 1; (máximo valor, totalmente mostrado en   pantalla)

{

.opacity:hover{
opacity: 1; (si es que inicio en cero o cero si es que inicio en 1)
}

.fuente{[AQUÍ INSERTAMOS LOS VALORES INICIALES]}

.colores{[AQUÍ INSERTAMOS LOS VALORES INICIALES]}
Y DESPUES PARA MODIFICARLOS CON EL TRANSITION

.fuente:HOVER{
	font-size: 20px;
	font-weight: 600;
}



/Transformaciones/


Tenemos que agregar a la clase un “transition” para indicar el tiempo y en el hover colocar cualquiera de las siguientes propiedades:

.rotacion:hover{
	transform: rotate(360deg); (Colocar los grados)
}

.escala:hover{
	transform: scale(2); (la escala inicial de un objeto es de 1, al colocar 2 el elemento será el doble de grande, si se coloca .5 reducirá su tamaño)
}

.sesgado:hover{
	transform: skew(45deg); (Nota: al poner 90deg la imagen desaparece)
}

.traslacion{
 transform: translate3d(ejexpx, ejeypx, ejezpx);
 transform: translateX(50px);
 transform: translateY(50px);
}

.mixtas:hover{
	transforme: rotate(360deg) scale(2) skew(45deg); (se separan solo con espacio)
}



//////////////////////////////////////////////////

Animaciones AVANZADAS con HOVER


.menu{
  transition: 1s;
  background: white;
  OVERFLOW: HIDDEN; (para que lo que se salga del menu no se vea)
}

.menu img{
  transition: 1s;
}

.menu:hover{
  background: skyblue;
}

.menu:hover img{
  transform: scale(2);
}

Con eso al desplazarnos encima del menu, automaticamente la imagen (sin necesidad de llegar hasta ella) se hará más grande.





//////////////////////////////////////////////////


ANIMACIONES

.cvander:hover{
  animation: .5s animacion1 (infinite);
}

(Si no se coloca infinite, solo se reproduce una vez)

@keyframes animacion1 {
    /*from - to*/

    from{
      border: 1px solid black;
    }
    to{
      border: 10px solid red;
    }

    /*0% -50% 100%*/

    0%{
    }
    50%{
    }
    100%{
    }

}














//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


NOTAS ADICIONALES

<div class="contenedor">
   <div class="cvanderland">
	<div class="cvander">
		<img class="cabeza" />
		<img class="cuerpo" />
		<img class="ipad" />
	</div>
   </div>
</div>



.vanderland{
	width: ancho de la imagen;
	height: alto de la imagen;
	background-image: url("");
	background-position: center;
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	margin: 0 auto;

}

.container{
	heigt: 100vh;
	width: 100vw;
}

.cvander {
  position: absolute;
  left: 0;
  botton: 0;
  overflow: hidden;
}

.cabeza{
  position: absolute;
  left: 0;
  botton: 0;
}

.cuerpo{
  position: absolute;
  left: 0;
  botton: 0;
}

.ipad{
  position: absolute;
  left: 0;
  botton: 0;
}





-----------------------------------------------------------------------------
                            CLASE EN VIVO 1
-----------------------------------------------------------------------------


Recuerda que para centrar el contenedor con display block se puede centrar usando.


.portada{
  margin: 0 auto;
}

.blog-items{
  display: flex;
  flex-wrap: wrap; //Con esto hacemos que cuando el elemento no tenga espacio, se pase a la siguiente linea.
}

Si quieres que un enlace tenga altura y ancho, debes procurar cambiarle el display ya que por defecto tienen inline:
a{
  width: inherit;
  display: block;
}

Para hacer un hover chido:

nav a{
  ...
  border-top: 5px solid transparent;
}

nav a:hover{
  border-top: 5px solid red;
}

O con shadow

nav a:hover{
  box-shadow: donde x y difuminado color;
  box-shadow: inset 0px 5px 0px red;
}







EFECTO PARRALLAX

window.addEventListener("scroll", function(){
  console.log(window.scrollY)
  })

Recuerda que si vas a mover algo debes agregarle su medida "px", "em", "rem"

$elemento.style.backgroundPosition = window.scroll+"px"


$elemento.style.transform = `rotate(${window.scroll}deg)`
$elemento.style.transform = 'rotate('+ window.scrolldeg+'deg)'














------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
                                          RESPONSIVE DESING
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------












SIEMPRE AGREGAR


<meta name="viewport" content="width=device-width, initial-scale=1" />



//////////////////////////////////////////////////

RESPONSIVE DESIGN

-Son todas las técnicas o patrones que usamos para adaptar nuestras aplicaciones web a la mayor cantidad de dispositivos (mejorando así la experiencia del usuario)

    Hoy tenemos:
	-Multiples smartphones, pantallas, 	eficiencia del uso de datos.


-Patrones de diseño

	-Tyne tweaks: Sencillo
	http://futurefriendlyweb.com
	Es para páginas con sólo imagenes y/o 		texto, ocupan todo el espacio.

	-Mostly fluid: MEDIO

	http://www.antarcticstation.org
	el contenido se adapta al 	tamaño de 		la pantalla, como en forma de 	columna.

	-Column drop: MEDIO

	modernizr.com
	Si la pantalla es pequeña, será una sola 		columna de contenido, si crece, se harán 		más columnas un a lado de la otra.

	-Layout shifter: COMPLEJO

	https://foodsense.is
	Es una disposición de contenido muy 			diferente para cada tamaño, de tal forma 		que no solamente las columnas caigan, sino 	que el menu pase a estar arriba, el logo 		decrezca, etc.
	Es un diseño fijo que responde a las 			necesidades del espacio.

	-OFF Canvas

	Parece estar dirigido a celulares pues 	reacciona a los gestos de movimiento de 	los dedos de izquier a derecha para sacar 	(por ejemplo) el menu que esta 	"escondido", o para cambiar de página 	yendo de  derecha a izquierda.


	Disposicion para celulares

	-Portrait: Vertical
	-Landscape: Horizontal

	-viewport: Área visible del navegador


	Medidas Absolutas:
	-Pixeles = px

	Medidas relativas:
	-Porcentaje = %
	-Altura de fuente: em (mide el tamaño de 	fuente que tenga el padre)
	-Root-em = rem (Responde al elemento 	superior del DOM (html)

	Viewport height = vh altura
	Viewport width = vw ancho


	DENSIDAD DE PIXEL // Retina display

	Son la cantidad real que hay de pixels por 	cada pixel


	TAP // touch events

	touchstart

	Gestos
	    -movimiento de dedo, número de 			    taps, número de dedos en la 			    pantalla.

	Estrategias

	    -Graceful Degradation: desktop first
	    -Progressive enhancement: mobile first


	CARGA DEL SITIO WEB (tiempo de carga)

	    -podemos revisar la velocidad de carga 	     en developers.google.com/ pagespeed



//////////////////////////////////////////////////


	MEDIA QUERY


Llamar hoja de estilos extra:

<link rel="stylesheet" media "(max-width: 800px)" href="css/media-quieri.css" />
El MAX-WIDTH: 800px le dice al navegador que se aplique ese media-queri desde los 0px hasta los 800px y que cuando pase de 800px se aplique otra cosa.


Dentro de la hoja de estilos:

@media (tipo de media query) and (condicion) {
	Condiciones declaradas de CSS
}

@media screen and (max-width: 800px){

	body{
	   background: green;
	}

}


//////////////////////////////////////////////////


Si ponemos un width (ancho) de 100%, este tomara el 100% disponible y AUMENTARA LAS PROPIEDADES DE SU CAJA, ya que si tiene un padding de 20px este se le sumara al ancho y se vera feo.

Es mejor utilizar width: auto; ya que SI contempla el modelo de caja para elemento internos, para background, menu o algo asi, 100% esta bien.



.contenedor{

max-width: 800px;
width: auto;

/*con esto tenemos un contenedor de 800px pero si la pantalla mide menos, tomara el ancho automatico*/

}



Para seleccionar una etiqueta y una propiedad de la etiqueta que querramos modificar:

input[type="radio"], input[type="checkbox"]{
    zoom: 1.5;
}

zoom: 1.5; aumenta un 50% el tamaño de los radio button ( o de cualquier otro elemento)




BURGER MENU


Iconos chidos
icomoon.io
para las tipografias de los botones



<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>

aumeta wiewport es el área visible del navegador para que se vea bien en cualquier navegador

user-scalable = es para que se pueda (o no) hacer zoom con los dedos, como nuestra pagina ya esta full diseñada para smartphone, le ponemos que no se pueda hacer zoom.




$variable.addEventListener("event", function);
$variable.removeEventListener("event", function);






añadir clases con javascript

$variable.classList.add("");
$variable.classList.remove("");







Optimizar imágenes con LAZY LOADING

[be]Lazy.js

dinbror.dk/blazy/

<script src="usando cdnjs.com buscamos la libreria blazy, copiamos y pegamos el link"></script>


var bLazy = new Blazy({
    // options
});

var bLazy = new Blazy({
      selector: "img"
    });

Va sin ; despues del img... y a las imagenes debemos agregarles data y SIEMPRE DEBEN TENER EL ALT="nombre imagen":

<img src="images/imagen.png" />
<img data-src="images/imagen.png" />



cdnjs.com

(aqui podemos buscar librerias para no tener que descargarlas, nos da un link y lo agregamos a nuestro documento, en este ejemplo usamos un js=





Para cargar imagenes retina

<img src="images/invie.png" srcset="images/invie.png 1x, images/invie2x.png 2x" width="" atl="logo" />

Con srcset cubrimos las pantallas de celular con 1 y 2 retina, en SKETCH se pueden importar las imagenes con esos pesos.


<img data-src="images/invie-acustica.png|images/invie2x.png" alt="guitara a" />

@media screen and (-webkit-min-device-pixel-ratio: 2){
	Aquin ponemos las cosas que necesitamos para pantallas de 2x retina

}

al background de portada siempre agreguemos un color para que el color cargue aunque la imagen tarde un poco más.

.background{
  background-color: skyblue;
  background-image: url("../images/backg.png");
  background-size: cover;
}




TABLAS RESPONSIVE

En caso de contruir una tabla que sea muy grande para una pantalla pequeña, agregaremos

<section class="tabla">
    <div class="contenedor">
	<table>...</table>
    </div>
</section>


.tabla{
    margin: 50px 20px;
}


.tabla .contenedor{
	overflow: auto;
    	//overflow: hidden; es para ocultar lo 		que se sale
	border: 1px solid red;
}



REMOVE DEBUGG (quitar los bugs en moviles)

para ello debemos utilizar chrome en android tanto en el cel como en la lap y para IOs se usa zafari.




GESTOS

hammerjs

https://hammerjs.github.io

Hammer.js sopports most common single and multi-touch gestures, and is fully extendable to add custom gestures.

-Rotate
-pinch
-press
-pan
-tap
-swipe



var hammertime = new Hammer(myElement, myOptions);
hammertime.on('pan', function(ev) {
	console.log(ev);
});


Ejemplo para quitar y poner el menu con gestos


var $body = document.body;

    var gestosMenu = new Hammer($body);

    gestosMenu.on('swiperight', toggleMenu);
    gestosMenu.on("swipeleft", toggleMenu);


NOTA

Para quitar y poner el boton, podemos agregarle el display: none; y en el media quieri que queramos que se vea colocarle el display: block; o el que sea necesario.



$nombre-de-variable.classList.toggle('elemento que quiero hacer toggle')
$menu.classList.toggle('active')


 







Optimizar carga del sitio web


PageSpeed de google
Ahí nos díra como corre nuestra página y las cosas que debemos arreglar.


Optimizacion del tamaño de imagenes

tinypng.com



Para optimizar CSS // Critical CSS

Se abre un <style></style> en el head donde incluyamos los aspectos visuales básicos de la página y por debajo de los <script></script> y antes de que acabe </body> colocar el <link rel="stylesheet" href="micss.css" />


En el primer <style></style> debemos introducir el critical, para ello nos apoyamos de una busqueda en google: "critical path generation css"

https://jonassebastianohlsson.com/criticalpathcssgenerator/

paso 1: pegamos el link de nuestra pag
paso 2: pegamos todo el css
paso 3: copiamos todo el css critical

paso 4: "minifier" (o algo así se llama)
https://csscompressor.com
paso 5: pegar y recibir
paso 6: incentar el codigo en <script></script>



Optimizar fuentes // carga ASINCRONA

ir a google.com/fonts

y al buscar las fuentes TENEMOS que dar CLICK en ADD TO COLLECTION
le damos use

para importar no las vamos a llevar como un link sino como un JS, le damos en esa opcion y copiamos todo el contenido.
Pegamos el <script></script> antes de nuestros demas <script> de la página.



Minificar CSS // CSS compressor // https://csscompressor.com

Copiamos y pegamos TODO nuestro css, lo que nos arroje lo guardamos en otro css y a ese nuevo CSS es al que llamamos desde nuestro html.



png-pixel.com

convierte tu imagen en un pixel o en CSS.
O base 64


Carga Lazy Lowdie con animación

Cuando agregamos new Blazy a las imagenes, se agrega una clase .b-loaded

entonces haremos las transiciones en

img.bloaed{
	transiciones que querramos respetando el hecho del tiempo
}


en loading.io

podemos agregar iconos de "cargando" para las imagenes.

para eso metemos todas las imagenes (una por una) de carga en una etiqueta
<figure>
	<img></img>
</figure>



figure{
	background-image: url("direccion de la 		imagen descargada de loading.io");
	background-repeat: no-repeat;
	background-position: center;
}


Si asignamos un tamaño a una imagen y queremos que no se deforme, podemos usar:

img{
	object-fit: cover;
	width: 100%; (con esto la img se hace 	response)
}

figure{ (el padre de la img)
	max-width: xcantidadpx; ( y con esto la 	img sigue esponsive)
}


<figcaption></figcaption> es la etiqueta que acompaña a un img y es como su "nombre" que la acompaña, igual que en los formularios








MEDIDAS MEDIA QUERYS

1024
768
600
500
400

iPhone 4 y 4S:                                     320 x 480
iPhone 5 y 5S:                                     320 x 568
Nexus 5:                                           360 x 598
Galaxy S3, S4, S5:                                 360 x 640
iPhone 6:                                          375 x 667
Nexus 4:                                           384 x 598
iPhone 6+:                                         414 x 736

-iPad todos los modelos, así como iPad Mini:      1024 x  768
Galaxy Tab 2 y 3 (10.1 pulgadas):                  800 x 1280
Microsoft Surface W8 RT:                           768 x 1366
Microsoft Surface W8 Pro:                          720 x 1280
Galaxy Tab 2 y 3 (7.0 pulgadas):                   600 x 1024
Nexus 7:                                           603 x  966























/**/

OTRAS COSAS CHIDAS

.clase:nth-child(2n){
  Con esto seleccionamos a todos los elementos de esa clase que sean pares
}
.clase:nth-child(2n-1){
  Con esto seleccionamos a todos los elementos de esa clase que sean impares
}

.algo{
  box-sizing: border-box;
}








==============================================================================
                              {CSS GRID}
==============================================================================


.contenedor{
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto); /*para que las columnas que se creen tengan esa medida*/

  /*Acomodar elementos*/
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;

  grid-column: 1 / 4;
  grid-row: 1 / 3;

  /*Acomodar elementos con grid area*/
  grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end;
  grid-area: fila / column / fila / column;
  grid-area: 1 / 1 / 3 / 4 ;

  /*grid-template-areas*/
  Cada hijo en la propiedad template-area: hijo1 denen tener nombre;

  grid-template-areas:
    "hijo1 hijo1 hijo2"
    "hijo1 hijo1 hijo2"
    "  .     .   hijo2"


  /*Espacio entre tracks*/
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-gap: 1rem;
  grid-auto-flow: dense; // Con esto hacemos que las cajas ocupen se acomoden mejor, que llenen los espacios faltantes
}

Parece que si queremos anidar grillas, debemos usar:

.box1{
  display: subgrid;
}

Si dos elementos se superponen (z-index) el elemento que se declaro despues de otros, tendra un index mayor


Position absolute dentro de un grid

.padre{
  position: relative;
}
.hijo{
  position: absolute;
  width: 100%;
  height: 100%;
  /*Off canvas*/
  /*top: -100%;*/
  left: -100%;
}


Si a un hijo de grid le pones display: contents; sus hijos de ese elemento entraran dentro de la grilla.




Quizá algún día sirva, para escribir en forma vertical, usamos:
<p style:"writing-mode:vertical-rl"></p>
    horizontal-tb
    vertical-rl
    vertical-lr
    sideways-rl
    sideways-lr

.box{
  writing-mode: vertical-lr;
}









/*----------------------CSS GRID--------------------------------*/

















/*------------------------Etiquetas CSS-----------------------------*/

<p title="Yo aparezco cuando ponen el cursor sobre mi">Hola</p>


Todos los atributos de CSS MDN
https://developer.mozilla.org/es/docs/Web/CSS/Referencia_CSS

-----------------------------------------------------------
                  CONTADORES CON CSS
-----------------------------------------------------------

<div class="tabla">
  <ol>
    <li>item</li>          <!-- 1     -->
    <li>item               <!-- 2     -->
      <ol>
        <li>item</li>      <!-- 2.1   -->
        <li>item</li>      <!-- 2.2   -->
        <li>item           <!-- 2.3   -->
          <ol>
            <li>item</li>  <!-- 2.3.1 -->
            <li>item</li>  <!-- 2.3.2 -->
          </ol>
        </li>
        <li>item</li>      <!-- 2.4   -->
      </ol>
    </li>
    </ol>
</div>

.tabla ol {
  counter-reset: section;
  list-style-type: none;
}

.tabla li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
}




------------------------

Pseudo Elementos

-Cuando se selecciona
.algo:active{
  background: #41b883
}

-Para chequear botones
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 2px rgb(255, 6, 118);
}
.algo:checked{
  box-shadow: 0 0 0 2px rgb(255, 6, 118);
}

-Seleccionar el primer elemento
p:first-child{
  color: red;
}

-Iluminar un imput
.algo:focus{
  box-shadow: inset 0 0 5px rgb(7, 249, 191);
}

-Iluminar todo el formunario
form:focus-within{
  background: rgba(151, 224, 251, 0.73);
}

-Si nos posicionamos sobre un elemento
.algo:hover{
  background: red;
}


--RANGOS--
En caso de querer marcar un rango lo hacemos de la siguiente forma:

<input type="number" name="" min="1" max="10" id="x" class="algo" value="1" >
<label for="x">You're: </label>

.algo{
  color:white;
}

.algo:in-range{
  background: green;
}

.algo:out-of-range{
  background: red;
}

input:in-range + label::after {
  content: 'okay.';
}

input:out-of-range + label::after {
  content: 'out of range!';
}


-Con un input de algún tipo en especifico como email, tel, link, etc, para indicar si es valido o no.

<form action="">
  <label for="">Enter your email</label>
  <input type="email" name="" id="" class="algo" value="" required>
  <input type="submit" value="Enviar">
</form>

input:valid {
  background-color: #ddffdd;
}

form:invalid {
  border: 5px solid #ffdddd;
}


-Último elemento
.algo:last-child{
  border: 1px solid rgb(187, 128, 155);
}

-No afectar a un elemento en especifico
p:not(#p1){
  color: red;
}

-Elementos pares o impares

.algo:nth-child(odd){
  /*Pares*/
}
.algo:nth-child(even){
  /*Impares*/
}
.algo:nth-child(7){
  /*Septimo elemento*/
}
.algo:nth-child(3n){
  /*Elemento 3, 6, 9...*/
}


-Indicar que link ya se visitó

a{
  color: white;
}
a:visited{
  color: red;
}

-Agregar contenido antes(::before) o después (::after)

p::before{
  content: "Hola "
}

p::after{
  content: " Hola"
}

-Dar estilo especial a la primera letra

p::first-letter {
  color: red;
  font-size: 130%;
}

-Para dar un estilo distinto al texto que se selecciona

p::selection {
  color: white;
  background: blue;
}

-Sombra en el texto
.algo{
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;
}



-box-shadow

.algo{
  /* box-shadow: inset x y radio color; */
  box-shadow: inset 100vw 0px 40px rgb(30, 112, 124);
}

Animacióm de carga con box-shadow

<p id="algo">Cargando... </p>

p{
  text-align: center;
  animation: 10s cajita infinite;
  transition: 1s;
}
@keyframes cajita{
  0%{
    box-shadow: inset 0px 0px 0px rgb(30, 112, 124);
  }
  100%{
    color: white;
    box-shadow: inset 100vw 0px 40px rgb(30, 112, 124);
  }
}

-Alto de linea

p{
  line-height: 2em;
}

-OverFlow

.algo{
  overflow: auto; /*Scroll*/
  overflow: hidden /*No se ve*/
  overflow: visible; /*Se sale*/
}












GENERAR VARIABLES EN CSS

:root{
  --nombredevariable: atributo;
  --colorgeneral: green;
}

.algo{
  background: var(--colorgeneral);
}




































































/*------------------------Etiquetas CSS-----------------------------*/










-----------------------------------
EVENTOS DEL DOM

EVENTOS del ratón (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
EVENTOS táctiles (TouchEvent): touchstart, touchmove, touchend, touchcancel
EVENTOS del teclado (KeyboardEvent): keydown, keypress, keyup
EVENTOS de formularios: focus, blur, change, submit
EVENTOS de la ventana: scroll, resize, hashchange, load, unload
