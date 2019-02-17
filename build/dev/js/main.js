(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function () {
    var libUtils = require('./utils/libUtils');
    $loader = $('.preload');
    $loader.removeClass('preload');
});
},{"./utils/libUtils":2}],2:[function(require,module,exports){
var libUtils = {};

libUtils.logger = function (string) {
    if ( console ) {
        console.log(string);
    }
}


module.exports = libUtils;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxEIEUgVlxcbm9kZVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovRCBFIFYvbm9kZS9BcHAvanMvZmFrZV9kZjAzMGNlMS5qcyIsIkM6L0QgRSBWL25vZGUvQXBwL2pzL3V0aWxzL2xpYlV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGliVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2xpYlV0aWxzJyk7XHJcbiAgICAkbG9hZGVyID0gJCgnLnByZWxvYWQnKTtcclxuICAgICRsb2FkZXIucmVtb3ZlQ2xhc3MoJ3ByZWxvYWQnKTtcclxufSk7IiwidmFyIGxpYlV0aWxzID0ge307XHJcblxyXG5saWJVdGlscy5sb2dnZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICBpZiAoIGNvbnNvbGUgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbGliVXRpbHM7Il19
