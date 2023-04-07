'use strict';

var easeOutBounce = require('./easeOutBounce.js');

var easeInBounce = function (x) { return 1 - easeOutBounce(1 - x); };

module.exports = easeInBounce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzZUluQm91bmNlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZWFzZUluQm91bmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVhc2luZ0Z1bmN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBlYXNlT3V0Qm91bmNlIGZyb20gXCIuL2Vhc2VPdXRCb3VuY2VcIjtcblxuY29uc3QgZWFzZUluQm91bmNlOiBFYXNpbmdGdW5jdGlvbiA9ICh4KSA9PiAxIC0gZWFzZU91dEJvdW5jZSgxIC0geCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVhc2VJbkJvdW5jZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsSUFBTSxZQUFZLEdBQW1CLFVBQUMsQ0FBQyxFQUFBLEVBQUssT0FBQSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs7OzsifQ==
