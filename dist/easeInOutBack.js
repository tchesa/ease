'use strict';

var easeInOutBack = function (x) {
    var c1 = 1.70158;
    var c2 = c1 * 1.525;
    return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};

module.exports = easeInOutBack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzZUluT3V0QmFjay5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2Vhc2VJbk91dEJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzaW5nRnVuY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBlYXNlSW5PdXRCYWNrOiBFYXNpbmdGdW5jdGlvbiA9ICh4KSA9PiB7XG4gIGNvbnN0IGMxID0gMS43MDE1ODtcbiAgY29uc3QgYzIgPSBjMSAqIDEuNTI1O1xuXG4gIHJldHVybiB4IDwgMC41XG4gICAgPyAoTWF0aC5wb3coMiAqIHgsIDIpICogKChjMiArIDEpICogMiAqIHggLSBjMikpIC8gMlxuICAgIDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhc2VJbk91dEJhY2s7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFTSxJQUFBLGFBQWEsR0FBbUIsVUFBQyxDQUFDLEVBQUE7SUFDdEMsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ25CLElBQUEsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUV0QixPQUFPLENBQUMsR0FBRyxHQUFHO0FBQ1osVUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ3BELFVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkU7Ozs7In0=
