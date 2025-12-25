"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directions;
(function (Directions) {
    Directions["Top"] = "UP";
    Directions["Bottom"] = "Down";
    Directions["Right"] = "Right";
    Directions["Left"] = "left";
})(Directions || (Directions = {}));
function selectDirections(directions) {
    return `you moved ${directions}!`;
}
console.log(selectDirections(Directions.Bottom));
//# sourceMappingURL=question6.js.map