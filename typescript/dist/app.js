/* Declaracao de variaveis */
var message = "Help me, Obi-wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log('This is episode ' + 4);
episode = episode + 1;
console.log('Next episode is ' + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log('My favorite droid is ' + favoriteDroid);
/* Funções Typescript */
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is ".concat(distance, " parsecs enough to beat Millenium Falcon? ").concat(isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, ".concat(name, "?")); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = ".concat(inc(5, 1)));
console.log("inc (5) = ".concat(inc(5)));
