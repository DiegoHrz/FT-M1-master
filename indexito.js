
// function a() {
//     function b(){
//       return this;
//     }
//     return b()
//   }
  
//   console.log(a())


// let contenedor = () =>{
//     let caja = [];
//     return (item) => {
//       caja.push(item)
//       return caja;
//     }
//   }
  
//   const miCaja = contenedor()
//   console.log(miCaja('zapatos'))
//   console.log(miCaja('bolsos'))
//   let x = contenedor()
//   console.log(x('xs'))
//   console.log(miCaja('bolsos'))
//   let nuevaCaja = miCaja('2');
//   console.log(nuevaCaja)


  

// let v0 = 'Soy una variable global'

// function f1(){
//     let v1 = 'Soy una variable externa';

//     function f2(){
//         let v2 = 'Soy una variable interna';
//         console.log(v0)
//         console.log(v1)
//         console.log(v2)
//     }
//     f2()
// }
// f1()


function counter() {
    let contador = 0;
    
    return function(){
      return  contador++
  
    }
  }
  let i = counter()
  console.log(i())
  console.log(i())
  console.log(i())