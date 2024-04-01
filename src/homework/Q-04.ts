(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }
  //Para aplicar el principio DRY  en estas dos funciones, podemos consolidar la lógica repetida
  // en una función más genérica y reutilizable. Podemos refactorizar ambas funciones para que compartan la misma lógica. Aquí tienes cómo hacerlo:
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
}
//Ahora puedes utilizar la función calculateOperation en lugar de las funciones originales. Esto reduce la duplicación de código y 
//sigue el principio DRY


  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }
//Para aplicar el principio DRY  en estas dos funciones, podemos crear una función genérica para calcular
// el área de diferentes formas geométricas. Aquí tienes cómo hacerlo
function calculateArea(shape: string, ...args: number[]): number {
  switch (shape) {
      case 'rectangle':
          if (args.length !== 2) {
              throw new Error('Se requieren dos argumentos para un rectángulo (longitud y ancho).');
          }
          return args[0] * args[1];
      case 'circle':
          if (args.length !== 1) {
              throw new Error('Se requiere un argumento para un círculo (radio).');
          }
          return Math.PI * args[0] * args[0];
      default:
          throw new Error('Forma geométrica no soportada.');
  }
}


  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }
//Para aplicar el principio DRY en estas dos funciones de validación, podríamos
// generalizar el proceso de validación para que sea más flexible y reutilizable. Podemos crear
// una función genérica de validación que acepte un valor y una función de validación como argumentos. Aquí está cómo podríamos hacerlo
function validate(value: string, validationFunction: (value: string) => boolean): boolean {
  return validationFunction(value);
}

function validateEmail(email: string): boolean {
  //... código para validar aquí
  return false;
}

function validateUsername(username: string): boolean {
  //... código para validar aquí
  return false;
}
//Por ejemplo, para validar un correo electrónico
validate('email@example.com', validateEmail);
//Y para validar un nombre de usuario
validate('username123', validateUsername);
//Cada función de validación específica todavía puede contener la lógica de validación personalizada necesaria, pero ahora podemos reutilizar
// el proceso de validación en diferentes contextos
})();