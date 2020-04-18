import faker from 'faker';
import * as yup from 'yup';

import { handleMixedSchema } from './mixed';

describe('Create random mixed value for', () => {
  beforeEach(() => faker.seed(1));

  test('a set of allowed values', () => {
    const result = handleMixedSchema(
      yup.mixed().oneOf(['one', 'two', 'three'])
    );

    expect(result).toMatchInlineSnapshot(`"two"`);
  });

  test('a single value', () => {
    const result = handleMixedSchema(yup.mixed().oneOf(['one']));

    expect(result).toMatchInlineSnapshot(`"one"`);
  });

  test('a set of allowed and disallowed values', () => {
    const result = handleMixedSchema(
      yup
        .mixed()
        .oneOf(['one', 'two', 'three'])
        .notOneOf(['two'])
    );

    expect(result).toMatchInlineSnapshot(`"one"`);
  });
});
