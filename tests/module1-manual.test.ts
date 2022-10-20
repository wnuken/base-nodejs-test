
import * as app from '../src/api/utils/operators';

describe('Test manual', () => {
    test('test suma', () => {
        expect(app.doASum()).toEqual(15);
    });
});