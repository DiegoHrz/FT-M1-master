'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array

  let left = []
  let right = []
  let pivote = []
  let indicePivote = Math.floor(Math.random()*array.length)

  pivote.push(array[indicePivote])

  for (let i = 0; i < array.length; i++) {

    if (i !== indicePivote) {

      if ((array[i]) <= pivote[0]) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }

    }
  }

  left = quickSort(left)
  right = quickSort(right)

  array = []

  array = array.concat(left, pivote, right)
  return array

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length < 2) return array;

  const mitad = Math.floor(array.length / 2);
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);

  array = [];

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    }
    else array.push(right.shift())
  }

  array = array.concat(left, right)

  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
