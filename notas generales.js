NOTAS



GIT


zsh "Comando especial para ver git:(master)"

AngelVasqueNep
Angeles7


git config --global user.name Angel
git config --global user.email

git config --global core.editor vim


git init
git add <file>
git rm --cached <file> ("Remover de git")
git add -A			("agregar todos los archivos")

git rm -f <file> 		("borrar archivo")

git commit -m "mensaje del commit"

git commit -m "mensaje" --ament ("concatener cambios, por si olvidamos algo")

								:wq ("salir")

git tag 1.0		ó
git tag -a 1.0 -m "Versión estable del proy"

git tag -l ("para ver los tag que hemos hecho")

git tag 0.5 SHA1
git tag 0.5 8dfq1233 ("Para asignar un tag a un commit en especifico")
git tag -d 0.5 ("Borrar un tag")
git tag -f -a 0.5 -m "Renombrando tag" #SHA1


git log --oneline
git log --oneline --graph


---------------"SUPER LOG"--------------------

git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"

----------------------------------------------

git diff viejo nuevo
git diff #SHA1 #SHA2




"git reset --soft --mixed --hard"

git reset --soft #SHA1 ("Desde donde queremos regresar, no borra archivos, en esencia solo quita los siguiente commits, y deja todo en stage area -verde-")

git reset --mixed #SHA1 ("Descarta cambios y pasa todo al working directory -rojo-")

git reset --hard #SHA1 ("tener los #SHA1 de los commits por si queremos ir ellos aunque hagamos un hard")



NOTA: git superlog > logs.txt ("Con esto guardamos los logs en un texto")



----RAMAS---

git branch <name>
git branch response
git branch -l ("listar ramas")
git branch -d <name> ("borrar rama")
git branch -D <name> ("forzar borrado")
git branch -m <name> <new name> ("renombrar")


git checkout <name> ("Movernos en ramas")
git checkout #SHA1 ("Movernos en el tiempo")

git checkout -b <new-branch-name> ("crear una nueva rama a partir de un COMMIT // Tenemos que estar dentro del commit")


git checkout -b <new-branch-name> ("crear una rama y movernos a ella")


En master -mezclar-

git merge <name-branch>
{
Si hay conflicto, hago los cambios y un nuevo commit ("sin ponerle mensaje")







------------------GITHUB---------------------

Clonar un repo

git clone git@github.com:LeonidasEsteban/invie-github.git
("Solo descarga los archivos en tu lap")

Fork
Para tener una copia directamente en github


Llaves SSH

ssh-keygen -t rsa -b 4096 -C "tuemail@gmail.com"

/home/angel/.ssh/id_rsa
/home/angel/.ssh/id_rsa.pub

copiar la llave
windows
pbcopy < ~/.ssh/id_rsa.pub
xclip -sel clip < ~/.ssh/id_rsa.pub

Pegarla en github



"CONECTAR REPO"

git remote add origin git@github.com:repo/repo

git remote -v ("confirmar que estamos bien")
git remote remove origin ("remover repo")


!("Mejor forma")

git pull origin master ("Combinar rama remota con rama local")


/*
git fetch origin master ("Pedir la rama")

git merge origin/master ó
git merge origin/master --allow-unrelated-histories
*/


git push origin <branch>

git push origin master
git push origin master --tags

git push origin <rama>
git push origin <rama> --tags







































=========================================================
												TERMINAL
=========================================================

 

--------
LINUX

-Actualizar paquetes

sudo apt-get update
sudo apt-get upgrade


-Ver que paquetes tengo instalados
	dpkg --get-selections

-Ver programas instalados

	dpkg --list

-Ver comandos de un programa 

	dpkg -L [programa]


Desinstalar un programa

	sudo apt-get --purge remove <nombredelprograma>


Elimina del cache los paquetes .deb con versiones 
anteriores a los de los programas que tienes instalados.

	sudo apt-get autoclean


Elimina todos los paquetes del cache. El único inconveniente 
que podría resultar es que si quieres reinstalar un paquete, tienes que volver a descargarlo.

	sudo apt-get clean

Borra los paquetes huérfanos, o las dependencias que quedan 
instaladas después de haber instalado una aplicación y luego eliminarla, 
por lo que ya no son necesarias.

	sudo apt-get autoremove


Para buscar dentro del cache/metadata del manejador de paquetes.
=>apt-cache search [elemento a buscar] 



Descargar Torrent

ctorrent archivo.torrent













-------------
GENERAL TERMINAL COMANDOS

ls -l => informacion de permisos y dueños

Archivo o fichero
	- => archivo
	d => directorio

-rw-r--r-- =>Lo partiremos en tres componentes:

- => archivo
rw- => puede leer (r => read), puede escribir (w => write) - no puede ejecutar

Los primeros 3 elementos corresponden al usuario dueño, los otros al grupo y el tercero a los demás usuarios.

-{archivo o directorio}
rw-{usuario}
r--{grupo}
r--{terceros}


Para quitar permisos:
	valores
		r => 4
		w => 2
		x => 1
		Sumamos los valores:
			7 => todos los permisos
			6 => rw-
			4 => r--
			0 => ---

		Colocamos esos valores de la siguiente forma en la linea de comando:

		chmod {valorusuario}{valorgrupo}{valorterceros} <file>
		chmod 600 texto.txt
			Asignamos solo permisos al usuario principal

		Si colocamos chmod 000 passworld.txt
		Asi guardaremos nuestras contraseñas super seguras y cuando querramos abrirlas solo tenemos que hacerlo cambiando desde la consola


Lector de texto en terminal

vi text.txt
para escribir apretamos i
para salir esc :wq
para salir sin modificar esc :q!

para ver texto => cat text.txt
para ver mucho texto => less text.txt







cat > sample.txt ("para crear un archivo y escribir dentro de él")


"Instalar paquetes deb"
sudo dpkg -i paquete.deb















--------------------------------
    CURSO TERMINAL COMANDOS
--------------------------------

pwd		= "dónde estoy ?"
cd 		= para moverme a un directorio
ls 		= directorio
ls -l 		= enlistar elementos del directorio con valores
ls -lh 		= enlistar elementos en valores "humanos"

ls -lhS 	= Ordenar los elementos

du -h -d 1 	= mostrar cuanto pesa cada carpeta

df -h => tamaño de disco duro | espacio que ocupa cada directorio


clear		= Limpiar
cd ..		= Regresar directorio
mkdir [NOMBRE]  = Crear nuevo directorio

mv [NOMBRE DE ARCHIVO] DIR = Mover archivos
mv *.jpg dir = Mover todos los archivos que terminen en jpg al dir
mv IMG* dir = Mover todos archivos que su nombre empiece con IMG a dir

cp [NOMBRE] dir = Copiar archivo a dir
cp [NOMBRE] ./  = Copiar archivos al directorio donde nos encontramos

mv [NOMBRE] [NUEVO NOMBRE] = Renombrar

touch [nombre archivo] = Abre y cierra el archivo sin modificarlo
touch [nombre de nuevo archivo] = Crea un nuevo archivo

rm -r / = BORRAR TODO EN LA COMPU (creo que tambien sistema operativo)
rm [NOMBRE DEL ARCHIVO] = Borrar archivo
rm [Nombre del directorio]/ = Borrar todos los archivos del directorio
rm -rf [NOMBRE DEL DIRECTORIO]/ = Borrar directorio




bc 	  calculadora
md5 	ID de archivo
more	abre el archivo en la consola
tail 	Imprime el archivo paginado
cat 	Imprime todo el archivo
wc 	  lineas, palabras y caracteres

man MANUAL
Por ejemplo: man bc, man md5, man man


ABRIR ARCHIVO
xdg-open nombre de archivo
xdg-open nombre de página


echo $PATH
Imprime los directorios de donde el sistema tiene permitido leer los ejecutables (programas)

Tenemos juegos que podemos activar desde la consola
  sol, gnome-sudoku, gnome-mines, gnome-mahjongg, espdiff

Tambien tenemos acceso a varias cosas de UBUNTU con el comando gnome- y damos tap para ver las opciones


Para saber desde donde se esta ejecutando un comando, colocamos which comando.
Por ejemplo whitch bc => /usr/bin/bc
Asi sabemos que bc se abre desde bin



--------------------
PROCESOS DEL SISTEMA

top     Estatus del sistema

Cada proceso tiene un PID Prosses ID

Si al final de un comando escribimos & nos regresara el control de la terminal, y ese proceso pasara al backgrund, el cual podemos ver con "top", a su vez nos imprimira un PID.

kill -9 PID => Con esto matamos un proceso que se este ejecutando, tenemos que hacerlo con cuidado pues podemos matar un proceso importante del sistema.


Para imprimir los procesos que se estan corriendo:
ps -wA


Todo proceso tiene una bandera de salida, si es 0 significa que el proceso termino exitosamente, si es diferente de 0 es que el proceso no acabo completamente.


Con echo $? podemos saber el estatus del ultimo comando que se ejecuto, nos saldrá 0 si se ejecuto bien o algo diferente si salio mal

echo  =>  Imprimir
> guardar en un archivo




------------------
STANDARD INPUT, OUTPUT Y ERROR

-Standard input: Toda la informacion que le va a llegar a nuestro programa.

-Standard output: Todo lo que nos imprima el programa como resultado de su proceso

-Standard error: Mensajes de error

En el ejemplo se usa un programa de php =>

<?php

echo "número: ";
$d = trim(fread(STDIN, 100));
$i = 0;

while (true) {
	if (++$i % $d == 0) {
		fwrite(STDOUT, sprintf("El %d es múltiplo de %d\n", $i, $d));
	} else {
		fwrite(STDERR, sprintf("NO!! ALARMA: el %d NO es múltiplo de %d!!!\n", $i, $d));
	}
	sleep(1);
}


Si ejecutamos php ejemplo.php
Nos aparecera en consola el resultado del código.

También podemos guardar esos datos en un nuevo archivo

php ejemplo.php > resultado

Ahí SOLAMENTE apareceria el STDOUT (standard output) con los valores correctos y en consola aparecerian los STDERR (standard error)

Si es > sobreescribe el archivo, si es >> concatenamos los STDOUT.


Con " | " podemos concatenar comandos, como los filtros de VUE.js

Por ejemplo, para imprimir en consola (cat) un archivo con operaciones, usamos

cat operaciones.bc

Si queremos que esas operaciones se ejecuten y que se nos presente el resultado en pantalla, usamos:

cat operaciones.bc | bc


Diagrama de standars

entrada      |     ejecución         |    salida

                                   +------> STDOUT (1)
                                   |
                +----------+       |
STDIN (0) ----->|  script  |-------+
                +----------+       |
                     ^             |
                     |             +------> STDERR (2)
        STDIN* (0)----+


STDIN => Cuando se ejecuta el programa, ya lleva sus datos ó
STDIN* => Cuando se ejecuta el programa y nos pide algun dato, o lo pide del algun otro programa.

Con < lo que se hace es leer un archivo y lo trae como STDIN

bc < operaciones.bc

Podemos combinar < y >, por ejemplo abriremos con la calculadora (bc) el archivo de operaciones.bc y el resultado lo guardaremos en resultado.bc

bc < operaciones.bc > resultado.bc


Si queremos que tambien se guarden los standard error dentro de resultado.bc, tenemos que agregar 2>$1

bc < operaciones.bc > resultado.bc 2>$1

para que el STDERR(2) sea tratado como STDOUT(1)
O si lo queremos en otro archivo (y no en la consola)

bc < operaciones.bc > resultado.bc 2> errores.bc



------------
SUPER EJEMPLO

Puede ser cualquier numero, es el ejemplo en php de más arriba.

echo 4 | php ejemplo.php 2> erroresphp 1> resultadosphp

Con eso mandamos los errores a erroresphp y el resultado a resultadosphp

Para ver en tiempo real el avance del mismo usamos

tail -f nombre del archivo

"ESTO SIRVE PARA CUANDO HACEMOS ALGO EN SERVIDORES, PODEMOS VER LOS ERRORES DEL MISMO EN TIEMPO REAL O CUALQUIER COSA QUE QUERRAMOS"






BUSCAR

Para buscar dentro de un archivo usamos el comando:

cat nombre de archivo | grep string buscado

Y nos imprimira las lineas que tengan ese estring

Para buscar dentro de una carpeta:


grep -r . -e <string buscado> -n

  -r es de recursivo
  . es el directorio actual
  -e la siguiente expresion
  -n para que nos aparezca la linea exacta donde aparece el string buscado


SOLO FUNCIONA CON ARCHIVOS DE TEXTO PLANO, no funciona con word.

Esto puede ayudar cuando cambiamos el nombre de algun archivo que forma parte de un proyecto muy grande, para no buscar archivo por archivo en donde se uso, podemos buscarlo desde la consola y nos dará la linea para llegar y cambiarlo


Para darle un poco de precision a nuestra busqueda, podemos decirle que busque los import de vue con

grep -r . -e .vue$ -n

El $ sirve para decir que si hay un import como algo.vuex NO lo incluya como resultado de la busqueda

Por el contrario si buscamos el nombre de algo por su inicio, le ponemos ^iniciodelnombre

^ inicio de string
$ fin de string




------------------------------
Para buscar por nombre de archivo o nodo del mismo

=> Buscar todos los js que tengo en src

  find ~/src -name '*.js' -type f

=> Buscar todos los js que tengo en src y moverlos a una carpeta

  find ~/Escritorio/code -name '*.Vue' -type f -exec cp {} ~/Escritorio/todosjs/ \;

  -find comando de busqueda
  ~/.. ruta
  -name string de la busqueda entre comillas
  -type tipo f => file
  -exec => ejecutar algo con cada uno de esos elementos
  cp => copiar
  {} => todos los archivos encontrados
  ~/.. ruta
  \; cerrar comando


Otro ejemplo, si tenemso archivos sin extension podemos asignarsela con:

  find . -name 'algo*' -type f -exec mv {} {}.txt \;







------------------------
PETICIONES HTTP

Se uso la página httpbin.org


METODO GET
En la parte de get, podemos, en la url, agregar '?argumento=valor&argumento2=valor2' etc y nos aparecera dentro del los argumentos como resultado

curl 'https://www.httpbin.org/get?var=1'

curl -o [documento donde quiero que se guarde] https://..
curl -O https://.. archivo que quiero descargar



Metodo POST
curl --data "variable1=1&variable2=2" "https://www.httpbin.org/post"

'Chat de platzi'=> Se hace con el metodo post y nos retorna un array con los mensajes que tiene cargados y sumado al que enviamos

curl --data "message=hola paps" https://guarded-dusk-89606.herokuapp.com/messages




----------------
CRONTAB

Son acciones programadas que queremos que el sistema ejecute

Para programarlo tenemos el siguiente esquema

+--------------------- minutes [0-59]
|
|   +----------------- horas [0-23]
|   |
|   |   +------------- días del mes [1-31]
|   |   |
|   |   |    +-------- mes [1-12]
|   |   |    |
|   |   |    |    +--- día de la semana [0 dom - 6 sab]
|   |   |    |    |
|   |   |    |    |

*   *   *    *    *    script.sh

Si usamos * significa que será en todas las opciones para esa columna, si esta * en horas, sera todas las horas, si esta * en días, sera todos los días, etc.







date => imprime la hora


//






























==============================================
											NPM
==============================================


npm set init.author.name "Angel Vasquez"
npm set init.author.email "angel.vasquez.unam@gmail.com"
npm set init.author.url "https://twitter.com/angelvasqueznep"
npm login
Username: angymagic
Passeword:
Email:















================================================================================
================================================================================
														NOTAS RANDOM
================================================================================
================================================================================






Furikazan <viento, bosque, fuego, montaña>

Zamurai

«Rápido como el viento,
silencioso como el bosque,
raudo y devastador como el fuego,
inmóvil como una montaña»

Identidad,
Integridad,
Pasión,
Proposito, Fe y Determinación.


Disciplina
-Organización
-Limpieza ("Eliminar")
-Puntualidad ("Con lo que se dice y hace")









----------------------
ATOM






























-------------------------------
TECLADO

Ctrol + Mayús + N = Pestaña en incógnito
Ctrol + 1 a 8 = ir a pág en especifico
Ctrol + 9 = ir a última pág

=> Alt + iniciio = abrir pág de inicio en pestaña activa

Alt + f = Abrir menú de Chrome
Ctrol + mayús + o = Abrir administrador de marcadores





-------------------------------
PLUGINS
Autocomplete path






//
