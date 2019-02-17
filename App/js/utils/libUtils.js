var libUtils = {};

libUtils.logger = function (string) {
    if ( console ) {
        console.log(string);
    }
}


module.exports = libUtils;