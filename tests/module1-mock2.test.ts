import { mocked } from 'ts-jest/utils';
import * as operator from '../src/api/utils/operators';
import * as calculator from '../src/api/utils/calculator';

jest.mock('../src/api/utils/calculator');
const mockedcalculator = mocked(calculator, true);



describe('Test usando el modulo Calculadora', () => {
    test('Test de suma', () => {
        mockedcalculator.sum.mockReturnValue(20);

        expect(operator.doASum()).toEqual(20);
    });
});