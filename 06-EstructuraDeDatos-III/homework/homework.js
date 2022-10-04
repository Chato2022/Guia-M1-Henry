"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value=value;
  this.left=null;
  this.right=null;
}
BinarySearchTree.prototype.size=function(){
  if(!this.right&&!this.left){return 1}
  if(this.right&&this.left){return 1 + this.right.size() + this.left.size()}
  if(this.right){return 1 + this.right.size()}
  if(this.left){return 1 + this.left.size()}
}
BinarySearchTree.prototype.insert=function(value){
  if(value<this.value){
    if(this.left===null){
      this.left=new BinarySearchTree(value);
    }
    else{
      this.left.insert(value);
    }
  }
  else{
    if(this.right===null){
      this.right=new BinarySearchTree(value);
    }
    else{
      this.right.insert(value);
    }
  }
}
BinarySearchTree.prototype.contains=function(value){
  if(value===this.value){return true}//comparar el valor en this.value
  else if(value<this.value){//verifica si el valor es menor que el nodo, entonces se va a la izquierda
    if(this.left!==null){//si la propiedad this.left del nodo, apunta hacia otro nodo(osea si hay algo que le siga y no este vacio)
      return this.left.contains(value);//entonces retorna denuevo la funcion con recursividad, y verifica si en el nodo actual esta el valor y asi sucesivamente
    }
  }
  else if(value>this.value){//caso contrario(derecho)
    if(this.right!==null){
      return this.right.contains(value);
    }
  }
  return false;
}

BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
  if(order === "in-order" || !order){
    if(this.left){
      this.left.depthFirstForEach(cb, order)
    }
    cb(this.value)
    if(this.right){
      this.right.depthFirstForEach(cb, order)
    }
  } else if(order ==="pre-order") {
    cb(this.value)
    if(this.left){
      this.left.depthFirstForEach(cb, order)
    }
    if(this.right){
      this.right.depthFirstForEach(cb, order)
    }
  } else if(order ==="post-order") {
    if(this.left){
      this.left.depthFirstForEach(cb, order)
    }
    if(this.right){
      this.right.depthFirstForEach(cb, order)
    }
    cb(this.value)
  }
}
BinarySearchTree.prototype.breadthFirstForEach=function(cb,value=[]){
  if(this.left) value.push(this.left);
  if(this.right) value.push(this.right);
  cb(this.value);
  while(value.length>0){
    value.shift().breadthFirstForEach(cb,value);
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
