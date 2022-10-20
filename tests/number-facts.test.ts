import  { getRandomNumberFact } from "../src/api/utils/number-facts";
import { getRandomNumberFactService }  from "../src/services/random-number.services";
import { mocked } from 'ts-jest/utils'

// Test deterministico

jest.mock('../src/services/random-number.services');
const mockedNumberFactService = mocked(getRandomNumberFactService, true);

beforeEach(() => {
    mockedNumberFactService.mockClear();
});

describe.skip("Prueba text", () => {
    test("Retorna un string", async () => {
        mockedNumberFactService.mockReturnValueOnce(Promise.resolve({
            text: 'test pass'
        }))
        const numberFact = await getRandomNumberFact();
    
        expect(typeof numberFact.text).toBe("string");
        expect(getRandomNumberFactService).toHaveBeenCalled();
        expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
    });
    
    test("Retorna un hola mundo", async () => {
        mockedNumberFactService.mockReturnValueOnce(Promise.resolve({text: "hola mundo"}))
        const numberFact = await getRandomNumberFact();
    
        expect(numberFact.text).toBe("hola mundo");
        expect(getRandomNumberFactService).toHaveBeenCalled();
        expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
    });
    
    test("Muestra un error cuando se produce una excepción", async () => {
        mockedNumberFactService.mockReturnValueOnce(Promise.resolve(new Error('ups')))
        const numberFact = await getRandomNumberFact();
    
        expect(numberFact).toBeInstanceOf(Error);
        expect(getRandomNumberFactService).toHaveBeenCalled();
        expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
    });

});

describe("Prueba text", () => {

})