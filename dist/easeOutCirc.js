'use strict';

var easeOutCirc = function (x) {
    return 1 - Math.sqrt(1 - Math.pow(x - 1, 2));
};

module.exports = easeOutCirc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzZU91dENpcmMuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9lYXNlT3V0Q2lyYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNpbmdGdW5jdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IGVhc2VPdXRDaXJjOiBFYXNpbmdGdW5jdGlvbiA9ICh4KSA9PlxuICAxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgMikpO1xuXG5leHBvcnQgZGVmYXVsdCBlYXNlT3V0Q2lyYztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVNLElBQUEsV0FBVyxHQUFtQixVQUFDLENBQUMsRUFBQTtBQUNwQyxJQUFBLE9BQUEsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQXJDOzs7OyJ9