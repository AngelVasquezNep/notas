========================NOTAS============================



=========================================================
												 GIT
=========================================================

zsh "Comando especial para ver git:(master)"

AngelVasqueNep
Angeles7


git config --global user.name Angel
git config --global user.email

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

-Atualizar paquetes

sudo apt-get update
sudo apt-get upgrade












cat > sample.txt ("para crear un archivo y escribir dentro de él")


"Instalar paquetes deb"
dpkg -i paquete.deb




















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










//
