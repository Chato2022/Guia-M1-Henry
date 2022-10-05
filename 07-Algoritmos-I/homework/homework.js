'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var Array=[];
  var i=1;
  do {
    if(Number.isInteger(num/i)){
      num=num/i;
      Array.push(i);
      if(num%i===0&&i!==1){
        i=i;
      }else{
        i++;
      }
    }else{i++}
  } while (num!==1)
  return Array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
/*  var comparacion=[]
  array.forEach(element => {
    comparacion.push(element);
  });
  
  for(var i=0;i<(array.length-1);i++){
    var a=array[i];
    var b=array[i+1];
    var temp=0;
    if(a===b){
      a=b;
    }
    else if(a>b){
      temp=b;
      b=a;
      a=temp;
    }
  }
  if(comparacion.sort((a,b)=>a-b)!==array){
    bubbleSort(array)
  }
  return array*/
  for (let i = 0; i< (array.length-1); i++) {
    for (let j = 0; j< (array.length-1); j++) {
      if (array[j]>array[j+1]) {
        var aux=array[j+1];
        array[j+1]=array[j];
        array[j]=aux;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j=i-1;
    var aux=array[i];
    while (j>=0&&array[j]> aux){
      array[j+1]=array[j];
      j--;
    }
    array[j+1]=aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*let aux=[];
  array.forEach(element => {
    aux.push(element);
  });
  for (let i = 0; i < array.length; i++) {
    let min= aux.slice(i+1).reduce((a,e,j) => (e< aux[a] ? j+i+1 : a),i);
    if(min!=i){
      [aux[i], aux[min]]=[aux[min], aux[i]];
    }
  }
  return aux;*/
  for (let i = 0; i < array.length; i++) {
    var min=i;
    for (let j = i+1; j < array.length; j++) {
      if(array[j]<array[min]){
        min=j;
      }
    }
    if (min!==i) {
      var aux= array[i];
      array[i]=array[min];
      array[min]=aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
