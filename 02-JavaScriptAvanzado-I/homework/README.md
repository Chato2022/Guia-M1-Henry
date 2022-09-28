# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
> *Al declarar un variable con var se limitan al contexto de ejecucion donde han sido declarados, mientras que las no declaradas pertenecen al entorno global
> *Las variables no declaradas pueden borrarse(delete), en cambio con las declaradas no.
> \*Las variables declaradas se ejecutan antes de cualquiuer codigo, mientras que las no declaradas necesitan que el codigo las ejecute.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function (a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //undefined--->esto se debe al hoisting
console.log(baz); //error: baz is not defined--->al no estar declarada no se le puede hacer hoisting
foo(); //'Hola!'
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco"; //--->aca la variable instructor es pisada
}
console.log(instructor); //Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); //Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //Franco
  }
})();
console.log(instructor); //Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco"; //--->variable global declarada con let
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash"; //--->al ser una variable declarada con let esta solo se usa dentro de los{}
  console.log(instructor); //The flash
  console.log(pm); //Reverse flash
}
console.log(instructor); //The flash
console.log(pm); //Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//"9px"--->suma luego concatena
"$" + 4 + 5//"$45"--->concatena todo
"4" - 2//2
"4px" - 2//Nan
7 / 0//Infinity
{}[0]//0
parseInt("09")//9-->vuelve al string en un entero
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//23
3>2>1//true--->debido a que primero compara 3>2 y aca es true y para comparar con el 1, el true se convierte en 1 quedando(1>1) por lo tanto false
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); //undefined--->por hoisting pasa a la variable a la parte superior, pero sin asignacion
  console.log(foo()); //2--->retorna de la funcion foo

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix"; //global

function getFood(food) {
  if (food) {
    var snack = "Friskies"; //local
    return snack; //se ejecuta si getFood(true)--->y eso resulta en Friskies
  }
  return snack; //undefined--->debido que por el hosting trae a la variable pero sin su valor
}

getFood(false); //undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname; //Aurelio de Rosa
    },
  },
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa

var test = obj.prop.getFullname;

console.log(test()); //Undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0); //este a pesar de que tiene 0 milisegundos, igual al aplicar setTimeOut() es mas lento que console.log()
  console.log(4);
}

printing(); //1,4,3,2
```
