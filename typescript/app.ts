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

// Usando Classes e interfaces
class Spacecraft {
    constructor (public propulsor: string) {
        
    }

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

class MilleniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number;

    constructor() {
        super('hyperdrive');
        this.cargoContainers = 4;
    }

    jumpIntoHyperspace() {
        if(Math.random() >= 0.5) {
            super.jumpIntoHyperspace;
        } else {
            console.log('Failed to jump into hyperspace');
        }
    }
}

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace();

interface Containership {
    cargoContainers: number;
}

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2;

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`);