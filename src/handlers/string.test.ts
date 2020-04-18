import faker from 'faker';
import * as yup from 'yup';

import { handleStringSchema } from './string';

describe('Create random strings for', () => {
  beforeEach(() => faker.seed(1));

  test('a standard string', () => {
    const schema = yup.string();
    const result = handleStringSchema(schema);

    expect(result).toMatchInlineSnapshot(`"Producer Solutions"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an uppercase string', () => {
    const schema = yup.string().uppercase();
    const result = handleStringSchema(schema);

    expect(result).toMatchInlineSnapshot(`"PRODUCER SOLUTIONS"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an lowercase string', () => {
    const schema = yup.string().lowercase();
    const result = handleStringSchema(schema);

    expect(result).toMatchInlineSnapshot(`"producer solutions"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an email', () => {
    const schema = yup.string().email();
    const result = handleStringSchema(schema);

    expect(result).toMatchInlineSnapshot(`"Zion.Reichel12@yahoo.com"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an url', () => {
    const schema = yup.string().url();
    const result = handleStringSchema(schema);

    expect(result).toMatchInlineSnapshot(`"http://zion.net"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });
});
