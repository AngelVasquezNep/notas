# Notas Generales de CSS, JS, React, Vue y HTML

## CSS

### Cosas chidas de CSS

Crear formas poligonales:

  - clip-path: polygon(0 44%, 62% 0, 142% 100%, 0 78%); Para crear poligonos 

Que las imagenes se distribuyan de la mejor forma:

  - object-fit: cover;

En CSS Grid Layout parece funcionar para que todo se aline de una forma interesante, se usa sobre los hijos del grid. (como si fueran una columna continua)

  - break-inside: avoid-column;

Escribir en diferentes direcciones (El ejemplo es en vertical):

  - writing-mode: vertical-rl;

Letras en diferentes direcciones 

  - text-orientation: upright;

Hacer que el texto esté justificado: 

  - text-align: justify;

Hacer que el texto rodee el contorno de una imagen: 

  - shape-outside: circle();
  - shape-outside: ellipse(); => ej: ellipse- (50% 50%);
  - shape-outside: border-box;
  - shape-outside: inset(0px round 120px) - border-box;
  - shape-outside: url('imgUrl');
  - shape-margin: 30px;
  - shape-outside: polygon(nonzero, 0 44%, 62% 0, 142% 100%, 0 78%);

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

- EFECTO PARALLAX

window.addEventListener("scroll", function(){
  console.log(window.scrollY)
})

Recuerda que si vas a mover algo debes agregarle su medida "px", "em", "rem"

$elemento.style.backgroundPosition = window.scroll+"px"

$elemento.style.transform = `rotate(${window.scroll}deg)`


- UTF8 Burger Menú &#9776; 
- UTF8 Esoacio en blanco &nbsp;
- Cruz | crucecita &times;


- Seleccionar el primer elemento

  p:first-child{
    color: red;
  }

- Iluminar un imput

  .algo:focus{
    box-shadow: inset 0 0 5px rgb(7, 249, 191);
  }

- Iluminar todo el formunario

  form:focus-within{
    background: rgba(151, 224, 251, 0.73);
  }

- GENERAR VARIABLES EN CSS

  :root{
    --nombredevariable: atributo;
    --colorgeneral: green;
  }

  .algo{
    background: var(--colorgeneral);
  }



--------------------------------------------------------
- EVENTOS DEL DOM

  EVENTOS del ratón (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
  EVENTOS táctiles (TouchEvent): touchstart, touchmove, touchend, touchcancel
  EVENTOS del teclado (KeyboardEvent): keydown, keypress, keyup
  EVENTOS de formularios: focus, blur, change, submit
  EVENTOS de la ventana: scroll, resize, hashchange, load, unload


- Eventos del DOM

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

- Colocamos las coordenadas a las que quremos ir 

  window.scroll(x-coord, y-coord)

  window.scrollTo(x-coord, y-coord)

- SCROLL with jquery

<button id="botoncito" href="#objetivo">Mover</button> 
<p id="objetivo">Objetivo</p>

document.getElementById('botoncito').addEventListener('click',()=>{
  const $objetivo = document.getElementById("objetivo")
  $objetivo.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})


### Generales CSS

- Meta viewport

<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

- Etiquetas que no debes olvidar usar

  <header>
  <main>
  <hgroup>
  <section>
  <article>
  <picture>
  <figcaption>
  <small>

  <label>
    <input>
    <textarea cols="30" rows="5" ></textarea>
  </label>

  <footer>

- anchor

<a href="tel:+5510203040">5510203040</a>
<a href="mailto:contacto@correo.com">E-mail: contacto@correo.com </a>

- Propiedades css

text-decoration: none;  sin sobrayado los enlaces
text-decoration: underline;  subrayado
outline: none;  sin cajita azul

background: linear-gradient(to left/right, white, black) para DEGRADAR COLOR DENTRO DE UN ELEMENTO
background-image: radial-gradient(ellipse farthest-corner at 45px 45px , #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%);
background-image: radial-gradient(farthest-corner at 45px 45px , #FF0000 0%, #0000FF 100%);

background-image: url("images/backgrund.png");
background-position: alineado horizontalmente + alineado verticalmente
background-position: center bottom;
background-repeat: no-repeat;
background-size: cover;



- Shadows

box-shadow: inset x y difuminado tamaño -->
box-shadow: inset 10px 10px 10px red;
box-shadow: inset  0px  5px  0px red;

- Tablas

border-collapse: collapse; (para que no haya lineas dobleas entre los elementos)

- <pre>

pre {
  word-wrap: break-word;
  white-space: pre-wrap;
}

- Setear atributos con JS

import platziImg from 'path'
const img = document.createElement('img')
img.setAtribute('src', platziImg)


- Selectores 

.nombreClase .anidado{}

.contenga.ambasEtiquetas {}

#idClase {}

input[type="radio"], input[type="checkbox"]{
    zoom: 1.5;
}


- CSS Grid

grid-template-columns: repeat(auto-fill, 250px);

- Input type Rango

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


- Con un input de algún tipo en especifico como email, tel, link, etc, para indicar si es valido o no.

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


- Último elemento
  
  .algo:last-child{
    border: 1px solid rgb(187, 128, 155);
  }

- No afectar a un elemento en especifico
  
  p:not(#p1){
    color: red;
  }

- Elementos pares o impares

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


- Indicar que link ya se visitó

  a{
    color: white;
  }
  a:visited{
    color: red;
  }

- Agregar contenido antes(::before) o después (::after)

  p::before{
    content: "Hola "
  }

  p::after{
    content: " Hola"
  }

- Dar estilo especial a la primera letra

  p::first-letter {
    color: red;
    font-size: 130%;
  }


- Texto seleccionado

  p::selection {
    color: white;
    background: blue;
  }

- Sombra en el texto
  .algo{
  /* offset-x | offset-y | blur-radius | color */
  text-shadow: 1px 1px 2px black;
  }



- Box-shadow

  .algo{
    /* box-shadow: inset x y radio color; */
    box-shadow: inset 100vw 0px 40px rgb(30, 112, 124);
  }


- Animacióm de carga con box-shadow

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

- Alto de linea

  p{
    line-height: 2em;
  }

- OverFlow

  .algo{
    overflow: auto; /*Scroll*/
    overflow: hidden /*No se ve*/
    overflow: visible; /*Se sale*/
  }


- Filter | filtros para imagenes

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


### Estilos generales

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


### Paleta de colores 

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


### Recursos CSS

- Iconos: flaticon
- Simbolos html: https://dev.w3.org/html5/html-author/charref
- Compresor de imagenes: https://tinypng.com
- 




## JS | React | Vue










