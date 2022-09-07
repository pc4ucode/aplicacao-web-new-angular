import {Spacecraft, Containership} from './base-ships';
import {MilleniumFalcon} from './starfighters';

/*
// Declaracao de variaveis
let message: string = "Help me, Obi-wan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4;
console.log('This is episode ' + 4);
episode = episode + 1
console.log('Next episode is ' + episode)

let favoriteDroid: string;
favoriteDroid = 'BB-8';
console.log('My favorite droid is ' + favoriteDroid);

// Funções Typescript
let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12;
}

let distance = 11;
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`);

let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');

function inc (speed: number, inc: number = 1) : number {
    return speed + inc;
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`) */

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace();


let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2;

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`);