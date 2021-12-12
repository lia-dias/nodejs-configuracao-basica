'use strict';
const { lowerCase } = require( './index' );

test( 'compara null com string', () => {
    const alterado = lowerCase( null );
    expect( alterado ).toBe( '' );
} );

test( 'compara numero com string', () => {
    const alterado = lowerCase( 0 );
    expect( alterado ).toBe( '' );
} );

test( 'compara string com string', () => {
    const alterado = lowerCase( 'Teste' );
    expect( alterado ).toBe( 'teste' );
} );