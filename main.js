
// Escribe una función llamada esPar que reciba un número y
// devuelva true si el número es par, o false si es impar.

function esPar(numero) {

    if (typeof numero !== 'number') {
        console.log('No es un número')
        return false;
      }

    return numero % 2 === 0;
  }

console.log(esPar());

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    throw new Error("El número debe ser no negativo");
  }

  if (n === 0) return 1;

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}



