import faker from 'faker';
import * as yup from 'yup';

import { handleDateSchema } from './date';

describe('Create random date value for', () => {
  beforeEach(() => faker.seed(1));

  test('any date', () => {
    const schema = yup.date();
    const result = handleDateSchema(schema);

    expect(result).toMatchInlineSnapshot(`1970-01-01T00:00:01.417Z`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('to be a Date instance', () => {
    const schema = yup.date();
    const result = handleDateSchema(schema);

    expect(result).toBeInstanceOf(Date);
  });
});
