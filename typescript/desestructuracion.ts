
(() => {
const avenger = {
    nombre: 'Steve',
    clave: 'Capitan America',
    poder: 'Droga'
}

const extraer = (avenger:any) => {



const {nombre, clave, poder} = avenger;
console.log(nombre);
console.log(clave);

}

// extraer (avenger);
const avengers: string [] = ['Thor','Ironman','Spiderman'];

const [,,octopus] = avengers;

// console.log(loki);
// console.log(thanos);
// console.log(octopus);

const extraerArr = (avengers: string [])=> {
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
}

extraerArr(avengers);

})();
