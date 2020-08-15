import faker from 'faker';
import * as yup from 'yup';

import { getFakeData } from '../fake-data';
import { handleArraySchema } from './array';

describe('Create random array for', () => {
  beforeEach(() => faker.seed(1));

  test('any string', () => {
    const schema = yup.array(yup.string());
    const result = handleArraySchema(schema, '', getFakeData);

    expect(result).toMatchInlineSnapshot(`
      Array [
        "capacitor Music workforce",
        "Compatible",
      ]
    `);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('any number', () => {
    const schema = yup.array().of(yup.number());
    const result = handleArraySchema(schema, '', getFakeData);

    expect(result).toMatchInlineSnapshot(`
      Array [
        99718,
        72032,
      ]
    `);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('to be a Date instance', () => {
    const schema = yup.array().of(yup.number());
    const result = handleArraySchema(schema, '', getFakeData);

    expect(result).toBeInstanceOf(Array);
    expect(Array.isArray(result)).toBeTruthy();
  });
});
