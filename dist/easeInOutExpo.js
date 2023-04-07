'use strict';

var easeInOutExpo = function (x) {
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? Math.pow(2, 20 * x - 10) / 2
                : (2 - Math.pow(2, -20 * x + 10)) / 2;
};

module.exports = easeInOutExpo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzZUluT3V0RXhwby5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2Vhc2VJbk91dEV4cG8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzaW5nRnVuY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBlYXNlSW5PdXRFeHBvOiBFYXNpbmdGdW5jdGlvbiA9ICh4KSA9PlxuICB4ID09PSAwXG4gICAgPyAwXG4gICAgOiB4ID09PSAxXG4gICAgPyAxXG4gICAgOiB4IDwgMC41XG4gICAgPyBNYXRoLnBvdygyLCAyMCAqIHggLSAxMCkgLyAyXG4gICAgOiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcblxuZXhwb3J0IGRlZmF1bHQgZWFzZUluT3V0RXhwbztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVNLElBQUEsYUFBYSxHQUFtQixVQUFDLENBQUMsRUFBQTtJQUN0QyxPQUFBLENBQUMsS0FBSyxDQUFDO0FBQ0wsVUFBRSxDQUFDO1VBQ0QsQ0FBQyxLQUFLLENBQUM7QUFDVCxjQUFFLENBQUM7Y0FDRCxDQUFDLEdBQUcsR0FBRztBQUNULGtCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUM5QixrQkFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBTnZDOzs7OyJ9