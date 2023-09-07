var circleArea = function (radius) {
    if (isNaN(radius) || radius <= 0) return false

    return parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(2))
};