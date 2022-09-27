'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /*Declarar variables*/
  //convertir numero binario a string
  let num_string=num.toString();
  //guardar el string en un array, separarlo por caracteres e invertirlo
  let Array_num=num_string.split("").reverse();
  let Num_dec=0;
  /*Operacion*/
  //Hacer un bucle del array para obtener cada caracter
  Array_num.forEach(function(element,index){
    //filtrar solo los caracteres donde son igual a 1
    if(element==1){
      //operacion matematica para obtener el numero decimal
      Num_dec=Math.pow(2,index)+Num_dec;
      
    }
  });
  /*Salida de datos*/
  return Num_dec;
}


function DecimalABinario(num) {
  // tu codigo aca
  /*Declarar variables*/
  let num_string="";
  let resto=0;
  /*Desarrollo*/
  //bucle
  do{
    //obtener el resto en divisiones sucesivas
    resto=num%2;
    //convertir el resto en un string y concatenar 
    num_string=num_string+resto.toString();
    //obtener el cociente
    num=Math.trunc(num/2);
  }while(num>=2);
  //obtener el ultimo cociente y volverlo string
  let aux=num.toString();
  //concatenar el el numero en string con el ultimo cociente, de ahi separarlos en caracteres, de ahi invertir y juntar para obtener el binario
  let binario=(num_string+aux).split("").reverse().join("");
  /*Salida de datos*/
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}