import faker from 'faker';
import * as yup from 'yup';

import { handleNumberSchema } from './number';

describe('Create random number value for', () => {
  beforeEach(() => faker.seed(1));

  test('any number', () => {
    const schema = yup.number();
    const result = handleNumberSchema(schema);

    expect(result).toMatchInlineSnapshot(`41702`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('to be a number type', () => {
    const schema = yup.number();
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
  });
});
