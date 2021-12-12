'use strict';

function lowerCase( string ) {
    if ( !string || typeof string !== 'string' ) {
        return '';
    }
    return string.toLowerCase();
}

module.exports = {
    lowerCase
};