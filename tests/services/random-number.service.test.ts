import fetch from "node-fetch";
import { getRandomNumberFactService }  from "../../src/services/random-number.services";
import { mocked } from 'ts-jest/utils'

jest.mock('node-fetch');
const mockedfetch = mocked(fetch, true);

beforeEach(() => {
    mockedfetch.mockClear();
});

test.skip("debe dar una respuesta valida", async () => {
    mockedfetch.mockReturnValueOnce({
        json: () => Promise.resolve({
            text: 'test pass',
            number: 4,
        })
    });

    const data = await getRandomNumberFactService();

    expect(data.text).toBe("test pass");
    expect(data.number).toBe(4);
    expect(typeof data.number).toBe("number");
});

test.skip("Muestra un error cuando se produce una excepción", async () => {
    mockedfetch.mockReturnValueOnce({
        json: () => Promise.reject(new Error("error expected"))
    });

    const data = await getRandomNumberFactService();

    expect(data).toBeInstanceOf(Error);
    expect(data.message).toBe("error expected");
});