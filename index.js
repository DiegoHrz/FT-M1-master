
//context global
const yo = 'gama'
const profesion = 'developer'
const nacimiento = 1987

//context function
function calcularEdad(nacimiento){
    const hoy = 2023;
    const age = hoy - nacimiento
    return age
}

// block context
let puppies = ['Bartlomiau', 'Palta']

for(let i = 0; i < mascotas.length; i++){
    console.log(i)
}

//Cohersion d datos solo con el +
console.log('yo soy' + 3) //yo soy3
console.log('2' + 3) // 23
console.log('2' * 3) // 6
console.log('yo soy' + 3) //Nan

//Consersion de datos (solo se hace manual y cohersion es auatomatic x js)
console.log(Number("2") + 3) // 5

// expression no cuenta hoisting
const hacerAlgo = function(){
    console.log('ALGO')
}
console.log(typeof hacerAlgo) // function no puede ser cambiada el tipo de dato

//declaracion

function hacerOtracCosa(){
    console.log('otra cosa')
}


//Valor x referencia
a = 123;
b = a 
a = 'gamma'
console.log(b) // 123

