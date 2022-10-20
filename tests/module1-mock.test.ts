var sum = jest.fn().mockReturnValue(20);
var dif = jest.fn().mockReturnValue(-20);

jest.mock('../src/api/utils/calculator', () => {
    return {
        sum,
        dif
    };
});

import * as operator from '../src/api/utils/operators';

describe('Test usando el modulo Calculadora', () => {
    test('Test de suma', () => {
        expect(operator.doASum()).toEqual(20);

        
    });
});