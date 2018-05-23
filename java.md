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
- Es el Cerebro de la aplicación, el que controla todo

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


=> Tipos de datos

Primitivo (comienzan con minusculas)
  
  - Enteros
    - byte  - 1 byte  => -128 a 127
    - short - 2 bytes => -32,768 a 32,767
    - int   - 4 bytes
    - long  - 8 bytes
  
  - Flotantes (Pueden tener decimales)
    - float - 4 bytes
    - doble - 8 bytes

  - Texto
    - char - 2 bytes => unicode (Una sóla letra)

  - Lógicos
    - boolean - 2 bytes => true , false

=> Declarar una variable 

main (...) {

  // Enteros
  
  byte edad = 127;
  short year = 1234;
  int id_user = 1231441;
  long id_twitter = 121323434123L; (Se coloca una L para que sea identificado como long y no como entero 'int')

  // Flotantes

  float diametro = 34.15F; (Se le coloca una F para que sea identificado como float y no como doble)
  doble precio = 12313.12313123321412313;


  // Texto
  
  char genero = 'F'; (Se usan comillas simples) 

  // 

  boolean isVisible = true; 

} 



- Reglas para nombrar variables 

  - Case sensitive
  - Puede iniciar con $ o _
  - Las constantes se escriben en MAYÚSCULAS y contienen _ 

  - Upper Camel Case => Para nombre de Clases => HolaMundo y constructor
  - Lower Camel Case => Para variables y metódos 



- Cast de Variables

  => Situación donde necesitamos cambiar el tipo de dato
  - Se le puede hacer cast a tipos de datos primitivos y objetos primitivos

  Para lograrlo colocamos en una nueva variable la variable que queremos casterar y le ponenemos entre parentesis el tipo de valor que queremos que tome.

  doble precio = 43.23;
  int i = (int) precio; 

  Dado que doble es mayor que int, al imprimir int sólo veremos lo que haya 'entrado' dentro del mismo. En este caso, no veríamos los decimales.

  Sí pasamos un int a char (los char son unicode => un código por cada carácter ) veríamos una letra...
  Ejemplo: 

  int codigo = 97;
  char codigoASCII = (char) codigo;

  >> Consola: a




- Arrays

  - Los arreglos se pueden definir como OBJETOS en los que podemos guardar más de una variable.
  - Podemos tener arreglos de n dimensiones => básicamente se aumenta una dimensión cuando se anidan, excepto en la segunda dimensión.
  
  => Declarar array 
    
    TipoDeDato[] nombreDeVariable;

    - Al declarar el tipo de dato (int, doble, boolean, etc.) todos los datos contenidos deben ser del mismo tipo. 

  => Definir tamaño

    nombreDeVariable = new TipoDato[capacidad];
    arreglo = new int[3];

  => Definir la cantidad de dimensiones

    Se hace por medio de los corchetes que se colocan delante del tipo de variables.

    unaDimension = new int[];
    dosDimensiones = new int[][];
    dosDimensiones = new int[fila][columna];

    int[][] array2d = new int[2][3];
    int[][][] array3d = new int[1][3][4];
    int[][][][] array4d = new int[2][3][1][2];

    char [][] days = { {'M', 'T', 'W'}, {'M', 'T', 'W'} };

    Se podría ver de la siguiente forma:

    -----------------
    |  'M'  |  'M'  |
    -----------------
    |  'T'  |  'T'  |
    -----------------
    |  'W'  |  'W'  |
    -----------------

    char [][][] days3d = { { { 'A' },{ 'B' }  },
                           { { 'A' },{ 'B' }  },
                           { { 'A' },{ 'B' }} };

    -------------------------------------
    |  -------  |  -------  |  -------  |
    |  | 'A' |  |  | 'A' |  |  | 'A' |  |
    |  -------  |  -------  |  -------  |
    -------------------------------------
    |  -------  |  -------  |  -------  |
    |  | 'B' |  |  | 'B' |  |  | 'B' |  |
    |  -------  |  -------  |  -------  |
    -------------------------------------



  => Indices

    char[] names = new char[3];
    names[0] = 'a';
    names[1] = 'b';
    names[2] = 'c';

    char[][][][] monkey = new char[2][3][2][2];

    monkey[2][2][1][2] = 'm';



- Operadores 

  - Aritméticos => + , - , / , * , %
  
  - Asignación
    > += => a += b => a = a + b
    > -= => a -= b => a = a - b
    > *= => a *= b => a = a * b
    > /= => a /= b => a = a / b
    > %= => a %= b => a = a % b

  - Incremento
    > ++ => i++ => i = i + 1
    > -- => i-- => i = i - 1

    Orden de las operaciones

    i++
      1. Primero asigna el valor: i = i
      2. Luego incrementa en 1.
    ++i
      1. Primero incrementa i + 1.
      2. El resultado lo asigna a 1.


  - Equidad (Retornal valores booleanos)
    == Igualdad
    != Desigualdad

  - Relacionales (Retornal valores booleanos)

     < Menor que
     > Mayor que
    <= Menor igual que
    >= Mayor igual que

  - Lógicos

    && and
    || or
     ! not


- Control de Flujo

  - Precendencia de operaciones (Prioridad de una operación sobre otra)

    1. Parentesis
    2. Exponentes
    3. Multiplicación - División
    4. Suma - Resta
    5. Modulo
    6. Igua, mayor, menor, diferente, >=, <=.
    7. Not !
    8. And &&
    9. Or ||

  - If - Else
    if(condición) {
      ...
    } else if(condición){
      ...
    } else {
      ...
    }

  - Switch 

    En vez de tener un camino verdadero y uno falso, lo que hará es compararse con tantos casos como tengamos.

    byte num = 2

    switch (num) {
      case 1:
        System.out.println("Caso 1");
      break;
      case 2:
        System.out.println("Caso 2");
      break;
      default:
        System.out.println("Caso Default");
      break;
    }

    > Caso 2


  - While

    while (sentencia) {
      ... Se repetirá hasta que la sentencia deje de ser cierta
    }

  - Do while

    Las instrucciones se ejecutan al menos una vez

    do {
      // Instrucciones
    } while (condición) ;

  - For

    for ( int i = 0; i <= 5; i++) {
      ...
    }

  - For each

    Itera sobre cada uno de los elementos del arreglo. 

    int[] numeros = new int[5];

    for (int i in numeros) {
      // La i es el valor del arreglo mas no el indice.
    }


  - For anidados

    public class Main {
      public static void main(String[] args) {
        int[][] num = new int[3][1];
        for (int i = 0; i < num.length; i++) {
          for ( int j = 0; j < num[0].length; j++ ) {
            System.out.println(num[0].length);
          }
        }
      }
    }




- Programación Orientada a Objetos

  Objetos

  - Una nueva forma de pensar.
  - Se trata de descomponer un problema en subproblemas y en más subproblemas.
  - Debemos tener un alcance del proyecto. Así mismo un entendimiento.
  - Los objetos pueden ser físicos o conceptuales.
  - Un objeto tiene atributos y comportamiento/Métodos (Funcionalidad).
  - Los nombres de los objetos y sus atributos por lo general son SUSTANTIVOS. (Ejem: User, sesion)
  - Tiene funcionalidades. Suelen ser verbos o SUSTANTIVO y verbo. (Ejem: login, makeReport)


  Nota: Un atributo no es la respuesta al mismo => 
        ejemplo: "El auto es de color verde"
        En atributo no es verde, sino "color".


  - Los atributos y comportamientos se diseñaran y crearan en función del "escenario" (dominio del problema/alcance) en el que nos encontremos.
    Habrá atributos que necesitemos si queremos conocer un auto, pero serán otros diferentes si nuestro objetivo es venderlo.

  Clases

  - Una clase es la forma en cómo definimos el objeto para generar más objetos.
  - Las clases son descriptivas, son plantillas (algo como moldes, pienso en un componente de Vue) 

  
    public class Auto {
      <!-- atributos -->

      int id;
      String matricula;
      String marca;
      double precio;
      boolean vendido;

      <!-- comportamientos -->

      public void mostrarDatos () {
        ...
      }

      public boolean esVendido() {
        ...
      }

    }

  - Podría verse cómo una receta, primero los ingredientes y después la preparación.
  - Para ser más explicitos, las clases son los moldes para crear objetos, aquí la clase Auto nos permitirá crear tantos autos como deseemos.



Importar 

  La palabra import se utiliza para importar clases externas.

  import java.util.Date; => Importa sólo una clase.

  impot java.util.* => Importa un paquete de clases. => Parece que es la mejor práctica.

  Sí tenemos dos clases de diferentes paquetes que se llamen igual, lo arreglamos de la siguiente forma: 

  import java.util.Date;   X
  import java.sql.Date;    X

  Solución: 

  import java.util.Date;

  java.sql.Date date = new java.sql.Date();


  - Importar Static

  import static java.lang.Math.PI; // importa sólo la variable estática PI
  import static java.lang.Math.*; // importa todos los elementos estáticos de la clase


  - Cosas que debes saber:

  Por default siempre se importa java.lang.*
  No necesitas importar las clases que estén en el mismo paquete.



Métodos

  Elementos (y firma) de los métodos: 

  - Modificador de acceso: public
  - Valor regreso: int 
  - Nombre: suma
  - Argumentos: a, b

  public int suma(int a, int b) {
    return a + b;
  }

  Sí no regresamos nada en la parte "Valor de regreso" escribiremos void y omitiremos la palabra return.

  Para llamar al método lo hacemos a través del objeto (o clase si estamos dentro de la misma).

  => No puede declararse un método dentro de otro método.


  - Declarar un Objeto -> No consume memoria, tampoco lo podemos usar.

    Auto miAuto;

  - Instanciar un Objeto -> Ocupa memoria.

    miAuto = new Auto();

  - Instanciar y declarar un objeto

    Auto miAuto = new Auto();

    -> Esto es el método constructor.

      - El método constructor.

        - Crea nuevas instancias de una clase.
        - Tiene el mismo nombre que la clase que instancia.
        - Usa la palabra reservada New para invocarlo.
        - Usa 0 o más argumentos contenidos dentro de paréntesis que siguen al nombre.
        - No regresa un valor.

  - Utilizar un Objeto

    Auto miAuto = new Auto();

    miAuto.marca = "Ferrari";
    miAuto.mostrarDatos();


- Método Static

  Se puede usar en todas las clases.
  Básicamente se pueden usar los métodos directos de la clase, sin necesidad de instanciar la clase en un objeto. Algo como la clase Math. Ésta no se instancia, pero puede ser accedida con (por ejemplo) Math.random(), Math.PI, etc.

  Si crearamos una clase Calculadora de la siguiente forma 

  public class Calculadora {
    public static int suma(int a, intb) {
      return a + b;
    }
  }

  - Acceso a métodos

    A través del nombreDelObjeto.metodo(); o
    A través del nombreDelaClase.metodo();

    Podré accesarla directamente (sin instanciarla => Calculadora c = new Calculadora) simplemente colocaré Calculadora.suma(3, 4);

  => SÚPER NOTA: Dado que los métodos static no se instancian, ayudan a ahorrar memoria.

  - Los métodos y atributos estaticos pueden ser accesados por otras clases y a su vez modificados.  


- Sobrecarga de métodos 

  En ocasiones necesitaremos que un método con el mismo nombre tenga un comportamiento diferente, para diferenciarlos lo haremos a través de sus parametros.
  Por ejemplo:

  public class Calculadora {

    public static int suma (int a, int b) {
      return a + b;
    }

    public static float suma (int a, float b) {
      return a + b;
    }

    public static int suma (int a, int b) {
      return a + b;
    }

    ...

  }











          :::::::::::::::::::

Notas externas (recolectadas de internet - libros y demás )

          :::::::::::::::::::



- Diferencia entre next y nextLine en Java

  next() solo lee hasta donde encuentra un espacio (hasta un espacio).
  nextLine() lee todo incluyendo espacios (hasta un enter).

  A continuación, los siguientes métodos pueden ser útiles para la lectura de datos simples:
  
  Scanner lector = new Scanner(System.in);

  String p1 = lector.next();           // lee una cadena de texto
  String p2 = lector.nextLine();       // lee una cadena de texto hasta fin de linea

  int n1 = lector.nextInt();           // lee un numero entero
  double n2 = lector.nextDouble();     // lee un numero de tipo double
  float n3 = lector.nextFloat();       // lee un número de tipo flotante



Métodos de los Strings

String nombre = new String;

nombre = "Angelito";

- Tamaño del string: nombre.lenght; 

- Corta el string: nombre.substring(desde,hasta)
    nombre.substring(0,3)
    > Ang


- toCharArray() Convertir una cadena de String en un array de caracteres

  char[] nuevaCadena = cadena.toCharArray()


- indexOf busca la letra o palabras dentro de otra cadena y regresa el index dónde inicia.

    String cadena = "Codigo Fuente en Java";
    int index = cadena.indexOf("C"); 
    System.out.println(index);
    > 0


- charAt(index) devuelve la letra de una cadena segun su index

    String cadena = new String("Cadena de Texto");
    System.out.println(cadena.charAt(2));  // Devuelve la letra 'd'



- For

  for (String o : arrayItem) {
    
  }














