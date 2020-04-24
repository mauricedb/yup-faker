import faker from 'faker';
import * as yup from 'yup';

import { handleBooleanSchema } from './boolean';

describe('Create random boolean value for', () => {
  beforeEach(() => faker.seed(1));

  test('any boolean', () => {
    const schema = yup.boolean();
    const result = handleBooleanSchema(schema);

    expect(result).toMatchInlineSnapshot(`false`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('to be a boolean type', () => {
    const schema = yup.boolean();
    const result = handleBooleanSchema(schema);

    expect(typeof result).toBe('boolean');
  });
});
