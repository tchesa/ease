'use strict';

var easeOutBounce = require('./easeOutBounce.js');

var easeInOutBounce = function (x) {
    return x < 0.5
        ? (1 - easeOutBounce(1 - 2 * x)) / 2
        : (1 + easeOutBounce(2 * x - 1)) / 2;
};

module.exports = easeInOutBounce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzZUluT3V0Qm91bmNlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZWFzZUluT3V0Qm91bmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVhc2luZ0Z1bmN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBlYXNlT3V0Qm91bmNlIGZyb20gXCIuL2Vhc2VPdXRCb3VuY2VcIjtcblxuY29uc3QgZWFzZUluT3V0Qm91bmNlOiBFYXNpbmdGdW5jdGlvbiA9ICh4KSA9PiB7XG4gIHJldHVybiB4IDwgMC41XG4gICAgPyAoMSAtIGVhc2VPdXRCb3VuY2UoMSAtIDIgKiB4KSkgLyAyXG4gICAgOiAoMSArIGVhc2VPdXRCb3VuY2UoMiAqIHggLSAxKSkgLyAyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWFzZUluT3V0Qm91bmNlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHTSxJQUFBLGVBQWUsR0FBbUIsVUFBQyxDQUFDLEVBQUE7SUFDeEMsT0FBTyxDQUFDLEdBQUcsR0FBRztBQUNaLFVBQUUsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNwQyxVQUFFLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6Qzs7OzsifQ==