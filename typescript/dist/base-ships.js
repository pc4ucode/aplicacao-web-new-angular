"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
// Usando Classes e interfaces
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with ".concat(this.propulsor));
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
