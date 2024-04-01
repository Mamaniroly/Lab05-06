(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //1lista de emails de usuarios de Meta-X
  const l: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];
  console.log(l);
  //Este código sigue siendo una lista de direcciones de correo electrónico de usuarios 
  //de Meta-X, pero he cambiado el nombre de la variable de l a emailsUsuariosMetaX para hacerlo
  //más descriptivo. Luego, imprime la lista de direcciones de correo electrónico en la consola.
  //El resultado será el mismo que antes.
  const emailsUsuariosMetaX = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
];
console.log(emailsUsuariosMetaX);
//Si deseas refactorizar el código para eliminar la repetición de correos electrónicos, podrías 
//hacer lo siguiente.

const emailComun = "email1@gmail.com";
const cantidadUsuarios = 3;

const emailsUsuariosMetaX = Array.from({ length: cantidadUsuarios }, () => emailComun);

console.log(emailsUsuariosMetaX);


  //2 Lista de compras de un carrito
  const var2: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(var2);
  //Aquí tenemos una forma de refactorizar el código para mejorar la legibilidad y mantenibilidad

  const listaCompras = [
    { producto: "Nintendo Switch" },
    { producto: "Control de Xbox" },
    { producto: "Tarjeta de regalo de Steam" }
];

console.log(listaCompras);
//En este código, he cambiado el nombre de la variable a listaCompras, lo cual proporciona un
// nombre más descriptivo. Además, he cambiado el nombre de la propiedad de los objetos dentro
// del array a producto, que es más claro y descriptivo.
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const fff = (asdfg: number): number => {
    return asdfg + 3;
  }
  console.log(fff(2));

  //Aquí está la función refactorizada con nombres de variables más descriptivos y una mejor semántica:
  const sumarTres = (numero: number): number => {
    return numero + 3;
  };
  console.log(sumarTres(2));
  //En este código, he cambiado el nombre de la función a sumarTres, que describe claramente lo que
  // hace la función. Además, he cambiado el nombre del parámetro a numero, lo cual es más descriptivo
  // que asdfg. Esto hace que el código sea más legible y fácil de entender.
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capi(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }
  console.log(capi("capricorn"));

  //estar intentando capitalizar la primera letra de una palabra. Sin embargo,
  // hay un pequeño error en la función. La función toLowerCase() devuelve la palabra en minúsculas,
  // pero no está asignada a ninguna variable. Además, la conversión a mayúscula y la concatenación
  // se realizan en la misma línea. Aquí está la corrección
  function capitalizarPalabra(palabra: string): string {
    const palabraEnMinusculas = palabra.toLowerCase(); // Convertir la palabra a minúsculas
    const primeraLetraMayuscula = palabraEnMinusculas.charAt(0).toUpperCase(); // Convertir la primera letra a mayúscula
    const restoDeLaPalabra = palabraEnMinusculas.substring(1); // Obtener el resto de la palabra
    return primeraLetraMayuscula + restoDeLaPalabra; // Concatenar y devolver la palabra capitalizada
  }
  console.log(capitalizarPalabra("capricorn"));

  //variable que alerta en caso de que algun evento suceda
  let www: boolean = false;
  if(www) console.log('event');
  //La variable www es un booleano que se inicializa en false. Si deseas que se ejecute una alerta en caso de que la variable
  // sea true, puedes hacerlo de la siguiente manera
  let www: boolean = false;

    if (www) {
       console.log('event');
     }else {
    alert('No se ha producido ningún evento.');
  }
  //En este código, se utiliza un condicional if para verificar si www es true. Si es así, se imprime 'event' en la consola. 
  //Si www es false, se ejecuta un alert() que indica que no se ha producido ningún evento


  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let c: boolean = true;
      if(c) console.log('welcome');
  //La variable c es un booleano que se inicializa en true. Si deseas verificar si un usuario puede acceder o no y mostrar 
  //un mensaje de bienvenida en caso de que c sea true, puedes hacerlo de la siguiente manera
  let c: boolean = true;

  if (c) {
       console.log('¡Bienvenido! Puede acceder.');
  } else {
       console.log('Lo siento, no tiene acceso.');
  }
  //En este código, se utiliza un condicional if para verificar si c es true. Si es así, se muestra el mensaje de bienvenida
  // '¡Bienvenido! Puede acceder.' en la consola. Si c es false, se muestra el mensaje 'Lo siento,
  // no tiene acceso

  //variable para hallar el promedio de 3 numeros
  const sudo: number = (1 + 2 + 3) / 3;

  console.log(sudo);
  //La variable sudo está calculando el promedio de tres números (1, 2 y 3) y almacenando el resultado en esa variable. 
  //Sin embargo, en lugar de una variable, parece ser una expresión que calcula el promedio directament
  const numero1 = 1;
  const numero2 = 2;
  const numero3 = 3;

  const promedio = (numero1 + numero2 + numero3) / 3;

  console.log(promedio);

  //variable que almacena el valor de PI
  let pizza: number = 3.141592654;
  console.log(pizza);

  //Para almacenar el valor de PI, puedes utilizar una constante en lugar de una variable, ya que el
  // valor de PI no cambiará durante la ejecución de tu programa. Aquí tienes dos opciones comunes para definir la constante PI
  //Utilizando Math.PI
  const pi = Math.PI;
  console.log(pi);
  //Definiendo el valor manualmente
  const pi = 3.141592654;
  console.log(pi);
   
  //variabel que controla si un archivo es modificable 
  let Bv: boolean = false;

  if(Bv) console.log('edit this file?');
  //La variable Bv controla si un archivo es modificable o no. Si Bv es true, significa que el archivo es modificable y se imprimirá
  // el mensaje "edit this file?" en la consola. De lo contrario, si Bv es false, el archivo no es
  // modificable y el mensaje no se imprimirá
  
  //Este es un ejemplo de cómo se podría utilizar la variable Bv para determinar si un archivo es modificable:
  let Bv: boolean = false;

  if (Bv) {
    console.log('¿Editar este archivo?');
  } else {
    console.log('El archivo no es modificable.');
  }


  //variable para almacenar el valor de e
  const eioua: number = 2.718281828; 
  //La constante eioua se utiliza para almacenar el valor de la constante matemática e, que es aproximadamente igual 
  //a 2.718281828. Esta constante se utiliza comúnmente en matemáticas y ciencias para una variedad
  // de cálculos y aplicaciones.
  
  const e = 2.718281828;
  //Esta versión utiliza simplemente la letra "e" como nombre de la constante, que es más corta y comúnmente asociada 
  //con la constante matemática e. Esto hace que el código sea más fácil de entender para otros programadores que puedan leerlo

})();