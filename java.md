public class HolaMundo {
  public static void main(String[] args) {
    System.out.println("Hola Mundo");
  }
}

- Java es un lenguaje de programación de alto nivel basado en C y C++

Alto nivel
  - Ruby
  - JS
  - Scala
  - Java
  - -
  - C++
  - C
  - Assembly
  - Machine Code
Bajo nivel

" Write one
  Run Anywhere "
  WORA

Caracterisiticas

- Simple
- POO
- Distribuido (Protocolos HTTP, SSP, FTP, etc.)
- Multihilo (Procesos que ocurren al mismo tiempo)
- Arquitectura Neutral (Trabaja en windows, mac, linux)
- Portable (Java virtual machine)
- Alto desempeño (Interpretado y compilado)
- Seguro (El código fuente no se expone gracias a la Virtual Machine)


Origen de Java

Java nació en 1991 por James Gosling

Necesitabamos software que pudierá funcionar en varios dispositivos (tv, controles, etc.)

2009 => Paso a ser propiedad de Oracle

Java SE & Java EE



JDK => Java Development Kid
JRD => JAva Runtime Environment


- Versiones de Java 

java -version
javac (java compilador)

sudo update-alternatives --config java => Para ver las versiones que tengo instaladas y elegir la que quiero usar

Setear versión a usar 

export JAVA_HOME='          ruta         -v versión a setear'
export JAVA_HOME='/usr/libexec/java_home -v 9.0.1'





HOLA MUNDO

HolaMundo.java

El nombre de la clase debe de ser igual que el del archivo.

public class HolaMundo {
  public static void main(String[] args) {
    System.out.println("HolaMundo");
  }
}
 

Compilarlo

javac HolaMundo.java

Se genera un archivo HolaMundo.class

Ejecutarlo

java HolaMundo (Sin extención)


Fases de la programación

- Archivos .java
- Compilador javac
- ByteCode .class
- JVM java

1. Editar (Escribir código fuente)
2. Compilar   --\
3. Cargar        ==> Compilador JAVA 
4. Verificar  --/
5. Interpretar (ejecución)



El método main

- Es el punto de entrada de una aplicación Java
- Declara todas las acciones realizadas por tu aplicación

public class HolaMundo {
  public static void main(String[] args) {
    System.out.println("HolaMundo");
  }
}

En la consola si usamos el comando => java HolaMundo <Lo que escribamos aquí lo pasará como argumento de la función>



IDE Eclipse

Una vez instalado, se genera un proyecto, en /src se crea un package
- La regla es colocarle un identificador como si fuera dominio web escrito alreves. algo.com => com.algo.nombredelproyecto


Variable 

Un espacio de memoria al que le asignamos un contenido.

Tipos de datos

Primitivo (comienzan con minusculas)
  - Enteros
    - byte  - 1 byte  => -128 a 127
    - short - 2 bytes => -32,768 a 32,767
    - int   - 4 bytes
    - long   - 8 bytes
  - 

Declarar una variable 

main (...) {
  byte edad = 127;
  short year = 1234;
  int id_user = 1231441;
  long id_twitter = 121323434123L; (Se coloca una L al final para que sea identificado como long y no como entero 'int')
} 


Tipo Objeto









































