'use strict';

var easeOutBounce = function (x) {
    var n1 = 7.5625;
    var d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    }
    else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    }
    else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    }
    else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
};

module.exports = easeOutBounce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzZU91dEJvdW5jZS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2Vhc2VPdXRCb3VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzaW5nRnVuY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBlYXNlT3V0Qm91bmNlOiBFYXNpbmdGdW5jdGlvbiA9ICh4KSA9PiB7XG4gIGNvbnN0IG4xID0gNy41NjI1O1xuICBjb25zdCBkMSA9IDIuNzU7XG5cbiAgaWYgKHggPCAxIC8gZDEpIHtcbiAgICByZXR1cm4gbjEgKiB4ICogeDtcbiAgfSBlbHNlIGlmICh4IDwgMiAvIGQxKSB7XG4gICAgcmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIDAuNzU7XG4gIH0gZWxzZSBpZiAoeCA8IDIuNSAvIGQxKSB7XG4gICAgcmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAwLjkzNzU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG4xICogKHggLT0gMi42MjUgLyBkMSkgKiB4ICsgMC45ODQzNzU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhc2VPdXRCb3VuY2U7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFTSxJQUFBLGFBQWEsR0FBbUIsVUFBQyxDQUFDLEVBQUE7SUFDdEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBQ2xCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQztBQUVoQixJQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDZCxRQUFBLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsS0FBQTtBQUFNLFNBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUNyQixRQUFBLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN4QyxLQUFBO0FBQU0sU0FBQSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFO0FBQ3ZCLFFBQUEsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzNDLEtBQUE7QUFBTSxTQUFBO0FBQ0wsUUFBQSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDOUMsS0FBQTtBQUNIOzs7OyJ9