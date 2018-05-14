Temas a explorar: 

Crear formas poligonales:

  - clip-path: polygon(0 44%, 62% 0, 142% 100%, 0 78%); Para crear poligonos 

Que las imagenes se distribuyan de la mejor forma:

  - object-fit: cover;


En CSS Grid Layout parece funcionar para que todo se aline de una forma interesante, se usa sobre los hijos del grid. (como si fueran una columna continua)

  break-inside: avoid-column;

Escribir en diferentes direcciones (El ejemplo es en vertical):

  writing-mode: vertical-rl;

Letras en diferentes direcciones 

  text-orientation: upright;

Hacer que el texto esté justificado: 

  text-align: justify;

Hacer que el texto rodee el contorno de una imagen: 

  shape-outside: circle();
  shape-outside: ellipse(); => ej: ellipse(50% 50%);
  shape-outside: border-box;
  shape-outside: inset(0px round 120px) border-box;
  shape-outside: url('imgUrl');
  shape-margin: 30px;
  shape-outside: polygon(nonzero, 0 44%, 62% 0, 142% 100%, 0 78%);

Hacer que una imagen tenga sombra definida

  - filter: grayscale(70%) contrast(1.2) drop-shadow(40px 10px 0 rgba(0,0,0,.3) ); 

Hace que se puedan ver el fondo (algo como si pusieras un background degradado en alpha)

  - mix-blend-mode: multiply; (puedes usar también hue y hace que la imagen quede por encima del color de backgrund, pero el texto y lo demás sigue por encima de la imagen.)

Lineas tipo cebra (te recomiendo usarlas en ::after o ::before)

  - background: repeating-linear-gradient(90deg,#000,#000 50%,transparent 50%,transparent 100%);
  - background-size: 12px 100%;
  - align-self: stretch;
  - z-index: 0;

Sombra al texto: 

  - text-shadow: 5px 0 2px rgba(0,0,0,.3);






--------------------

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




Cambiar color background | color degradado | elipse 

background: linear-gradient(to left/right, white, black) para DEGRADAR COLOR DENTRO DE UN ELEMENTO
background-image: radial-gradient(ellipse farthest-corner at 45px 45px , #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%);
background-image: radial-gradient(farthest-corner at 45px 45px , #FF0000 0%, #0000FF 100%);


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
  outline:none; (se pone para que cuando se haga focus sobre el espacio de texto No se ponga el recuadro azul su caja)
}

input:focus, textarea:focus{
  background: lightgray; (con esto el textarea cambia de color cuando hacemos foco sobre él)
}






Para cambiarle el titulo al documento

document.title = "HOLA MAMA"







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





Para que un formulario no valide el correo de imediato colocamos novalidate


<form action="" method="" novalidate>
  ....







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





Si queremos que una imagen este fija en el fondo: 

.imagenSeleccionada{
  background: url('imagen.png'), #000;
  background-size: cover;
  background-attachment: fixed; => Con esto la imagen se quedara fina de fondo, significa que si 
  se hace scroll no se movera.
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

	Float: right; …







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

  -flex-direction: column, row, (la direccion de los elementos, en fila o columna)

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







EFECTO PARALLAX

window.addEventListener("scroll", function(){
  console.log(window.scrollY)
})

Recuerda que si vas a mover algo debes agregarle su medida "px", "em", "rem"

$elemento.style.backgroundPosition = window.scroll+"px"


$elemento.style.transform = `rotate(${window.scroll}deg)`
$elemento.style.transform = 'rotate('+ window.scrolldeg+'deg)'






Con la etiqueta <pre> </pre> podemos escribir información JSON y que se 
respete la indentacion.

En el css usamos 

pre{
  word-wrap: break-word;
  white-space: pre-wrap;
}





Para setear atributos con JS

import platziImg from 'path'
const img = document.createElement('img')
img.setAtribute('src', platziImg)







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


&#9776; => Ese es el UTF-8 del Burger menu


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


<figcaption></figcaption> es la etiqueta que acompaña a un img y es como su "nombre", igual que en los formularios








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

  grid track => Espacio entre dos lineas adyacentes, filas y columnas 
  grid cell => Espacio en dos filas adyacentes y 2 columnas adyacentes

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
  Cada hijo en la propiedad template-area: hijo1 deben tener nombre;

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







=====================================================

                CURSO CSS GRID 
                                        1 Marzo 2018
=====================================================

.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
  grid-template: filas / columnas;
  grid-gap: filas / columnas;
}



MEDIDAS 

fr => fracción
auto => distribuir el espaciado que tiene el elemento con respecto a su contenido

repeat(3, auto)
minmax(100px, 1fr)


GRID TEMPLATE AREAS 

.container {
  display: grid;
  grid-template-areas: 
  "header header"
  "left contenido"
  "footer footer"
}

.container .hijo {
  grid-area: header; => Sin comillas
}

                ó

.hijo2 {
  grid-column: fila-de-inicio / fila-de-final;
}

.hijo3 {
  grid-column: fila-de-inicio / span 3 ;    => Esto medirá 3 columnas 
  grid-column: 1 / -1 ;                     => Ocupa todo el ancho  
}


Filas 

.hijo3 {
  grid-column: fila-de-inicio / span 3 ;    => Esto medirá 3 columnas 
  grid-column: 1 / -1 ;                     => Ocupa todo el ancho  
  grid-row: fila de inicio / fila de fin;
}


NOMBRAR LINEAS 

Se colocan entre corchetes intercalandolos en los valores de las lineas

.elemento {
  grid-template-columns: [inicio] 1fr [linea2] 1fr [linea3] 1fr [fin];
  grid-template-rows: [inicio] 1fr [segundafila] 1fr [final];
}

.hijo {
  grid-column: inicio / linea3; 
  grid-row: inicio / final;
}



GRID IMPLICITO 

grid-auto-flow: row; => Valor por defecto, le dice al navegador que si tengo más elementos de los que contemple, los apilará en filas (y no en columnas).

Para el grin implicito usamos 

.elementoPadre {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: 200px;
}

Si no colocamos grid-template-rows las columnas ocuparan de manera equitativa el alto del padre.



ALINEACION DE CONTENIDO | Alineacion grid | Alineamiento grid

Para alinear cada elemento de la grilla: 

Alineado horizontal => justify-items: start end center stretch; stretch está por defecto 
Alineado vertica => align-items: start end center stretch; stretch está por defecto



Para alinear a toda la grilla ( .container ): 

justify-content: start end center stretch space-around space-between space-evenly;
align-content: start end center stretch space-around space-between space-evenly;

USA SPACE-EVENLY !! hace que entre cada elemento exista el mismo espacio libre.



RESPONSIVE 

grid-template-columns: repeat(auto-fill, 250px);




















/*----------------------CSS GRID--------------------------------*/

















/*------------------------Etiquetas CSS-----------------------------*/

Cosas chidas de css 
Cosas chidas css 

user-select: none => para que el texto no se pueda seleccionar (boton )

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
- Texto seleccionado

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









--------------------------------------------------------
EVENTOS DEL DOM

EVENTOS del ratón (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
EVENTOS táctiles (TouchEvent): touchstart, touchmove, touchend, touchcancel
EVENTOS del teclado (KeyboardEvent): keydown, keypress, keyup
EVENTOS de formularios: focus, blur, change, submit
EVENTOS de la ventana: scroll, resize, hashchange, load, unload







---------------------------
Eventos del DOM

window.addEventListener('visibilitychange', ()=>{
    document.hidden ? console.log("Estoy dentro de la pestaña") : console.log("Cambie de pestaña") 
  })

window.addEventListener('visibilitychange', ()=>{
	if(document.visibilityState == 'prerender'){
		console.log("El caso de Prerender")
	}else if(document.visibilityState == 'hidden'){
		console.log("El caso de Hidden")
	}else if(document.visibilityState == 'visible'){
		console.log("El caso de Visible")
	}
})



---------------------------------


AnimatedScrollTo with jquery

    document.getElementsByTagName('button')[0].onclick = function () {
      scrollTo(document.body, 0, 1250)   
    }
        
    function scrollTo(element, to, duration) {
        let start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
            
        let animateScroll = function(){        
            currentTime += increment
            let val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val
            if(currentTime < duration) {
                setTimeout(animateScroll, increment)
            }
        };
        animateScroll()
    }

    //t = current time
    //b = start value
    //c = change in value
    //d = duration

    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2
      if (t < 1) return c/2*t*t + b
      t--
      return -c/2 * (t*(t-2) - 1) + b
    }











SCROLL with jquery

<button id="botoncito" href="#objetivo">Mover</button> 

document.getElementById('botoncito').addEventListener('click',()=>{
  const $objetivo = document.getElementById("objetivo")
  $objetivo.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})


Si quieres que un enlace tenga esa propiedad, le agregas: 

<a id="botoncito" href="#objetivo" onclick="prevent(event)" >Mover</a> 


const prevent = (evt) => evt.preventDefault()








Carrucel sin jquery

body{
  margin: 0;
  background: #f5f5f5;
}

.slider {
  width: 100%;
  margin: 0;
  overflow: hidden;
}

.slider ul {
  display: flex;
  padding: 0;
  width: 400%;
  
  animation: cambio 20s infinite alternate linear;
}

.slider li {
  width: 100%;
  list-style: none;
}

.slider img {
  width: 100%;
}

@keyframes cambio {
  0% {margin-left: 0;}
  10% {margin-left: 0;}
  
  20% {margin-left: -100%;}
  45% {margin-left: -100%;}
  
  55% {margin-left: -200%;}
  80% {margin-left: -200%;}
  
  90% {margin-left: -300%;}
  100% {margin-left: -300%;}
}



<div class="carrucel">
  <ul>
    <li>
      <img src="" alt="Imagen1">
    </li>
    <li>
      <img src="" alt="Imagen2">
    </li>
    <li>
      <img src="" alt="Imagen3">
    </li>
    <li>
      <img src="" alt="Imagen4">
    </li>
  </ul>
</div>






Carrucel con JS 

Cambia los colores de fondo, pero podríamos mejorarlo para que cambie el background-image 

.a { background-color: darkblue;  }
.b { background-color: salmon;    }
.c { background-color: seagreen;  }
.d { background-color: rosybrown; }
.e { background-color: yellow;    }

<div class="containerCarts">
  <div class="cartas a"> 0 a</div>
  <div class="cartas b"> 1 b</div>
  <div class="cartas c"> 2 c</div>
  <div class="cartas d"> 3 d</div>
  <div class="cartas e"> 4 e</div>
</div>
<button id="botoncito">next</button>


const $cartas = Array.from( document.getElementsByClassName('cartas') )
const $botoncito = document.getElementById('botoncito')

let contador = 1

$botoncito.addEventListener('click', () => {
  contador++
  $cartas.forEach((carta, index) => {
    if(index + contador == 0 || index + contador == 5) carta.className = 'cartas e'
    else if(index + contador == 1 || index + contador == 6) carta.className = 'cartas a'
    else if(index + contador == 2 || index + contador == 7) carta.className = 'cartas b'
    else if(index + contador == 3 || index + contador == 8) carta.className = 'cartas c'
    else if(index + contador == 4 || index + contador == 9) carta.className = 'cartas d'
    if (contador > 4)  contador = 0
    
  })
  console.log(contador)
})






















---------------------------------------------------
---------------------------------------------------
---------------------------------------------------


Eventos de WINDOW

---------------------------------------------------
---------------------------------------------------
---------------------------------------------------

-Colocamos las coordenadas a las que quremos ir 

window.scroll(x-coord, y-coord)

window.scrollTo(x-coord, y-coord)








--------------------------------------------------
Cambiar la URL de una imagen de forma dinamica

<img id="imageprueba" src="" alt="">

const imagenes = [
      "http://random-international.com/wp-content/uploads/2012/10/RR-home-img2.jpg",
      'https://www.w3schools.com/w3css/img_fjords.jpg',
      'https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk='
      ]

    const image = document.getElementById('imageprueba')
    image.src = imagenes[0]
    
    
    let i = 0
    setInterval(function(){
      i++
      if(i == imagenes.length){
        i = 0
      }
      image.src = imagenes[i]
    }, 5000)









======================== Filgros para imagens ======================== 


.imagen {
  filter: blur(3px); Le da un efecto borroso
  filter: grayscale; Blanco y negro
  filter: sepia(100%); 
  filter: hue-rotate(45deg); Rotar el color de una imagen
  filter: brightness(50%); Porcentaje de brillo de una imagen
  filter: contrast(200%); Contraste
  filter: saturate(200%); Saturacion 
  filter: saturate(200%) sepia(100%) blur(5px); Combinar 
}


















----------------------------------------
----------------------------------------
----------------------------------------

         "CURSO DE FOUNDATION" 


----------------------------------------
----------------------------------------
----------------------------------------










row => Fila 
column => Columna
expanded => Usar el 100% de la pantalla, se usa antes de row

small-1 ... small-6 ... small-12
medium-1 ... medium-6 ... medium-12
large-1 ... lager-6 ... large-12

medium-offset-1 => Recorremos, desde medium, un espacio (de los 12 disponibles) a la derecha.

-Con esto le quitamos el padding a sus hijos pequeños y medianos pero a los grandes no.
<div class="row small-collapse large-uncollapse"> ..  


En pequeños ocupa todo el espacio, pero en medianos y grandes se
divide el espacio entre los elementos que haya:

<div class="column small-12 medium-expand"> Hola </div>
<div class="column small-12 medium-expand"> Hola </div>
<div class="column small-12 medium-expand"> Hola </div>
<div class="column small-12 medium-expand"> Hola </div>

ó (MEJOR)

<div class="row medium-unstack"> => Con esto le decimos que desde medium No los aplile
...


-Acomodar una fina antes que otra
<div class="row" >
  <div class="column medium-order-2">Soy la fila 1</div>
  <div class="column medium-order-1">Soy la fila 2</div>
</div>


Para hacer que una columna ocupe solamente el espacio de su contenido: 
<div class="column shrink">...


-Centrar texto y alinear columnas

<div class="row text-center align-center">  ...
<div class="row text-center align-right">   ...
<div class="row text-center align-left">    ...
<div class="row text-center align-justify"> ...
<div class="row text-center align-spaced">  ... 

-Alinear verticalmente 

<div class="row align-middle">              ...
<div class="row align-botton">              ...

-Alinear verticalmente a una sola columna 

<div class="column align-self-middle">      ...
<div class="column align-self-bottom">      ...


Incorporar Iconos

https://zurb.com/playground/foundation-icon-fonts-3

Descargar, colocar en una carpeta a la que llamemos icons 
Vincular la hoja foundatio-icons.css a nuestra pág principal
<link rel="stylesheet" href="icons/foundation-icons/foundation-icons.css">
Listo !


Panel pequeño (Podría servir para un titulo)

<div class="callout"> ...

Menú
<div>
  <ul class="menu align-center"> ó <ul class="menu vertical">
    <li>
    <li class="active"> => Este elemento estará activado con un color distinto
    <li>

Menú con texto e iconos / y que los iconos estén arriba
<div >
  <ul class="menu icon-top align-center">
    <li><a href="#"><span class="icono">...

Sub-Menú
<div >
  <ul class="menu align-center dropdown" meta-dropdown-menu>
    <li>
      <a href="#"><span class="icono">...  
      <ul class="menu">
        < Aqui va el submenu> ...
      </ul>

Botones
  <button class="button">                           ... Normal
  <button class="hollow button">                    ... Sin background
  <button class="button expanded large">            ... Grande

  Colores 

    <button class="button disabled">                  
    <button class="button secundary ">                  
    <button class="button success ">                  
    <button class="button alert ">                  
    <button class="button warning ">                  


TABS
  Url's ROUTER
    Para navegar dentro de la misma página sin recargar

<section>
  <h3>Titulo</h3>
  <ul id="menu-tabs" class="tabs" data-tabs>
    <li class="tabs-title">
      <a href="#">Subpágina 1</a>
    </li>
    <li class="tabs-title">
      <a href="#">Subpágina 2</a>
    </li>
    <li class="tabs-title">
      <a href="#">Subpágina 3</a>
    </li>
  </ul>
  {/* Como podemos tener varios TABS, en data-tabs-content va el ID del 
      los elementos a los que les queremos hacer referencia */}
  <div class="tabs-container" data-tabs-content="menu-tabs">
      <div id="panelViernes" class="tabs-panel is-active">
        Contenido del panel 1
      </div> 
      <div id="panelSabado" class="tabs-panel">
        Contenido del panel 2
      </div> 
      <div id="panelDomingo" class="tabs-panel ">
        Contenido del panel 3
      </div> 
  </div>

</section>




Centrar TABS

<ul id="menu-tabs" class="tabs text-center" meta-tabs>

  .tabs-title{
    display: inline-block;
    float: none;
  }



Tablas

<div class="row">
  <div class="column">
    <ul class="pricing-table">
      <li class="title">PLATINUM</li>
      <li class="price">$120.00</li>
      <li class="description">An awesome description</li>
      <li>42 Rad Features</li>
      <li>7GB of Power</li>
      <li><a class="button" href="#">Buy Now</a></li>
    </ul>
  </div>
</div>


Contenido dinamico 

Básicamente son media quereris...

<img data-change="[url-de-la-imagen, small], [url-de-la-imagen, medium], [url-de-la-imagen, large]">


Formularios 

Para que un formulario no se valide le agregamos novalidate
<form ... novalidate data-abide>

Y al error le colocamos data-abide-error

  <div data-abide-error class="row column small-12 medium-6 text-center" style="display:none" >
    <p><i class="fi-alert"></i> Ingresó un correo no válido</p>
  </div>


-NAVEGACION 

  Agregamos un nav a nuestro menú

  <nav data-magellan>
    ...
  </nav>

  Y a cada elemento al que queremos ir (ID) le ponemos 

  <div id="link1" data-magellan-target="link1">




- Menu STICKY

    <section id="scrollSticky" data-sticky-container>
      <div class="data-sticky" data-sticky data-options="marginTop: 0;" data-sticky-on="small" data-top-anchor="scrollSticky">
        <nav id="menu-container" data-magellan >
          <ul class="dropdown menu align-spaced" data-dropdown-menu>
            <li><a href="#tickets-container"><span class="fi-ticket"></span> Ticket</a></li>  
            <li>
              <a href="#lineup-container"><span class="fi-flag"></span> Lineup</a>
              <ul class="menu submenu-container">
                <li><a href="#panelViernes">Viernes</a></li>
                <li><a href="#panelSabado">Sábado</a></li>
                <li><a href="#panelDomingo">Domingo</a></li>
              </ul>
            </li>  
            <li><a href="#info-container"><span class="fi-info"></span> Info</a></li>  
            <li><a href="#suscription-container"> Suscríbite</a></li>  
          </ul>
        </nav>
      </div> 
    </section>
    



- Obtener los correos de un formulario sin usar Backend 

formspree.io

<form action="https://formspree.io/your@email.com" method="POST">
    <input type="text" name="name">
    <input type="email" name="_replyto">
    <input type="submit" value="Send">
</form>







// "FIN DE FOUNDATION"










===================== Bootstrap =====================

-xs-sx

Break Points  

Extra Small => < 544px      => .col-
Small       => > 544px      => .col-sm-
Medium      => > 768px      => .col-md-
Large       => > 992px      => .col-lg-
Extra Large => > 1200px     => .col-xl-


Class

.container => Contenedor normal con padding a los lados 
.container-fluid => Ocupa 100vw

.row => fila
.col => Debe de tener desde que Break point y el tamaño (-12 ... -6 ... etc.)
        .col- .col-sm- .col-md- .col-lg- .col-xl-

Para darle un espacio extra entre columnas 
    => offset-break-point-tamaño
    => offset-md-4



Flex-item-xs-middle => Ordenar verticalmente 
flex-item-xs-between => ordenar horizontalmente
 




































====================================================
|                                                  |
|             "ANIMACIONES PARA LA WEB"            |
|                                                  |
====================================================
-                                    14/FEB/2018   -


- Animación es genearar sensación de movimiento 
- Las animaciones son parte natural de las interfaces
- Las animaciones son una forma natural de enseñanza
- Las animaciones ayudan a mejorar el engagement 
- CSS3 Transiciones | Transformaciones | Animaciones




TRANSICIONES

transition-property: Propiedad a cambiar
transition-duration: Tiempo de la animación 
transition-delay: El tiempo que tarda en ejecutarse la animación
transition-timing-function: Para darle suavidad a la transicion (ease)

transition: property duration delay timing;
transition: width 1s 1s ease;
transition: all 1s ease; => Todas las propiedades 


-Cambiar varios elementos hijos:

.padre:hover .hijo{
  color: red;
}


TRANSFORMACIONES

- Rotar
- Sesgar
- Posicionar
- Redimencionar 

transform: rotate(45deg)
transform: skew(15deg) Sesgar
transform: translate(100px)
transform: scale(.5)

Si tenemos más de una transformación, las escribimos en una sola linea: 

transform: rotate(45deg) skew(10deg) translate(100px);


-ROTACIONES

PODEMOS ROTAR EN UN SOLO EJE !!!!!

transform: rotateX(45deg)
transform: rotateY(45deg)
transform: rotateZ(45deg) 
transform: rotate3D(X, Y, Z, grados)
transform: rotate3D(1, 0, 0, 45deg)
transform: rotate3D(0, 1, 0, 45deg)


-TRASLACION

transform: translate(x)
transform: translate(100px)
transform: translate(x, y)
transform: translate(100px, -100px)
transform: translateX(x)
transform: translateY(y)

  Eje Z

  Para que funcione, le tenemos que agregar al padre una "perspectiva" (fondo)

  .padre || body{
    perspective: 200px;
    perspective-origin: x y; PUNTO DE FUGA
    perspective-origin: center; 
    perspective-origin: top left; 
    perspective-origin: bottom left; 
  }

  .hijo{
    transform: translateZ(z);
    transform: translate3d(x, y, z)
  }


ESCALA

transform: scale(all)
transform: scale(x, y)


SESGADO

transforme: skew(x, y);
transforme: skew(45deg);


PUNTO DE TRANSFORMACION 

Elegir el punto desde donde se inicia la transformación.

  transform-origin: x y; Esta propiedad se le coloca al elemento que queremos que tome como referencia, puede ser de su padre o a sí mismo.

.padre:hover .hijo{
  transform-origin: x y;
  transform-origin: 50% 50%; Por defecto;
  transform-origin: top;
  transform-origin: bottom;
  transform-origin: left;
  transform-origin: right;
}

  Si usamos transform-origin: top left; 
  debemos hacer las transformaciones en el eje Z
  transform: rotateZ(10deg)







  ANIMACIONES


  Mover una caja roja de izquierda a derecha 

  @keyframe cuadrado {
    0%{
      left:0;
    }
    100% {
      left: calc(100% - 200px);
    }
  }

  animation-name: animacion1;
  animation-duration: 3s;
  
  @keyframe animacion1 {
    0%{
     opacity: 1; 
    }
    50%{
      opacity: 0; 
    }
  }

  animation-delay: 2s; Tiempo antes que se ejecute
  animation-iteration-count: 2; Cuantas veces se hará
  animation-iteration-count:  infinite;
  
  Suavizado

  animation-timing-function: ease;
  animation-timing-function: ease-in;
  animation-timing-function: ease-out;
  animation-timing-function: ease-in-out;
  animation-timing-function: linear;
  animation-timing-function: cubic-bezier(1,1,1,1);
  La curva de Bezier recibe 4 valores, si a todos le colocamos 1, será una función linear. 

  Para hacer que la animación vaya de 0% a 100% y de 100% a 0% (con el objetivo de que no se vea mal la animación ya que a veces los valores terminal en opacity: 0 y empiezan en opacity: 1 y eso hace que se vea mal) usamos 
  => animation-direction: alternate;

  Al finalizar la animacion (100%{ opacity: 0}) la imagen regresa a su valor original (sin respetar que los valores finales de la animación) para que los conserve usamos:
  animation-fill-mode: forwards;


  Para pausar una animación

  animation-play-state: paused;

  Para iniciarla:
  animation-play-state: running; (Está por defecto)

  Por ejemplo, podemos pausar la animacion cuando se hace hover sobre el padre

  .padre:hover .hijo{
    animation-play-state: paused;
  }




ACELERACION Y CURVA DE BEZIER

animation-timing-function: ease; 
animation-timing-function: ease-in; lento -> rápido
animation-timing-function: ease-out; rápido -> lento 
animation-timing-function: ease-in-out; lento al inicio y al final (como un pendulo)
animation-timing-function: linear; Sin aceleracion


Si queremos configurar a cuantos cuadros por segundo vaya nuestra animación, usamos: 

animation-duration: 1s;
animation-timing-function: steps(5); A 5 cuadros por segundo 
animation-timing-function: steps(50); A 50 cuadros por segundo  


CURVA DE BEZIER

cubic-bezier(0.75, -0.31, .33, 1.4)

La curva de Bezier va de -1 a 1 

animation-timing-function: cubic-bezier(1, 1, 1, 1)

Podemos usar el sitio web 
http://cubic-bezier.com/#.17,.67,.83,.67


ANIMACIONES MULTIPLES 

animation-name: animacion1, animacion2, etc,

animation-duration: 2s        
            ó
animation-duration: 2s, 10s  

animation-timing-function: ease, linear



ENCADENAR ANIMACIONES

https://www.w3.org/TR/css-animations-1/#event-animationevent


Types: 

  - animationstart
  - animationend
  - animationiteration 
  - animationcancel

<div id="animacion">Elemento que contiene la animación</div>


js

const $elemento = document.getElementById('animacion')

$elemento.addEventListener('animationend', (ev)=>{
  if(ev.animationName === animacion1){
    $elemento.style.animationName = 'animacion2'
    $elemento.style.animationDuration = '3s'
    
    // Si quiero varias animaciones corriendo
    $elemento.style.animationName = 'animacion2 animacion3'

   }
})




HERRAMIENTAS DE DESARROLLADOR

En chrome podemos visualizar desde 'more tools'

=> Animations 
  Podemos configurar todos los elementos de la animación. Tener un preview
  Tiempo de la animacion

=> Rendering 
  Podemos ver cuantos megas consume nuestra aplicacion 
  Ver cada elemento por cajita
  FPS (Cuadros por segundo)



OPTIMIZAR LOS RECURSOS DEL NAVEGADOR

Dado que cada que hay un cambio como opacity: 0; o un transform; el navegador tiene que volver a hacer un render y ello consume recursos.
Para avisarle que habrá un cambio a nuestro elemente le colocamos:

.animation {
  will-change: opacity, transform; 
}



PROPIEDADES QUE SE PUEDEN ANIMAR

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties




ANIMACIONES DESDE JS

Para hacer animaciones desde JS se usa element.animate 
Podemos buscar en Can I Use ? 'Web Animations Api'

// element.animate(keyframes = [], option = {})

<div id="pelota"></div>

const $pelota = document.getElementById('pelota2');

const animation = $pelota.animate([
  {
    transform: 'translateX(0)'
  },
  {
    transform: 'translateX(100vw)' // 250
  }
],{
  duration: 2000,
  delay: 0,
  direction: 'normal',
  easing: 'linear',
  iterations: Infinity,
  fill: 'forwards',
  iterationStart: 0, // = 50%
  // endDelay: 5000,
})


CONTROLES PARA MANIPULAR LA ANIMACION


const $playButton = document.getElementById('playButton')

$playButton.addEventListener('click',    () => animation.play())
document.getElementById('pauseButton').addEventListener('click',   () => animation.pause())
document.getElementById('stopButton').addEventListener('click',    () => animation.cancel())
document.getElementById('reverseButton').addEventListener('click', () => animation.reverse())








ANIMACIONES DE ENTRADA Y SALIDA  | MODAL

  <-- HTML -->

    <div class=" inOut animationInOut" id="inOut">
      <div id="" class="message">
        <h2 class="titulos">Animación de entrada y salida </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque. Nisi esse deserunt molestias ea, facilis voluptatem nobis, voluptatum cupiditate repudiandae quod incidunt ipsum aperiam deleniti earum? Reprehenderit, obcaecati vitae?
        </p> 
      </div>
      <div class="buttonCancel" id="buttonCancel">o</div>
    </div>
      
  <-- CSS -->

    .inOut{
      width: 100%;
      height: 100vh;
      position: fixed;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: rgba(0, 0, 0, .7);
      color: #fff;
      animation-duration: 2s;
      z-index: 100;
      transform: translateY(-100vh);
      /* animation-name: animationIn; */
      animation-name: animationIn;
      animation-fill-mode: forwards;
      transition: 2s all;
    }


    @keyframes animationIn {
      0%{
        transform: translateY(-100vh);
      }
      100%{
        transform: translateY(0px);
      }
    }

    @keyframes animationOut{
      0%{
        transform: translateY(0px);
      }
      100%{
        transform: translateY(-100vh);
      }
    } 

  <-- JS -->
    
    const $inOut = document.getElementById('inOut')

    document.getElementById('buttonCancel').addEventListener('click', ()=>{
      $inOut.style.animationName = 'animationOut'
    })




ANIMACION DE OLAS 

El punto es darle un delay a los demás circulos para que inicien en destiempo

.olas{
  width: 100%;
  position: relative;
  margin: 50px 0;
  border: 1px solid #9c9c9c;
  height: 300px;
  background-color: skyblue;
  overflow: hidden;
  padding: 0;
}

.circuloOlas {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(37, 145, 187, .1);
  position: absolute;
  animation-name: circulosOlas;
  animation-duration: 10s;
  will-change: transform;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  margin: 0;
}

.circuloOlas.b{
  animation-delay: 1s;
} 

.circuloOlas.c{
  animation-delay: 3s;
}


@keyframes circulosOlas {
  0%{
  }
  100%{
    transform: translateX(100%);
  }
}







Introducir Easter eggs en nuestra página

Por ejemplo, queremos que al escribir algo en nuestro teclado, cambie algo, usamos Cheet.js

npm i -S cheet.js

lo importamos y usamos 

import Cheet from 'cheet.js'

Cheet('p a l a b r a', ()=>{
  console.log("Algo pasó")
})








==========================================

            Animaciones REACT

==========================================


Create React App es de Facebook  


npm install -g create-react-app

create-react-app my-app


Usaremos => css-transition-group

Recuerda revisar la documentación por si algo cambio

https://github.com/reactjs/react-transition-group/tree/v1-stable


npm install react-addons-css-transition-group


import {CSSTransitionGroup} from 'react-transition-group'

<CSSTransitionGroup
  transitionName = "nombre"
  transitionEnterTimeout={300} // Tiempo cuando la animación entra
  transitionLeaveTimeout={300} // Tiempo cuando la animación sale
>
  ELEMENTOS A ANIMAR
</CSSTransitionGroup>


.nombre{

}

.nombre-enter{
  // Se aplica cuando el elemento entra en la aplicación
  // Estado inicial de entrada
}

.nombre-enter-active{
  transition-duration: 2s; // Tiempo que pasa entre enter y enter-active
  // Estado final de entrada
}

.nombre-leave{
  // Estado inicial de salida
}

.nombre-leave-active{
  // Estado inicial de salida
}









{/*  */}





=================================================================
                Curso Post-CSS 13-marzo-2018
=================================================================

https://www.postcss.parts/


npm i -D postcss-cli

npx postcss --version 

npx postcss path-del-css-original -o (ouput) path-de-salida
npx postcss src/css/home.css -o dist/css/home.css


Para que no tengamos que recargar el script cada vez que hacemos cambios, le agregamos el flag -w (watch)
npx postcss src/css/home.css -o dist/css/home.css -w




www.postcss.parts => plugins de Post-css 

Autoprefixer => npm i -D autoprefixer  / Pone los prefijos por nosotros (webkit- moz-)


Para usar los plugins le agregamos -u al comando principal y despues el prefijo que instalamos 
npx postcss src/css/home.css -o dist/css/home.css -w -u autoprefixer


Para tener varios plugins usamos un un archivo (en la raiz) llamado postcss.config.js, dentro escribimos 


module.exports = {
  plugins: [
    require('autoprefixer')({
      // En este objeto podemos (o no) introducir opciones extra para dar mayor soporte a los navegadores
      grid: true, => Con esto podemos dar soporte de grid a todos los navegadores 
    })
  ] 
}



CSS NEXT 

cssnext.io

npm i -D postcss-cssnext

En el module.exports = {
  plugins: [
    ... ,
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true, 
          flex: false
        },
        customProperties: false,
        calc: false,
      }
    })
  ]
}


Con customProperties: false nos ocupamos de que no se transpilten las variables nativas :root


:root {
  --nombreVariable: atributo;
  // Crear un conjuto de atributos
  --botonCustom: {
    border: 1px solid red; 
    border-radius: 5px;
    background: grey;
    color: #fff;
    padding: .5em 2em;
    text-transform: uppercase;
    cursor: pointer;
    border-bottom: 5px solid grey; 
  };
}

.btn {
  @apply --botonCustom;
}

.algo {
  propiedad: var(--nombredevariable);
}




Media Querie 


@custom-media --nombreDelMedia screen and (max-width: 800px)
@custom-media --nombreDelMedia screen and (width <= 800px)

@custom-media --extra-small screen and (width <= 480px)
@custom-media --small screen and (width < 768px)
@custom-media --medium screen and (width >= 768px)
@custom-media --large screen and (width >= 1024px)


@media (--nombreDelMedia) {
  ...
}



Retina Display 

background-image: image-set(url densidad, url densidad)

background-image: image-set(url('...') 1x, url('...') 2x )
background-size: contain;
background-repeat: no-repeat;
background-position: center;


Colores 


background: color(black alpha(50%) contrast(50%));

background: hwb(hue, whiteness, blackness);
background: hwb(0 360, 0 - 100%, 0 - 100%, opacity);

hue => Circulo cromatico
    0 rojo
    120 verde 
    240 azul 

grises => 0 - 255

background: gray(50);
...
background: gray(30);
...
background: gray(10);



System-ui => Con esto usamos la fuente por defecto del dispositivo en el que se abrá la aplicación, mac, windows, linux, ios, android, etc. 

font-family: system-ui;




Selectores Personalizados 

@custom-selector :--nombreDelSelector .elemento1 , .elemento2

@custom-selector :--botones .btn-1 , .btn-2
@custom-selector :--boton-hover :hover , :active


:--botones {
  ...
}

:--botones:--boton-hover {
  ...
}



Pseudo Selectores 

:any-link => para seleccionar cualquier link 

.elemento-padre :any-link {

}

:matches => hacer busquedas 

.elemento-padre:matches(:last-child, :nth-of-type(2)){
  
}

:not => busqueda de elementos y aplica propiedades a todos los que no haya encontrado

.elemento-padre:not(:last-child, :nth-of-type(2)){
  
}





Nested 

.algo {
  ...
  & .hijo {
    ...
    & a {
      ...
    }
  }
  @nest .padre {
    Con @nest podemos ser explicitos y decir que solo aplique a los .algo que sean hijos de .padre
  }

  @media screen and (max-width: 800px){
    propuedades de .algo que queremos cambiar
  }
   
}



CSS MODULAR 

Importar css 

npm i -D postcss-import 


module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true, 
          flex: false
        },
        customProperties: false,
        calc: false,
      }
    })
  ]
}


@import './otroArchivo.css'




Fuentes 

npm i -D postcss-font-magician 

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-font-magician')({
      variants: {
        'fuente': {
          '300': ['woff'], Solo el wolf
          '400': [], todas 
        }
      }
    }),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true, 
          flex: false
        },
        customProperties: false,
        calc: false,
      }
    })
  ]
}




LINT CSS  =>  stylelint 

npm i -D stylelint 

require('stylelint'),


En un archivo llamado stylelint.config.js

module.exports = {
  "rules": {
    "block-no-empty": true, // No tener selectores vacios
    "unit-whitelist": ["em", "rem", "%", "s", "Cualquier valor que SI queramos admitir"]
  }
}


Y en el modulde.exports donde tenemos las otras configuraciones, debemos colocar el require abajo del import 

require('postcss-import'),
require('stylelint')

ó dentro de la configuracion de postccs-import 

require('postcss-import')({
  plugins: [
    require('stylelint')
  ]
})





AGRUPAR MEDIA QUERIES 

npm i -D css-mqpacker

require('css-mqpacker')

postccs.config.js

module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid: true
    // }),
    require('postcss-import')({
      plugins: [
        require('stylelint'),
      ]
    }),
    require('postcss-font-magician')({
      variants: {
        'Lato': {
          '300': [],
          '400': [],
        }
      }
    }),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        customProperties: false,
        calc: false,
      }
    }),
    require('css-mqpacker'),
    require('cssnano')
  ]
}




Compresión con NANO 

npm i -D cssnano












---------------------------------------------

# Curso SASS

Los archivos .sass o .scss deben llevar _nombre.sass excepto el principal (style.sass)

- Importar

Todo se importa dentro del style.scss (se hace respetando la cascada CSS)

Para importar lo hacemos sin el "_"

@import "variables.sass"

- Variables

$nombre-de-variable: valor;
$color-principal: #42E0C3;

- Anidaciones

.clase {
  color: $color-principal;
  .clase-elemento {
    content: "icon"
    .clase__elemento--modificador {
      color: $color-alert;
    }
  }
}

.clase {
  &__elemento{}
  &--modificador{}
  &.clase--modificador
} 

- BEM Bloque__Elemento--Modificador


- Mixin (NO USAR PORQUE REPITE CÓDIGO)

@mixin nombre-mixin {
  propiedad: valor;
}

section {
  @include nombre-mixin;
}

@mixin max-width {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

section {
  @include max-width;
}

- Mixin parametrico 

@mixin nombre-mixin($parametro-1: valor) {
  propiedad: $parametro-1;
}

.bloque--modificador {
  @include nombre-mixin(1200px)
}


- Mixin Responsive (SI USAR)

@mixin responsive-to($width) {
  @media screen and (max-widtg: $width) {
    @content;
  }
}

.container {
  @include responsive-to(720px) {
    background-color: red; <!-- Todo ésto será el @content -->
  }
}



- PlaceHolder

Para ahorrar muchísimo código

%btn {
  ...propiedades del btn
}

.btn--primaty {
  @include %btn
}



- Funciones 

Pág Sass => http://sass-lang.com/documentation/Sass/Script/Functions.html

  - Color-aclarar: lighten($color, %)
  - Color-obscurecer: darken($color, %)
  - Color-invertido: invert($color)


- Directiva 

@function nombre-funcion ($parametro-1, $parametro-2, etc.) {
  @return $parametro-1 + $parametro-2;
}

.div {
  padding: nombre-funcion($p-1, $p-2);
}

DRY => Don't Repeat Your Self


- Mapas 

<!-- $fs => font size -->
$fs : (
  big: 24px,
  normal: 16px,
  small: 14px,
  x-small: 12px,
);

p {
  font-size: map-get($fs, normal);
}

.small {
  font-size: map-get($fs, small);
}



Control de flujo de información

- Each

@each $font in (normal, bold, italic) {
  .#{$font} { font-weight: $font; }
}

  ó usamos una lista (Los valores de las listas se separan con espacios)

$font-weights: normal bold italic;

@each $font in ($font-weights) {
  .#{$font} { font-weight: $font; }
}

- For

@for $i from 1 to 5 {
  .color-#{$i} {
    content: "#{$i}";
  }
}

- If 

$varible: valor1;

@if $variable == valor1 {
  ...
}
@else {
  ...
}

































--------------------------------------



Font family 
{
  font-family: 'Courier New', Courier, monospace;
}


Paleta de colores 

#91007B
#00F9D8
#FF006B
#00FFE7
#531788
#42E0C3
#FF0067
#40287B
#00C485 Vue 
#D40885
#402484
#FF0064
#3D3287
#5FBFB5
#FF003C Rojo invie
#1F569D
#3b8070
#35495e


Cruz | crucecita &times;

















ESTILOS GENERALES 


.btn {
  margin: 0 20px;
  padding: 5px;
  padding-top: 10px;
  font-size: 1.2em;
  width: 20%;
  min-width: 100px;
  outline: none;
  border-style: none;
  border-radius: 5px;
  transition: .2s;
  background: #E7E9EE;
}

.btn:hover, 
.btn:focus {
  box-shadow: 0 3px 2px 3px #808080;
  color: #fff;
  background-color: #6F3E6E;
}

