import faker from 'faker';
import * as yup from 'yup';

import { handleMixedSchema } from './mixed';

describe('Create random mixed value for', () => {
  beforeEach(() => faker.seed(1));

  test('a set of allowed values', () => {
    const schema = yup.mixed().oneOf(['one', 'two', 'three']);
    const result = handleMixedSchema(schema);

    expect(result).toMatchInlineSnapshot(`"two"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('to be a string type', () => {
    const schema = yup.mixed<string>().oneOf(['one', 'two', 'three']);
    const result = handleMixedSchema(schema);

    expect(typeof result).toBe('string');
  });

  test('a single value', () => {
    const schema = yup.mixed().oneOf(['one']);
    const result = handleMixedSchema(schema);

    expect(result).toMatchInlineSnapshot(`"one"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('a set of allowed and disallowed values', () => {
    const schema = yup
      .mixed()
      .oneOf(['one', 'two', 'three'])
      .notOneOf(['two']);

    const result = handleMixedSchema(schema);

    expect(result).toMatchInlineSnapshot(`"one"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });
});
