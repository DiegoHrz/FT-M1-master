'use strict';

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

   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
   //Valores a la izquierda
   //Beter practice would be define new BinarySearch.. as a variable
   if (value < this.value){
      if(this.left === null){
         this.left = new BinarySearchTree(value)
      } else {
         this.left.insert(value)
      }
   }
   //Valores a la derecha
   if (value >= this.value){
      if(this.right === null){
         this.right = new BinarySearchTree(value)
      } else {
         this.right.insert(value)
      }
   }
};

BinarySearchTree.prototype.size = function(){
   //Ambas ramas tienen elementos
   if(this.right && this.left) return 1 + this.left.size() + this.right.size()

   //Sola la rama izquierda tiene elementos
   if(this.left && !this.right) return 1 + this.left.size()

   //Sola la rama derecha tiene elementos
   if(!this.left && this.right) return 1 + this.right.size()

   //No hay mas elementos
   if(!this.left && !this.right) return 1
};


BinarySearchTree.prototype.contains = function(value){

   if(this.value === value) return true;
   //Si no lo enceuntro y es menor
   if(value < this.value){
      if(this.left === null) return false;
      return this.left.contains(value)
   }
   //Si no lo encuentro y es mayor
   if(value > this.value){
      if(this.right === null) return false;
      return this.right.contains(value)
   }
}                                               //fn print()
BinarySearchTree.prototype.depthFirstForEach = function(cb,order){

   switch(order){

      case 'post-order':      // izq - der - nodo
         //true    &&  fn()       =   if(true)(fn())
         this.left && this.left.depthFirstForEach(cb,order) //corto circuito
         this.right && this.right.depthFirstForEach(cb,order) 
         cb(this.value);
         break;     


      case 'pre-order':       //nodo  - izq - der
         cb(this.value)
         this.left && this.left.depthFirstForEach(cb,order); //corto circuito
         this.right && this.right.depthFirstForEach(cb,order);
         break  


      default :            //  izq  - nodo  -der
      this.left && this.left.depthFirstForEach(cb,order); //corto circuito
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb,order);
      break  
   }

}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, almacen=[]){


   cb(this.value);

   if(this.left){
      almacen.push(this.left);
   }
   if(this.right){
      almacen.push(this.right);
   }

   if(almacen.length > 0){
      almacen.shift().breadthFirstForEach(cb, almacen);
   }

}









// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
