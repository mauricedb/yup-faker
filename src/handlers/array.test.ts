import faker from 'faker';
import * as yup from 'yup';

import { handleArraySchema } from './array';
import { YupArraySchema } from 'types';

describe('Create random array for', () => {
  beforeEach(() => faker.seed(1));

  test('any string', () => {
    const schema = yup.array(yup.string());
    const result = handleArraySchema(schema as YupArraySchema);

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
    const result = handleArraySchema(schema as YupArraySchema);

    expect(result).toMatchInlineSnapshot(`
      Array [
        99718,
        72032,
      ]
    `);
    expect(() => schema.validateSync(result)).not.toThrow();
  });
});
