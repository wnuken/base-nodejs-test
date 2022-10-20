import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
import {createUser} from '../src/services/create-user';

jest.mock('node-fetch');
const mockedfetch = mocked(fetch, true);
const {Response} = jest.requireActual('node-fetch');

test.skip('Crear usuario retorna userId', async () => {
    mockedfetch.mockReturnValue(Promise.resolve(new Response('4')));

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});